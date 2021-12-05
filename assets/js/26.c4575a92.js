(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{470:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"gamm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gamm"}},[a._v("#")]),a._v(" Gamm")]),a._v(" "),t("p",[a._v("This document introduces the "),t("a",{attrs:{href:"#queries"}},[a._v("Queries")]),a._v(" and "),t("a",{attrs:{href:"#transactions"}},[a._v("Transactions")]),a._v(" of the "),t("strong",[a._v("G")]),a._v("eneralized "),t("strong",[a._v("A")]),a._v("utomated "),t("strong",[a._v("M")]),a._v("arket "),t("strong",[a._v("M")]),a._v("aker (GAMM) module. The GAMM module provides the logic to create and interact with liquidity pools on the Osmosis DEX.")]),a._v(" "),t("h1",{attrs:{id:"queries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[a._v("#")]),a._v(" Queries")]),a._v(" "),t("p",[a._v("The "),t("strong",[a._v("Query")]),a._v(" submodule of the GAMM module provides the logic to request information from the liquidity pools. It contains the following functions:")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#estimate-swap-exact-amount-in"}},[a._v("Estimate Swap Exact Amount In")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#estimate-swap-exact-amount-out"}},[a._v("Estimate Swap Exact Amount Out")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#num-pools"}},[a._v("Num Pools")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#pool"}},[a._v("Pool")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#pool-assets"}},[a._v("Pool Assets")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#pool-params"}},[a._v("Pool Params")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#pools"}},[a._v("Pools")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#spot-price"}},[a._v("Spot Price")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#total-liquidity"}},[a._v("Total Liquidity")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#total-share"}},[a._v("Total Share")])])]),a._v(" "),t("h2",{attrs:{id:"estimate-swap-exact-amount-in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#estimate-swap-exact-amount-in"}},[a._v("#")]),a._v(" Estimate Swap Exact Amount In")]),a._v(" "),t("p",[a._v("Query the estimated result of the "),t("a",{attrs:{href:"#swap-exact-amount-in"}},[a._v("Swap Exact Amount In")]),a._v(" transaction. Note that the flags "),t("em",[a._v("swap-route-pool")]),a._v(" and "),t("em",[a._v("swap-route-denoms")]),a._v(" are required.")]),a._v(" "),t("h3",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm estimate-swap-exact-amount-in "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("poolID"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sender"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tokenIn"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("p",[a._v("Query the amount of ATOM the sender would receive for swapping 1 OSMO in pool 1.")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm estimate-swap-exact-amount-in "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" osmo123nfq6m8f88m4g3sky570unsnk4zng4uqv7cm8 1000000uosmo --swap-route-pool-ids "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --swap-route-denoms ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2 \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"estimate-swap-exact-amount-out"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#estimate-swap-exact-amount-out"}},[a._v("#")]),a._v(" Estimate Swap Exact Amount Out")]),a._v(" "),t("p",[a._v("Query the estimated result of the "),t("a",{attrs:{href:"#swap-exact-amount-out"}},[a._v("Swap Exact Amount Out")]),a._v(" transaction. Note that the flags "),t("em",[a._v("swap-route-pool")]),a._v(" and "),t("em",[a._v("swap-route-denoms")]),a._v(" are required.")]),a._v(" "),t("h3",{attrs:{id:"usage-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm estimate-swap-exact-amount-out "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("poolID"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sender"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tokenOut"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"example-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("p",[a._v("Query the amount of OSMO the sender would require to swap 1 ATOM out of pool 1.")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm estimate-swap-exact-amount-out "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" osmo123nfq6m8f88m4g3sky570unsnk4zng4uqv7cm8 1000000ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2 --swap-route-pool-ids "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --swap-route-denoms uosmo\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"num-pools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#num-pools"}},[a._v("#")]),a._v(" Num Pools")]),a._v(" "),t("p",[a._v("Query the number of active pools.")]),a._v(" "),t("h3",{attrs:{id:"usage-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm num-pools\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"pool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pool"}},[a._v("#")]),a._v(" Pool")]),a._v(" "),t("p",[a._v("Query the parameter and assets of a specific pool.")]),a._v(" "),t("h3",{attrs:{id:"usage-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-4"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm pool "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("poolID"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"example-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("p",[a._v("Query parameters and assets from pool 1.")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm pool "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"pool-assets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pool-assets"}},[a._v("#")]),a._v(" Pool Assets")]),a._v(" "),t("p",[a._v("Query the assets of a specific pool. This query is a reduced form of the "),t("a",{attrs:{href:"#pool"}},[a._v("Pool")]),a._v(" query.")]),a._v(" "),t("h3",{attrs:{id:"usage-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-5"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm pool-assets "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("poolID"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Query the assets from pool 1.")]),a._v(" "),t("h3",{attrs:{id:"example-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm pool-assets "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"pool-params"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pool-params"}},[a._v("#")]),a._v(" Pool Params")]),a._v(" "),t("p",[a._v("Query the parameters of a specific pool. This query is a reduced form of the "),t("a",{attrs:{href:"#pool"}},[a._v("Pool")]),a._v(" query.")]),a._v(" "),t("h3",{attrs:{id:"usage-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-6"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm pool-params "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("poolID"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Query the parameters from pool 1.")]),a._v(" "),t("h3",{attrs:{id:"example-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-5"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm pool-params "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"pools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pools"}},[a._v("#")]),a._v(" Pools")]),a._v(" "),t("p",[a._v("Query parameters and assets of all active pools.")]),a._v(" "),t("h3",{attrs:{id:"usage-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-7"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm pools\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"spot-price"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spot-price"}},[a._v("#")]),a._v(" Spot Price")]),a._v(" "),t("p",[a._v("Query the spot price of a pool asset based on a specific pool it is in.")]),a._v(" "),t("h3",{attrs:{id:"usage-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-8"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm spot-price "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("poolID"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tokenInDenom"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tokenOutDenom"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"example-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-6"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("p",[a._v("Query the price of OSMO based on the price of ATOM in pool 1.")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm spot-price "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" uosmo ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"total-liquidity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#total-liquidity"}},[a._v("#")]),a._v(" Total Liquidity")]),a._v(" "),t("p",[a._v("Query the total liquidity of all active pools.")]),a._v(" "),t("h3",{attrs:{id:"usage-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-9"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm total-liquidity\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"total-share"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#total-share"}},[a._v("#")]),a._v(" Total Share")]),a._v(" "),t("p",[a._v("Query the total amount of GAMM shares of a specific pool.")]),a._v(" "),t("h3",{attrs:{id:"usage-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-10"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm total-share "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("poolID"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"example-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-7"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("p",[a._v("Query the total amount of GAMM shares of pool 1.")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd query gamm total-share "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h1",{attrs:{id:"transactions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[a._v("#")]),a._v(" Transactions")]),a._v(" "),t("p",[a._v("The "),t("strong",[a._v("Transaction")]),a._v(" submodule of the GAMM module provides the logic to create and interact with the liquidity pools. It contains the following functions:")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#create-pool"}},[a._v("Create Pool")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#join-pool"}},[a._v("Join Pool")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#exit-pool"}},[a._v("Exit Pool")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#join-swap-extern-amount-in"}},[a._v("Join Swap Extern Amount In")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#exit-swap-extern-amount-out"}},[a._v("Exit Swap Extern Amount Out")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#join-swap-share-amount-out"}},[a._v("Join Swap Share Amount Out")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#exit-swap-share-amount-in"}},[a._v("Exit Swap Share Amount In")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#swap-exact-amount-in"}},[a._v("Swap Exact Amount In")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#swap-exact-amount-out"}},[a._v("Swap Exact Amount Out")])])]),a._v(" "),t("h2",{attrs:{id:"create-pool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-pool"}},[a._v("#")]),a._v(" Create Pool")]),a._v(" "),t("p",[a._v("Create a new liquidity pool and provide the initial liquidity to it. Pool initialization parameters must be provided through a JSON file using the flag "),t("em",[a._v("pool-file")]),a._v(".")]),a._v(" "),t("h4",{attrs:{id:"usage-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-11"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm create-pool "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("The configuration file "),t("em",[a._v("config.json")]),a._v(" must specify the following parameters.")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"weights"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("list weighted denoms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(",\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"initial-deposit"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("list of denoms with initial deposit amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(",\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"swap-fee"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("swap fee "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" percentage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(",\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"exit-fee"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("exit fee "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" percentage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(",\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"future-governor"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("number of hours"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h3",{attrs:{id:"example-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-8"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("p",[a._v("Create a new ATOM-OSMO liquidity pool with a swap and exit fee of 1%.")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("tx gamm create-pool --pool-file "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/public/config.json --from myKeyringWallet\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("The configuration file contains the following parameters.")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"weights"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"5uatom,5uosmo"')]),a._v(",\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"initial-deposit"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"100uatom,100uosmo"')]),a._v(",\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"swap-fee"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.01"')]),a._v(",\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"exit-fee"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.01"')]),a._v(",\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"future-governor"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"168h"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h2",{attrs:{id:"join-pool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#join-pool"}},[a._v("#")]),a._v(" Join Pool")]),a._v(" "),t("p",[a._v("Join a specific pool with a custom amount of tokens. Note that the flags "),t("em",[a._v("pool-id")]),a._v(", "),t("em",[a._v("max-amounts-in")]),a._v(" and "),t("em",[a._v("share-amount-out")]),a._v(" are required.")]),a._v(" "),t("h4",{attrs:{id:"usage-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-12"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm join-pool "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"example-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-9"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("p",[a._v("Join pool 1 with 1 OSMO and the respective amount of ATOM, using myKeyringWallet.")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm join-pool --pool-id "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" --max-amounts-in 1000000uosmo --max-amounts-in 1000000uion --share-amount-out "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000000")]),a._v(" --from myKeyringWallet\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"exit-pool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exit-pool"}},[a._v("#")]),a._v(" Exit Pool")]),a._v(" "),t("p",[a._v("Exit a specific pool with a custom amount of tokens. Note that the flags "),t("em",[a._v("pool-id")]),a._v(", "),t("em",[a._v("min-amounts-out")]),a._v(" and "),t("em",[a._v("share-amount-in")]),a._v(" are required.")]),a._v(" "),t("h4",{attrs:{id:"usage-13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-13"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm exit-pool "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"example-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-10"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("p",[a._v("Exit pool one with 1 OSMO and the respective amount of ATOM using myKeyringWallet.")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm exit-pool --pool-id "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --min-amounts-out 1000000uosmo --share-amount-in "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000000")]),a._v(" --from myKeyringWallet\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"join-swap-extern-amount-in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#join-swap-extern-amount-in"}},[a._v("#")]),a._v(" Join Swap Extern Amount In")]),a._v(" "),t("p",[a._v("Note that the flags "),t("em",[a._v("pool-id")]),a._v(" is required.")]),a._v(" "),t("h4",{attrs:{id:"usage-14"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-14"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm join-swap-extern-amount-in "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("token-in"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("share-out-min-amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"example-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-11"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm join-swap-extern-amount-in 1000000uosmo "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000000")]),a._v(" --pool-id "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --from myKeyringWallet\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"exit-swap-extern-amount-out"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exit-swap-extern-amount-out"}},[a._v("#")]),a._v(" Exit Swap Extern Amount Out")]),a._v(" "),t("p",[a._v("Note that the flag "),t("em",[a._v("pool-id")]),a._v(" is required.")]),a._v(" "),t("h4",{attrs:{id:"usage-15"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-15"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm exit-swap-extern-amount-out "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("token-out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("share-in-max-amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"example-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-12"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm exit-swap-extern-amount-out 1000000uosmo "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000000")]),a._v(" --pool-id "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --from myKeyringWallet\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"join-swap-share-amount-out"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#join-swap-share-amount-out"}},[a._v("#")]),a._v(" Join Swap Share Amount Out")]),a._v(" "),t("p",[a._v("Note that the flag "),t("em",[a._v("pool-id")]),a._v(" is required.")]),a._v(" "),t("h4",{attrs:{id:"usage-16"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-16"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm join-swap-share-amount-out "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("token-in-denom"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("token-in-max-amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("share-out-amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"example-13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-13"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm join-swap-share-amount-out uosmo "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000000")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000000")]),a._v(" --pool-id "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --from myKeyringWallet\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"exit-swap-share-amount-in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exit-swap-share-amount-in"}},[a._v("#")]),a._v(" Exit Swap Share Amount In")]),a._v(" "),t("p",[a._v("Note that the flag "),t("em",[a._v("pool-id")]),a._v(" is required.")]),a._v(" "),t("h4",{attrs:{id:"usage-17"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-17"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm exit-swap-share-amount-in "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("token-out-denom"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("share-in-amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("token-out-min-amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"example-14"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-14"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm exit-swap-share-amount-in uosmo "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000000")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000000")]),a._v(" --pool-id "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --from myKeyringWallet\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"swap-exact-amount-in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swap-exact-amount-in"}},[a._v("#")]),a._v(" Swap Exact Amount In")]),a._v(" "),t("p",[a._v("Swap an exact amount of tokens into a specific pool. Note that the flags "),t("em",[a._v("swap-route-pool-ids")]),a._v(" and "),t("em",[a._v("swap-route-denoms")]),a._v(" are required.")]),a._v(" "),t("h4",{attrs:{id:"usage-18"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-18"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm swap-exact-amount-in "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("token-in"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("token-out-min-amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"example-15"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-15"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("p",[a._v("Swap 1 OSMO through pool 1 into at least 0.3 ATOM using MyKeyringWallet.")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm swap-exact-amount-in 1000000uosmo "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("300000")]),a._v(" --swap-route-pool-ids "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --swap-route-denoms ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2 --from MyKeyringWallet\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"swap-exact-amount-out"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swap-exact-amount-out"}},[a._v("#")]),a._v(" Swap Exact Amount Out")]),a._v(" "),t("p",[a._v("Swap an exact amount of tokens out of a specific pool. Note that the flags "),t("em",[a._v("swap-route-pool-ids")]),a._v(" and "),t("em",[a._v("swap-route-denoms")]),a._v(" are required.")]),a._v(" "),t("h4",{attrs:{id:"usage-19"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-19"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm swap-exact-amount-out "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("token-out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("token-out-max-amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"example-16"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-16"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("p",[a._v("Swap 1 ATOM through pool 1 into at most 2.5 OSMO using MyKeyringWallet.")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("osmosisd tx gamm swap-exact-amount-out 1000000ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("250000")]),a._v(" --swap-route-pool-ids "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --swap-route-denoms uosmo --from MyKeyringWallet\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h1",{attrs:{id:"other-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-resources"}},[a._v("#")]),a._v(" Other resources")]),a._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/developing/modules/client/docs/create-lbp-pool.html"}},[a._v("Creating a liquidity bootstrapping pool")])],1),a._v(" "),t("li",[t("RouterLink",{attrs:{to:"/developing/modules/client/docs/create-pool.html"}},[a._v("Creating a pool with a pool file")])],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);