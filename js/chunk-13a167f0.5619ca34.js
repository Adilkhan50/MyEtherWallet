(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13a167f0"],{"038f":function(e,t,n){e.exports=n.p+"img/Address.d40b8287.svg"},"09de":function(e,t,n){},1113:function(e,t,n){e.exports=n.p+"img/wallet.66b8433e.svg"},"1bd2":function(e,t,n){"use strict";var r=n("5233"),s=n.n(r);s.a},"240d":function(e,t,n){e.exports=n.p+"img/printer-white.f359e248.svg"},"442d":function(e,t,n){},"4da0":function(e,t,n){e.exports=n.p+"img/qr-code-white.6d0e26cd.svg"},5233:function(e,t,n){},5928:function(e,t,n){"use strict";var r=n("da28"),s=n.n(r);s.a},"5d1e":function(e,t,n){"use strict";var r=n("09de"),s=n.n(r);s.a},7024:function(e,t,n){},"7ba3":function(e,t,n){},"84a4":function(e,t,n){"use strict";var r=n("7024"),s=n.n(r);s.a},"8e17":function(e,t,n){},"91d9":function(e,t,n){"use strict";var r=n("f50b"),s=n.n(r);s.a},9585:function(e,t,n){"use strict";var r=n("7ba3"),s=n.n(r);s.a},bd8c:function(e,t,n){"use strict";var r=n("8e17"),s=n.n(r);s.a},c56d:function(e,t,n){"use strict";var r=n("442d"),s=n.n(r);s.a},da28:function(e,t,n){},f50b:function(e,t,n){},f9553:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-layout"},[n("wallet-password-modal"),n("enter-pin-number-modal"),n("ledger-app-modal",{ref:"ledgerAppModal",attrs:{networks:e.Networks},on:{hardwareWalletOpen:e.toggleNetworkAddrModal}}),n("mnemonic-modal",{ref:"mnemonicPhraseModal",attrs:{"hardware-wallet-open":e.toggleNetworkAddrModal}}),n("mnemonic-password-modal",{ref:"mnemonicPhrasePassword",attrs:{"hardware-wallet-open":e.toggleNetworkAddrModal,phrase:e.phrase}}),n("network-and-address-modal",{ref:"networkAddress",attrs:{"hardware-wallet":e.hwInstance}}),n("hardware-password-modal",{ref:"hardwareModal",attrs:{"wallet-constructor":e.walletConstructor,"hardware-brand":e.hardwareBrand},on:{hardwareWalletOpen:e.toggleNetworkAddrModal}}),n("print-modal",{ref:"printModal",attrs:{"priv-key":!e.wallet,address:e.account.address}}),n("address-qrcode-modal",{ref:"addressQrcodeModal",attrs:{address:e.account.address}}),n("div",{staticClass:"mobile-interface-address-block"},[n("mobile-interface-address",{attrs:{address:e.address,print:e.print,"switch-addr":e.switchAddress}})],1),n("div",{staticClass:"wrap"},[n("div",{staticClass:"sidemenu"},[n("div",{staticClass:"side-nav-background",class:e.isSidemenuOpen&&"side-nav-open",on:{click:function(t){e.toggleSideMenu}}}),n("div",{staticClass:"side-nav",class:e.isSidemenuOpen&&"side-nav-open"},[n("interface-side-menu")],1)]),n("div",{staticClass:"contents"},[n("div",{staticClass:"tx-contents"},[n("div",{staticClass:"content-container mobile-hide"},[e.wallet?n("interface-address",{attrs:{address:e.address,print:e.print,"switch-addr":e.switchAddress,"display-addr":e.wallet.displayAddress,qrcode:e.openAddressQrcode}}):e._e()],1),n("div",{staticClass:"content-container mobile-hide"},[n("interface-balance",{attrs:{balance:e.balance,"get-balance":e.getBalance}})],1),n("div",{staticClass:"content-container mobile-hide"},[n("interface-network",{attrs:{"block-number":e.blockNumber}})],1),n("router-view",{attrs:{"tokens-with-balance":e.tokensWithBalance,"get-balance":e.getBalance,tokens:e.tokens,"highest-gas":e.highestGas,nonce:e.nonce,value:e.value,data:e.data,to:e.to,gaslimit:e.gaslimit,gas:e.gas,tokensymbol:e.tokensymbol,"is-prefilled":e.prefilled,"clear-prefilled":e.clearPrefilled,"check-prefilled":e.checkPrefilled}}),n("div",{staticClass:"tokens"},[n("interface-tokens",{attrs:{"fetch-tokens":e.setTokens,"get-token-balance":e.getTokenBalance,tokens:e.tokens,"received-tokens":e.receivedTokens,"reset-token-selection":e.setTokensWithBalance}})],1)],1)])])],1)},s=[],a=(n("a4d3"),n("99af"),n("4de4"),n("d81d"),n("4e82"),n("b0c0"),n("a9e3"),n("b680"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("25f0"),n("3ca3"),n("159b"),n("ddb0"),n("96cf"),n("c964")),o=n("fc11"),i=n("2f62"),c=n("3297"),d=n.n(c),l=n("6035"),u=n("7416"),p=n("6d89b"),h=n("ae88"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-modal",{ref:"password",staticClass:"bootstrap-modal modal-software nopadding",attrs:{title:e.$t("accessWallet.password"),"hide-footer":"",centered:"",static:"",lazy:""},on:{shown:e.focusInput}},[r("div",{staticClass:"warning"},[r("warning-message")],1),r("div",{staticClass:"modal-content-block"},[r("form",{staticClass:"password-form"},[r("div",{staticClass:"input-container"},["checkbox"===(e.show?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"mnemonicPasswordInput",attrs:{name:"Password",autocomplete:"off",placeholder:"Enter password",type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{change:function(t){var n=e.password,r=t.target,s=!!r.checked;if(Array.isArray(n)){var a=null,o=e._i(n,a);r.checked?o<0&&(e.password=n.concat([a])):o>-1&&(e.password=n.slice(0,o).concat(n.slice(o+1)))}else e.password=s}}}):"radio"===(e.show?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"mnemonicPasswordInput",attrs:{name:"Password",autocomplete:"off",placeholder:"Enter password",type:"radio"},domProps:{checked:e._q(e.password,null)},on:{change:function(t){e.password=null}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"mnemonicPasswordInput",attrs:{name:"Password",autocomplete:"off",placeholder:"Enter password",type:e.show?"text":"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.show?r("img",{attrs:{alt:"",src:n("5de7")},on:{click:function(t){return t.preventDefault(),e.switchViewPassword(t)}}}):e._e(),e.show?e._e():r("img",{attrs:{alt:"",src:n("31de")},on:{click:function(t){return t.preventDefault(),e.switchViewPassword(t)}}})]),r("p",{directives:[{name:"show",rawName:"v-show",value:""!==e.error,expression:"error !== ''"}],staticClass:"error"},[e._v(e._s(e.error))]),r("button",{staticClass:"submit-button large-round-button-green-filled",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.unlockWallet(t)}}},[r("span",{directives:[{name:"show",rawName:"v-show",value:!e.spinner,expression:"!spinner"}]},[e._v(" "+e._s(e.$t("common.continue"))+" ")]),r("i",{directives:[{name:"show",rawName:"v-show",value:e.spinner,expression:"spinner"}],staticClass:"fa fa-spin fa-spinner fa-lg"})])]),r("div",{staticClass:"support-block"},[r("customer-support")],1)])])},w=[],m=n("20fe"),b=n("e3b9"),v=n("ce96"),g=n("20be"),k={components:{"warning-message":g["a"],"customer-support":m["a"]},props:{hardwareWalletOpen:{type:Function,default:function(){}},phrase:{type:String,default:""}},data:function(){return{show:!1,password:"",error:"",spinner:!1}},watch:{password:function(){this.error=""}},methods:{unlockWallet:function(){var e=this;this.spinner=!0,Object(b["e"])(this.phrase,this.password).then((function(t){e.password="",e.spinner=!1,e.hardwareWalletOpen(t)})).catch((function(t){e.password="",e.spinner=!1,e.error=t,v["e"].responseHandler(t,v["e"].ERROR)}))},switchViewPassword:function(){this.show=!this.show},focusInput:function(){this.$refs.mnemonicPasswordInput.focus()}}},y=k,O=(n("bd8c"),n("2877")),C=Object(O["a"])(y,f,w,!1,null,"bf779efc",null),P=C.exports,j=n("9dbe"),N=n("f73c"),$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"interface-address"},[r("div",{staticClass:"info-block address"},[r("div",{staticClass:"block-image"},[r("blockie",{staticClass:"blockie-image",attrs:{address:e.address,size:8,scale:16,width:"64px",height:"64px"}}),r("input",{ref:"copyAddress",staticClass:"hidden-input",attrs:{autocomplete:"off"},domProps:{value:e.address}})],1),r("div",{staticClass:"block-content"},[r("div",{staticClass:"information-container"},[r("h2",[e._v(e._s(e.$t("common.addr")))]),r("p",{staticClass:"address"},[e._v(e._s(e.address))])]),r("div",{staticClass:"icon-container"},[e.hasMultipleAddr?r("button",{staticClass:"change-button",attrs:{id:"popover-ref-switch"},on:{click:e.switchAddr}},[e._v(" "+e._s(e.$t("interface.addr.button-switch"))+" ")]):e._e(),r("b-btn",{staticClass:"custom-tooltip",attrs:{id:"popover-ref-qrcode"},on:{click:e.qrcode}},[r("img",{attrs:{alt:"",src:n("4da0")}})]),r("b-btn",{staticClass:"custom-tooltip",attrs:{id:"popover-ref-print"},on:{click:e.print}},[r("img",{attrs:{alt:"",src:n("240d")}})]),r("b-btn",{staticClass:"custom-tooltip",attrs:{id:"popover-ref-copy"},on:{click:e.copy}},[r("img",{attrs:{alt:"",src:n("fd74")}})]),r("b-btn",{directives:[{name:"show",rawName:"v-show",value:e.displayAddr,expression:"displayAddr"}],staticClass:"custom-tooltip button-address",attrs:{id:"popover-ref-address"},on:{click:e.displayAddr}},[r("img",{attrs:{alt:"",src:n("038f")}})]),r("b-popover",{attrs:{content:e.$t("popover.addr-switch"),target:"popover-ref-address",placement:"top",triggers:"hover",title:""}}),r("b-popover",{attrs:{content:e.$t("popover.print"),target:"popover-ref-print",placement:"top",triggers:"hover",title:""}}),r("b-popover",{attrs:{content:e.$t("common.copy"),target:"popover-ref-copy",placement:"top",triggers:"hover",title:""}}),r("b-popover",{attrs:{content:e.$t("popover.addr-switch"),target:"popover-ref-switch",placement:"top",triggers:"hover",title:""}}),r("b-popover",{attrs:{content:e.$t("popover.addr-display"),target:"popover-ref-address",placement:"top",triggers:"hover",title:""}}),r("b-popover",{attrs:{content:e.$t("popover.addr-qr"),target:"popover-ref-qrcode",placement:"top",triggers:"hover",title:""}})],1)])])])},_=[],A=n("c8e5"),x=n("59c3");function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M={components:{blockie:A["a"]},props:{address:{type:String,default:""},print:{type:Function,default:function(){}},switchAddr:{type:Function,default:function(){}},displayAddr:{type:Function,default:void 0},qrcode:{type:Function,default:function(){}}},data:function(){return{hasMultipleAddr:!1}},computed:E({},Object(i["b"])(["account"])),mounted:function(){null!==this.account.address&&(this.account.identifier!==x["c"]&&this.account.identifier!==x["g"]&&this.account.identifier!==x["e"]&&this.account.identifier!==x["j"]?this.hasMultipleAddr=!0:this.hasMultipleAddr=!1)},methods:{copy:function(){this.$refs.copyAddress.select(),document.execCommand("copy"),v["e"].responseHandler(this.$t("common.copied"),v["e"].INFO)}}},S=M,I=(n("9585"),Object(O["a"])(S,$,_,!1,null,"1e069607",null)),D=I.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"info-block-container"},[r("interface-balance-modal",{ref:"balance",attrs:{balance:e.balance}}),r("div",{staticClass:"info-block balance"},[e._m(0),r("div",{staticClass:"block-content"},[r("div",{staticClass:"information-container"},[r("h2",[e._v(e._s(e.$t("common.balance.string")))]),r("div",{staticClass:"balance-text-container"},[r("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.balance,expression:"balance !== undefined"}],staticClass:"balance-text"},[r("p",[e._v(" "+e._s(e.balance)+" "),r("span",[e._v(" "+e._s(e.network.type.currencyName)+" ")])])]),r("i",{directives:[{name:"show",rawName:"v-show",value:void 0===e.balance,expression:"balance === undefined"}],staticClass:"fa fa-spin fa-spinner"})])]),r("div",{staticClass:"icon-container"},[r("b-btn",{staticClass:"custom-tooltip",attrs:{id:"balanceCheck"},on:{click:e.balanceModalOpen}},[r("img",{attrs:{alt:"",src:n("617f")}})]),r("b-btn",{staticClass:"custom-tooltip",attrs:{id:"refreshBalance"},on:{click:e.fetchBalance}},[r("img",{directives:[{name:"show",rawName:"v-show",value:!e.fetchingBalance,expression:"!fetchingBalance"}],attrs:{alt:"",src:n("acfc")}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.fetchingBalance,expression:"fetchingBalance"}],staticClass:"fa fa-lg fa-spinner fa-spin"})]),r("b-popover",{attrs:{content:e.$t("interface.check-balance.string"),target:"balanceCheck",placement:"top",triggers:"hover",title:""}}),r("b-popover",{attrs:{content:e.$t("interface.check-balance.refresh"),target:"refreshBalance",placement:"top",triggers:"hover",title:""}})],1)])])],1)},T=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"block-image"},[r("div",{staticClass:"icon-border"},[r("img",{staticClass:"icon",attrs:{alt:"",src:n("1113")}})])])}],W=n("0598");function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q={components:{"interface-balance-modal":W["a"]},props:{balance:{type:String,default:"0"},getBalance:{type:Function,default:function(){}}},data:function(){return{fetchingBalance:!1}},computed:q({},Object(i["b"])(["network"])),watch:{balance:function(){this.fetchingBalance=!1}},methods:{balanceModalOpen:function(){this.$refs.balance.$refs.balance.show()},fetchBalance:function(){var e=this;this.fetchingBalance=!0,setTimeout((function(){e.getBalance(),e.fetchingBalance=!1}),1e3)}}},F=Q,G=(n("c56d"),Object(O["a"])(F,R,T,!1,null,"a63ea972",null)),U=G.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"info-block-container"},[n("interface-network-modal",{ref:"network"}),n("div",{staticClass:"info-block network"},[n("div",{staticClass:"block-image"},[n("div",{staticClass:"network-type"},[n("div",{staticClass:"icon-block"},[n("img",{staticClass:"icon",attrs:{src:e.network.type.icon,alt:""}})])])]),n("div",{staticClass:"block-content"},[n("div",{staticClass:"information-container"},[n("div",{staticClass:"title-and-helper"},[n("h2",[e._v(e._s(e.$t("common.network")))])]),e.account.identifier!==e.identifier?n("p",[e._v(" "+e._s(e.network.service+"("+e.network.type.name+")")+" ")]):n("p",[e._v(e._s("Web3 Provider("+e.network.type.name+")"))]),n("p",[e._v(" "+e._s(e.$t("interface.network-modal.last-block"))+"# : "),n("span",{directives:[{name:"show",rawName:"v-show",value:""!==e.parsedNetwork,expression:"parsedNetwork !== ''"}]},[e._v(" "+e._s(e.parsedNetwork))]),n("i",{directives:[{name:"show",rawName:"v-show",value:""===e.parsedNetwork,expression:"parsedNetwork === ''"}],staticClass:"fa fa-spinner fa-spin"})])]),n("div",{staticClass:"icon-container"},[e.account.identifier!==e.identifier?n("button",{staticClass:"change-button",attrs:{id:"networkModal"},on:{click:e.networkModalOpen}},[e._v(" "+e._s(e.$t("interface.network-modal.button-change"))+" ")]):e._e(),n("b-popover",{attrs:{content:e.$t("interface.network-modal.popup-open-networks"),target:"networkModal",placement:"top",triggers:"hover",title:""}})],1)])])],1)},z=[],V=(n("e25e"),n("37ea"));function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X={components:{"interface-network-modal":V["a"]},props:{blockNumber:{type:Number,default:0}},data:function(){return{parsedNetwork:0,identifier:x["j"]}},computed:K({},Object(i["b"])(["network","account","web3"])),watch:{blockNumber:function(e){this.parsedNetwork=parseInt(e)}},mounted:function(){this.blockNumber&&void 0!==this.blockNumber&&(this.parsedNetwork=parseInt(this.blockNumber))},methods:{networkModalOpen:function(){this.account.identifier!==this.identifier&&this.$refs.network.$refs.network.show()}}},Y=X,Z=(n("5928"),Object(O["a"])(Y,L,z,!1,null,"315efaff",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"transactions-side-menu"},[r("div",{staticClass:"side-menu-header"},[r("img",{attrs:{alt:"",src:n("9d64")}}),r("div",{on:{click:e.toggleSideMenu}},[r("i",{staticClass:"fa fa-lg fa-times"})])]),r("div",{staticClass:"side-menu"},[r("ul",e._l(e.tabData,(function(t,n){return r("li",{key:t.name+n,class:t.onlineOnly&&!e.online?"disabled-item":""},[t.onlineOnly&&!e.online?r("div",{staticClass:"dash"}):e._e(),r("div",{class:[e.isTabActive(t.routes)?"active":"","menu-group-title"],on:{click:function(n){return n.preventDefault(),e.tabAction(t)}}},[r("img",{attrs:{src:e.isTabActive(t.routes)?t.icons.active:t.icons.inactive,alt:""}}),r("p",[e._v(e._s(e.$t(t.titleKey)))]),r("i",{directives:[{name:"show",rawName:"v-show",value:t.children.length,expression:"tab.children.length"}],class:["fa",e.isTabActive(t.routes)?"fa-angle-up":"fa-angle-down"],attrs:{"aria-hidden":"true"}})]),t.children.length?r("ul",{class:[t.name,e.isTabActive(t.routes)?"show-child":"","child-tab"]},e._l(t.children,(function(t,n){return r("li",{key:t.name+n,class:[e.isTabActive(t.routes)?"active":"",t.onlineOnly&&!e.online?"disabled-item":""],on:{click:function(n){return n.preventDefault(),e.tabAction(t)}}},[e._v(" "+e._s(e.$t(t.titleKey))+" ")])})),0):e._e()])})),0)])])},ne=[],re=(n("caad"),n("2532"),n("2c51"));function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var oe={data:function(){return{tabData:re["a"].tabs}},computed:ae({},Object(i["b"])(["online"])),methods:{toggleSideMenu:function(){this.$store.commit("TOGGLE_SIDEMENU")},isTabActive:function(e){return e.includes(this.$route.path)},tabAction:function(e){e.hasOwnProperty("children")&&0!==e.children.length?this.$router.push({path:e.children[0].routes[0]}):(this.toggleSideMenu(),this.$router.push({path:e.routes[0]}))}}},ie=oe,ce=(n("5d1e"),Object(O["a"])(ie,te,ne,!1,null,"6e45f1be",null)),de=ce.exports,le=n("2480"),ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mobile-interface-address"},[r("address-qrcode-modal",{ref:"qrcode",attrs:{address:e.account.address}}),r("div",{staticClass:"wrap"},[r("div",{staticClass:"top-block"},[r("div",{staticClass:"blockie-container"},[r("blockie",{staticClass:"blockie-image",attrs:{address:e.address,size:8,scale:16}})],1),r("div",{staticClass:"address"},[e._v(e._s(e.address))]),r("input",{ref:"copyAddress",staticClass:"hidden-input",attrs:{autocomplete:"off"},domProps:{value:e.address}}),r("div",{staticClass:"address-end"},[e._v(" "+e._s(e.address.substring(e.address.length-4,e.address.length))+" ")]),r("div",{staticClass:"buttons-container"},[r("button",{on:{click:e.openQrcode}},[r("img",{attrs:{alt:"",src:n("4da0")}}),e._m(0)]),r("button",{on:{click:e.print}},[r("img",{attrs:{alt:"",src:n("240d")}})]),r("button",{on:{click:e.copy}},[r("img",{attrs:{alt:"",src:n("fd74")}})])])]),e.hasMultipleAddr?r("div",{staticClass:"bottom-block"},[r("button",{on:{click:e.switchAddr}},[e._v(e._s(e.$t("interface.change-addr")))])]):e._e()])],1)},pe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"floating-barcode"},[n("div",{staticClass:"barcode-image"})])}],he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"address-qrcode-modal"},[n("b-modal",{ref:"addressQrcode",staticClass:"bootstrap-modal nopadding",attrs:{title:e.$t("common.addr"),"hide-footer":"",centered:"",static:"",lazy:""}},[n("div",{staticClass:"modal-contents"},[n("qrcode",{attrs:{value:e.address,options:{size:160}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],ref:"addressInput",staticClass:"address",attrs:{readonly:""},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}}),n("button",{on:{click:e.copyToClipboard}},[e._v(e._s(e.$t("common.copy")))])],1)])],1)},fe=[],we={name:"AddressQrcodeModal",props:{address:{type:String,default:""}},data:function(){return{}},methods:{copyToClipboard:function(){this.$refs.addressInput.select(),document.execCommand("copy")}}},me=we,be=(n("91d9"),Object(O["a"])(me,he,fe,!1,null,"15c3af6c",null)),ve=be.exports;function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ye={components:{blockie:A["a"],"address-qrcode-modal":ve},props:{address:{type:String,default:""},print:{type:Function,default:function(){}},switchAddr:{type:Function,default:function(){}}},data:function(){return{hasMultipleAddr:!1}},computed:ke({},Object(i["b"])(["account"])),mounted:function(){null!==this.account.address&&(this.account.identifier!==x["c"]&&this.account.identifier!==x["g"]&&this.account.identifier!==x["e"]&&this.account.identifier!==x["j"]?this.hasMultipleAddr=!0:this.hasMultipleAddr=!1)},methods:{copy:function(){this.$refs.copyAddress.select(),document.execCommand("copy"),v["e"].responseHandler(this.$t("common.copied"),v["e"].INFO)},openQrcode:function(){this.$refs.qrcode.$refs.addressQrcode.show()}}},Oe=ye,Ce=(n("84a4"),Object(O["a"])(Oe,ue,pe,!1,null,"7bdf1042",null)),Pe=Ce.exports,je=n("8f2d"),Ne=n("dce7"),$e=n("b7d3"),_e=n("8761"),Ae=n("901e"),xe=n("8ded"),Be=n.n(xe),Ee=n("3578"),Me=n.n(Ee),Se=n("cb38"),Ie=n("1131"),De=n.n(Ie);function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var We={name:"Interface",components:{"interface-side-menu":de,"interface-address":D,"interface-balance":U,"interface-network":ee,"interface-tokens":le["a"],"wallet-password-modal":l["a"],"print-modal":je["a"],"network-and-address-modal":p["a"],"hardware-password-modal":h["a"],"mnemonic-modal":j["a"],"mnemonic-password-modal":P,"enter-pin-number-modal":u["a"],"mobile-interface-address":Pe,"address-qrcode-modal":ve,"ledger-app-modal":N["a"]},data:function(){return{balance:"0",blockNumber:0,tokens:[],receivedTokens:!1,tokensWithBalance:[],pollBlock:function(){},pollNetwork:function(){},pollddress:function(){},highestGas:"0",alert:{show:!1,msg:""},hws:{ledger:b["c"],trezor:b["g"],bitbox:b["a"],secalot:b["f"]},hwInstance:{},walletConstructor:function(){},hardwareBrand:"",phrase:"",nonce:"0",value:"0",data:"",to:"",gaslimit:"21000",gas:0,tokensymbol:"",prefilled:!1}},computed:Te({isSidemenuOpen:function(){return this.sidemenuOpen},address:function(){return null!==this.wallet?Object($e["b"])(this.account.address):null}},Object(i["b"])(["network","account","online","web3","Networks","sidemenuOpen","wallet","linkQuery"])),watch:{web3:function(){this.setupOnlineEnvironment()},address:function(e){e&&this.setupOnlineEnvironment()}},mounted:function(){this.setupOnlineEnvironment()},destroyed:function(){this.clearIntervals()},methods:{checkPrefilled:function(){var e=this,t=Object.keys(e.linkQuery).length;if(t>0){e.prefilled=!0;var n=e.linkQuery,r=n.value,s=n.data,a=n.to,o=n.gaslimit,i=n.gas,c=n.tokensymbol,d=n.network;if(e.value=r&&new Ae["BigNumber"](r).gt(0)?new Ae["BigNumber"](r).toFixed():"0",e.data=s&&De.a.isHexStrict(s)?s:"",e.to=a&&Object($e["a"])(a)?a:"",e.gaslimit=o&&new Ae["BigNumber"](o).gt(0)?o:"21000",e.gas=i&&new Ae["BigNumber"](i).gt(0)?new Ae["BigNumber"](i):0,e.tokensymbol=c||"",d){var l=e.Networks[d.toUpperCase()];l&&e.$store.dispatch("switchNetwork",l[0]).then((function(){e.$store.dispatch("setWeb3Instance")}))}e.$store.dispatch("saveQueryVal",{})}},clearPrefilled:function(){this.value="0",this.data="",this.to="",this.gaslimit="21000",this.gas=0,this.tokensymbol="",this.prefilled=!1},openAddressQrcode:function(){this.$refs.addressQrcodeModal.$refs.addressQrcode.show()},mnemonicphrasePasswordModalOpen:function(e){this.phrase=e,this.$refs.mnemonicPhraseModal.$refs.mnemonicPhrase.hide(),this.$refs.mnemonicPhrasePassword.$refs.password.show()},toggleNetworkAddrModal:function(e){this.$refs.hardwareModal.$refs.password.hide(),this.$refs.mnemonicPhrasePassword.$refs.password.hide(),this.hwInstance=e,this.$refs.networkAddress.$refs.networkAndAddress.show()},togglePasswordModal:function(e,t){this.walletConstructor=e,this.hardwareBrand=t,this.$refs.hardwareModal.$refs.password.show()},ledgerAppModalOpen:function(){this.$refs.ledgerAppModal.$refs.ledgerApp.show()},switchAddress:function(){var e=this;switch(this.account.identifier){case x["d"]:this.ledgerAppModalOpen();break;case x["i"]:Object(b["g"])().then((function(t){e.toggleNetworkAddrModal(t)})).catch(b["g"].errorHandler);break;case x["a"]:this.togglePasswordModal(b["a"],"BitBox");break;case x["h"]:this.togglePasswordModal(b["f"],"Secalot");break;case x["f"]:this.$refs.mnemonicPhraseModal.$refs.mnemonicPhrase.show();break;case x["b"]:Object(b["b"])(!1,this.$eventHub).then((function(t){e.toggleNetworkAddrModal(t)})).catch(b["b"].errorHandler);break;default:v["e"].responseHandler(new Error("Wallet type ".concat(this.account.identifier," can't switch addresses")),!1)}},print:function(){this.$refs.printModal.$refs.print.show()},toggleSideMenu:function(){this.$store.commit("TOGGLE_SIDEMENU")},fetchTokens:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.receivedTokens=!1,t=[],1!==this.network.type.chainID&&3!==this.network.type.chainID){e.next=16;break}return n=new Me.a(this.web3.currentProvider),e.prev=4,e.next=7,n.getBalance(this.account.address,!0,!0,!0,0,{gas:"0x11e1a300"});case 7:t=e.sent,t=t.map((function(e){return e.address=e.addr,delete e.addr,e})),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](4),t=this.network.type.tokens.map((function(e){return e.balance="Load",e}));case 14:e.next=17;break;case 16:t=this.network.type.tokens.map((function(e){return e.balance="Load",e}));case 17:return e.abrupt("return",t);case 18:case"end":return e.stop()}}),e,this,[[4,11]])})));function t(){return e.apply(this,arguments)}return t}(),setNonce:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Be.a.set(this.web3.utils.sha3(this.account.address),{nonce:"0x00",timestamp:0}),e.next=3,this.web3.eth.getTransactionCount(this.account.address).catch((function(e){v["e"].responseHandler(e,v["e"].ERROR)}));case 3:t=e.sent,this.nonce=new Ae["BigNumber"](t).toString();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getTokenBalance:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,r,s,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=this.web3,r=[{name:"balanceOf",type:"function",constant:!0,inputs:[{name:"address",type:"address"}],outputs:[{name:"out",type:"uint256"}]}],s=new n.eth.Contract(r),a=s.methods.balanceOf(this.account.address).encodeABI(),e.next=7,n.eth.call({to:t.address,data:a}).then((function(e){var n;if(0===Number(e)||"0x"===e)n=0;else{var r=new Ae["BigNumber"](10).pow(t.decimals);n=new Ae["BigNumber"](e).div(r).toString()}return n})).catch((function(e){v["e"].responseHandler(e,!1)}));case 7:return o=e.sent,e.abrupt("return",o);case 11:e.prev=11,e.t0=e["catch"](0),v["e"].responseHandler(e.t0,v["e"].ERROR);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(t){return e.apply(this,arguments)}return t}(),setCustomTokenStore:function(){var e=Be.a.get("customTokens");Object.keys(_e).forEach((function(t){void 0===e[_e[t].name]&&(e[_e[t].name]=[])})),Be.a.set("customTokens",e)},setTokens:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.tokens=[],e.next=3,this.fetchTokens();case 3:t=e.sent,t=t.sort((function(e,t){return e.name.toUpperCase()<t.name.toUpperCase()?-1:e.name.toUpperCase()>t.name.toUpperCase()?1:0})).map((function(e){var t=new Ae["BigNumber"](e.balance),n=t.isNaN()?e.balance:t.div(new Ae["BigNumber"](10).pow(e.decimals)).toFixed(),r={address:e.address,balance:n,decimals:e.decimals,email:e.email,name:e.name,symbol:e.symbol,website:e.website};return r})),this.tokens=t.sort(Se["a"]),this.setTokensWithBalance();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setTokensWithBalance:function(){var e=this,t=Be.a.get("customTokens");void 0!==t&&void 0!==t[this.network.type.name]&&t[this.network.type.name].length>0?new Promise((function(n){var r=t[e.network.type.name].map(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getTokenBalance(n);case 2:return n.balance=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());Promise.all(r).then((function(r){t[e.network.type.name]=r,Be.a.set("customTokens",t),n(r)}))})).then((function(t){var n=e.tokens.filter((function(e){return e.balance>0})).concat(t.filter((function(e){return e.balance>0})));e.tokensWithBalance=n,e.receivedTokens=!0})).catch((function(e){v["e"].responseHandler(e,v["e"].ERROR)})):(this.receivedTokens=!0,this.tokensWithBalance=this.tokens.filter((function(e){return e.balance>0})))},getBlock:function(){var e=this;this.web3.eth.getBlockNumber().then((function(t){e.blockNumber=t,e.$store.dispatch("updateBlockNumber",t)})).catch((function(e){v["e"].responseHandler(e,v["e"].ERROR)}))},getBalance:function(){var e=this,t=this.web3;t.eth.getBalance(this.address.toLowerCase()).then((function(n){e.balance=t.utils.fromWei(n,"ether"),e.$store.dispatch("setAccountBalance",n)})).catch((function(e){v["e"].responseHandler(e,v["e"].ERROR)}))},checkWeb3WalletAddrChange:function(){var e=this,t=this.web3;window.ethereum.on("accountsChanged",(function(n){if(n.length>1){var r=new Ne["b"](n[0]);e.$store.dispatch("decryptWallet",[r,t])}}))},checkAndSetNetwork:function(e){var t=this;this.network.type.chainID.toString()!=="".concat(e)&&Object.keys(_e).some((function(n){if(_e[n].chainID.toString()==="".concat(e)&&t.Networks[n])return t.$store.dispatch("switchNetwork",t.Networks[n][0]),!0}))},matchWeb3WalletNetwork:function(){var e=this;this.web3.eth.net.getId().then((function(t){e.checkAndSetNetwork(t)})),window.ethereum.on("networkChanged",(function(t){e.setupOnlineEnvironment(),e.checkAndSetNetwork(t)}))},setupOnlineEnvironment:De.a._.debounce((function(){var e=this;this.clearIntervals(),void 0===Be.a.get("customTokens")?(Be.a.set("customTokens",{}),this.setCustomTokenStore()):this.setCustomTokenStore(),this.online&&null!==this.account.address&&(this.account.identifier===x["j"]&&(window.ethereum.isMetaMask||window.ethereum.isMew?(this.checkWeb3WalletAddrChange(),this.matchWeb3WalletNetwork()):(this.web3WalletPollNetwork(),this.web3WalletPollAddress())),this.setENS(),this.getBlock(),this.getBalance(),this.setTokens(),this.setNonce(),this.getHighestGas(),this.getBlockUpdater().then((function(t){e.pollBlock=t})))})),getBlockUpdater:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n=t.web3.eth.subscribe("newBlockHeaders",(function(r){r&&(n=setInterval(t.getBlock,14e3)),e(n)})).on("data",(function(e){t.blockNumber=e.number}))})));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getHighestGas:function(){var e=this;this.web3.eth.getGasPrice().then((function(t){e.highestGas=new Ae["BigNumber"](e.web3.utils.fromWei(t,"gwei")).toString()})).catch((function(e){v["e"].responseHandler(e,v["e"].ERROR)}))},setENS:function(){this.network.type.ens?this.$store.dispatch("setENS",new d.a(this.web3.currentProvider,this.network.type.ens.registry)):this.$store.dispatch("setENS",null)},clearIntervals:function(){this.pollBlock.unsubscribe?this.pollBlock.unsubscribe():clearInterval(this.pollBlock),clearInterval(this.pollNetwork),clearInterval(this.pollAddress)},web3WalletPollNetwork:function(){var e=this;window.web3.eth.net&&"function"===typeof window.web3.eth.net.getId&&(this.pollNetwork=setInterval((function(){window.web3.eth.net.getId().then((function(t){e.network.type.chainID.toString()!==t&&Object.keys(_e).some((function(n){if(_e[n].chainID===t&&e.Networks[n])return e.$store.dispatch("switchNetwork",e.Networks[n]),clearInterval(e.pollNetwork),!0}))})).catch((function(e){v["e"].responseHandler(e,!1)}))}),500))},web3WalletPollAddress:function(){var e=this;this.pollAddress=setInterval((function(){window.web3.eth||(v["e"].responseHandler(new Error("Web3 Instance not found!"),v["e"].ERROR),clearInterval(e.pollAddress)),window.web3.eth.getAccounts((function(t,n){t&&(v["e"].responseHandler(t,!1),clearInterval(e.pollAddress)),n.length||(v["e"].responseHandler(new Error("Please make sure that your Web3 Wallet is unlocked"),v["e"].ERROR),clearInterval(e.pollAddress));var r=n[0];if(null!==e.account.address&&r.toLowerCase()!==e.account.address.toLowerCase()){var s=new Ne["b"](r);e.$store.dispatch("decryptWallet",[s,window.web3.currentProvider]),clearInterval(e.pollAddress)}}))}),500)}}},He=We,qe=(n("1bd2"),Object(O["a"])(He,r,s,!1,null,"c91c06e6",null)),Qe=qe.exports;n.d(t,"default",(function(){return Qe}))},fd74:function(e,t,n){e.exports=n.p+"img/copy.ec4723ca.svg"}}]);
//# sourceMappingURL=chunk-13a167f0.5619ca34.js.map