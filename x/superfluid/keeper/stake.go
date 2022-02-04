package keeper

import (
	"fmt"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	lockuptypes "github.com/osmosis-labs/osmosis/v7/x/lockup/types"
	minttypes "github.com/osmosis-labs/osmosis/v7/x/mint/types"
	"github.com/osmosis-labs/osmosis/v7/x/superfluid/types"
)

const SuperfluidUnbondDuration = time.Hour * 24 * 21

func stakingSuffix(valAddr string) string {
	return fmt.Sprintf("superbonding%s", valAddr)
}

func unstakingSuffix(valAddr string) string {
	return fmt.Sprintf("superunbonding%s", valAddr)
}

func (k Keeper) RefreshIntermediaryDelegationAmounts(ctx sdk.Context) {
	accs := k.GetAllIntermediaryAccounts(ctx)
	for _, acc := range accs {
		mAddr := acc.GetAddress()
		bondDenom := k.sk.BondDenom(ctx)

		balance := k.bk.GetBalance(ctx, mAddr, bondDenom)
		if balance.Amount.IsPositive() { // if free balance is available on intermediary account burn it
			err := k.bk.SendCoinsFromAccountToModule(ctx, mAddr, stakingtypes.NotBondedPoolName, sdk.Coins{balance})
			if err != nil {
				panic(err)
			}
			err = k.bk.BurnCoins(ctx, stakingtypes.NotBondedPoolName, sdk.Coins{balance})
			if err != nil {
				panic(err)
			}
		}

		valAddress, err := sdk.ValAddressFromBech32(acc.ValAddr)
		if err != nil {
			panic(err)
		}

		validator, found := k.sk.GetValidator(ctx, valAddress)
		if !found {
			k.Logger(ctx).Error(fmt.Sprintf("validator not found or %s", acc.ValAddr))
			continue
		}

		// undelegate full amount from the validator
		delegation, found := k.sk.GetDelegation(ctx, mAddr, valAddress)

		if found {
			returnAmount, err := k.sk.Unbond(ctx, mAddr, valAddress, delegation.Shares)
			if err != nil {
				panic(err)
			}
			if returnAmount.IsPositive() {
				// burn undelegated tokens
				burnCoins := sdk.Coins{sdk.NewCoin(bondDenom, returnAmount)}
				if validator.IsBonded() {
					err = k.bk.BurnCoins(ctx, stakingtypes.BondedPoolName, burnCoins)
					if err != nil {
						panic(err)
					}
				} else {
					err = k.bk.BurnCoins(ctx, stakingtypes.NotBondedPoolName, burnCoins)
					if err != nil {
						panic(err)
					}
				}
			}
		}

		twap := k.GetCurrentEpochOsmoEquivalentTWAP(ctx, acc.Denom)
		if twap.EpochTwapPrice.IsZero() {
			continue
		}

		// mint OSMO token based on TWAP of locked denom to denom module account
		// Get total delegation from synthetic lockups
		totalSuperfluidDelegation := k.lk.GetPeriodLocksAccumulation(ctx, lockuptypes.QueryCondition{
			LockQueryType: lockuptypes.ByDuration,
			Denom:         acc.Denom + stakingSuffix(acc.ValAddr),
			Duration:      time.Hour * 24 * 14,
		})
		decAmt := twap.EpochTwapPrice.Mul(totalSuperfluidDelegation.ToDec())
		asset := k.GetSuperfluidAsset(ctx, acc.Denom)
		amt := k.GetRiskAdjustedOsmoValue(ctx, asset, decAmt.RoundInt())

		if amt.IsZero() {
			continue
		}

		coins := sdk.Coins{sdk.NewCoin(bondDenom, amt)}
		err = k.bk.MintCoins(ctx, minttypes.ModuleName, coins)
		if err != nil {
			panic(err)
		}
		err = k.bk.SendCoinsFromModuleToAccount(ctx, minttypes.ModuleName, mAddr, coins)
		if err != nil {
			panic(err)
		}

		// make delegation from module account to the validator
		cacheCtx, write := ctx.CacheContext()
		_, err = k.sk.Delegate(cacheCtx, mAddr, amt, stakingtypes.Unbonded, validator, true)
		if err != nil {
			// this could happen when validator is fully slashed
			k.Logger(ctx).Error(err.Error())
		} else {
			write()
		}
	}
}

func (k Keeper) SuperfluidDelegate(ctx sdk.Context, lockID uint64, valAddr string) error {
	intermediaryAccAddr := k.GetLockIdIntermediaryAccountConnection(ctx, lockID)
	if !intermediaryAccAddr.Empty() {
		return types.ErrAlreadyUsedSuperfluidLockup
	}

	// check unbonding synthetic lockup already exists on this validator
	// in this case automatic superfluid undelegation should fail and it is the source of chain halt
	suffix := unstakingSuffix(valAddr)
	_, err := k.lk.GetSyntheticLockup(ctx, lockID, suffix)
	if err == nil {
		return types.ErrUnbondingSyntheticLockupExists
	}

	// Register a synthetic lockup for superfluid staking
	suffix = stakingSuffix(valAddr)
	err = k.lk.CreateSyntheticLockup(ctx, lockID, suffix, 0)
	if err != nil {
		return err
	}

	lock, err := k.lk.GetLockByID(ctx, lockID)
	if err != nil {
		return err
	}
	if lock.Coins.Len() != 1 {
		return types.ErrMultipleCoinsLockupNotSupported
	}

	// prevent unbonding lockups to be not able to be used for superfluid staking
	if lock.IsUnlocking() {
		return types.ErrUnbondingLockupNotSupported
	}

	// length check
	if lock.Duration < SuperfluidUnbondDuration { // if less than bonding, skip
		return types.ErrNotEnoughLockupDuration
	}

	// create intermediary account that converts LP token to OSMO
	acc := types.SuperfluidIntermediaryAccount{
		Denom:   lock.Coins[0].Denom,
		ValAddr: valAddr,
	}

	mAddr := acc.GetAddress()
	twap := k.GetLastEpochOsmoEquivalentTWAP(ctx, acc.Denom)
	if twap.EpochTwapPrice.IsZero() {
		return types.ErrZeroPriceAssetNotAllowed
	}
	// mint OSMO token based on TWAP of locked denom to denom module account
	decAmt := twap.EpochTwapPrice.Mul(lock.Coins.AmountOf(acc.Denom).ToDec())
	asset := k.GetSuperfluidAsset(ctx, acc.Denom)
	amt := k.GetRiskAdjustedOsmoValue(ctx, asset, decAmt.RoundInt())

	bondDenom := k.sk.BondDenom(ctx)
	coins := sdk.Coins{sdk.NewCoin(bondDenom, amt)}
	err = k.bk.MintCoins(ctx, minttypes.ModuleName, coins)
	if err != nil {
		return err
	}
	k.ak.SetAccount(ctx, authtypes.NewBaseAccount(mAddr, nil, 0, 0))
	err = k.bk.SendCoinsFromModuleToAccount(ctx, minttypes.ModuleName, mAddr, coins)
	if err != nil {
		return err
	}

	// make delegation from module account to the validator
	valAddress, err := sdk.ValAddressFromBech32(valAddr)
	if err != nil {
		return err
	}
	validator, found := k.sk.GetValidator(ctx, valAddress)
	if !found {
		return stakingtypes.ErrNoValidatorFound
	}
	_, err = k.sk.Delegate(ctx, mAddr, amt, stakingtypes.Unbonded, validator, true)
	if err != nil {
		return err
	}

	// create a perpetual gauge to send staking distribution rewards to if not available yet
	prevAcc := k.GetIntermediaryAccount(ctx, mAddr)
	if prevAcc.Denom == "" { // when intermediary account is not created yet
		acc.GaugeId, err = k.ik.CreateGauge(ctx, true, mAddr, sdk.Coins{}, lockuptypes.QueryCondition{
			LockQueryType: lockuptypes.ByDuration,
			Denom:         acc.Denom + suffix,
			Duration:      time.Hour * 24 * 14,
		}, ctx.BlockTime(), 1)
		if err != nil {
			return err
		}

		// connect intermediary account struct to its address
		k.SetIntermediaryAccount(ctx, acc)
	}

	// create connection record between lock id and intermediary account
	k.SetLockIdIntermediaryAccountConnection(ctx, lockID, acc)

	return nil
}

func (k Keeper) SuperfluidUndelegate(ctx sdk.Context, lockID uint64) (sdk.ValAddress, error) {
	// Remove previously created synthetic lockup
	intermediaryAccAddr := k.GetLockIdIntermediaryAccountConnection(ctx, lockID)
	if intermediaryAccAddr.Empty() {
		return nil, types.ErrNotSuperfluidUsedLockup
	}
	intermediaryAcc := k.GetIntermediaryAccount(ctx, intermediaryAccAddr)
	suffix := stakingSuffix(intermediaryAcc.ValAddr)
	err := k.lk.DeleteSyntheticLockup(ctx, lockID, suffix)
	if err != nil {
		return nil, err
	}

	suffix = unstakingSuffix(intermediaryAcc.ValAddr)
	err = k.lk.CreateSyntheticLockup(ctx, lockID, suffix, SuperfluidUnbondDuration)
	if err != nil {
		return nil, err
	}

	lock, err := k.lk.GetLockByID(ctx, lockID)
	if err != nil {
		return nil, err
	}

	twap := k.GetLastEpochOsmoEquivalentTWAP(ctx, intermediaryAcc.Denom)
	decAmt := twap.EpochTwapPrice.Mul(lock.Coins.AmountOf(intermediaryAcc.Denom).ToDec())
	asset := k.GetSuperfluidAsset(ctx, intermediaryAcc.Denom)
	amt := k.GetRiskAdjustedOsmoValue(ctx, asset, decAmt.RoundInt())

	valAddr, err := sdk.ValAddressFromBech32(intermediaryAcc.ValAddr)
	if err != nil {
		return nil, err
	}

	shares, err := k.sk.ValidateUnbondAmount(
		ctx, intermediaryAcc.GetAddress(), valAddr, amt,
	)

	if err != nil {
		k.Logger(ctx).Error(err.Error())
	} else if shares.IsPositive() {
		// Note: undelegated amount is automatically sent to intermediary account's free balance
		// it is burnt on epoch interval
		_, err = k.sk.Undelegate(ctx, intermediaryAcc.GetAddress(), valAddr, shares)
		if err != nil {
			return valAddr, err
		}
	}

	k.DeleteLockIdIntermediaryAccountConnection(ctx, lockID)
	return valAddr, nil
}

func (k Keeper) SuperfluidRedelegate(ctx sdk.Context, lockID uint64, newValAddr string) error {
	// Note: we prevent circular redelegations since when unbonding lockup is available from a specific validator,
	// not able to redelegate or undelegate again, especially the case for automatic undelegation when native lockup unlock

	valAddr, err := k.SuperfluidUndelegate(ctx, lockID)
	if err != nil {
		return err
	}

	if valAddr.String() == newValAddr {
		return types.ErrSameValidatorRedelegation
	}

	return k.SuperfluidDelegate(ctx, lockID, newValAddr)
}

// TODO: Need to (eventually) override the existing staking messages and queries, for undelegating, delegating, rewards, and redelegating, to all be going through all superfluid module.
// Want integrators to be able to use the same staking queries and messages
// Eugen’s point: Only rewards message needs to be updated. Rest of messages are fine
// Queries need to be updated
// We can do this at the very end though, since it just relates to queries.
