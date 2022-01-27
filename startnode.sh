#!/bin/bash

rm -rf $HOME/.osmosisd/

cd $HOME

osmosisd init --chain-id=testing testing --home=$HOME/.osmosisd
osmosisd keys add validator --keyring-backend=test --home=$HOME/.osmosisd
osmosisd add-genesis-account $(osmosisd keys show validator -a --keyring-backend=test --home=$HOME/.osmosisd) 100000000000stake,100000000000valtoken --home=$HOME/.osmosisd
osmosisd gentx validator 500000000stake --keyring-backend=test --home=$HOME/.osmosisd --chain-id=testing
osmosisd collect-gentxs --home=$HOME/.osmosisd

cat $HOME/.osmosisd/config/genesis.json | jq '.app_state["gov"]["voting_params"]["voting_period"]="10s"' > $HOME/.osmosisd/config/tmp_genesis.json && mv $HOME/.osmosisd/config/tmp_genesis.json $HOME/.osmosisd/config/genesis.json
cat $HOME/.osmosisd/config/genesis.json | jq '.app_state["gamm"]["params"]["pool_creation_fee"][0]["denom"]="stake"' > $HOME/.osmosisd/config/tmp_genesis.json && mv $HOME/.osmosisd/config/tmp_genesis.json $HOME/.osmosisd/config/genesis.json

osmosisd start --home=$HOME/.osmosisd
