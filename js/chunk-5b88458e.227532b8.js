(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b88458e"],{"1a9a":function(e,t,n){},4820:function(e,t,n){"use strict";var r=n("69b7"),a=n.n(r);a.a},"69b7":function(e,t,n){},"91e6":function(e,t,n){"use strict";var r=n("1a9a"),a=n.n(r);a.a},c1be:function(e,t,n){"use strict";var r=function(e,t){var n=t._c;return n("div",[n("div",{class:[t.props.color,"loading-container","loading-sign"]},[t._m(0),""!=t.props.loadingmessage1?n("p",{staticClass:"loading-message1"},[t._v(" "+t._s(t.props.loadingmessage1)+" ")]):t._e(),""!=t.props.loadingmessage2?n("p",{staticClass:"loading-message2"},[t._v(" "+t._s(t.props.loadingmessage2)+" ")]):t._e()])])},a=[function(e,t){var n=t._c;return n("div",{staticClass:"lds-spinner"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])}],s={name:"LoadingSign",props:{type:{type:String,default:""},loadingmessage1:{type:String,default:""},loadingmessage2:{type:String,default:""},color:{type:String,default:"black"}}},i=s,o=(n("4820"),n("2877")),c=Object(o["a"])(i,r,a,!0,null,"3944612c",null),u=c.exports;n.d(t,"a",(function(){return u}))},de5c:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"max-width":"500px"}},[e.ready?e._e():n("div",[n("loading-sign")],1),e.ready?n("div",{staticClass:"currency-ops-new"},[n("h3",{staticClass:"mb-3"},[e._v(" "+e._s(e.$t("dappsMaker.earn-with-dai"))+" ")]),n("div",[e._v(" "+e._s(e.$t("dappsMaker.dai-savings-rate",{value:e.displayPercentValue(e.yearlyRate)}))+" ")]),n("div",[e._v(e._s(e.$t("dappsMaker.deposited-amount",{value:e.deposited})))]),n("div",{staticClass:"currency-picker-container"},[e.showSetupScreen?n("div",[n("div",[n("p",[n("b",[e._v(" "+e._s(e.$t("dappsMCDMaker.create-vault-proxy")))])]),n("p",[e._v(e._s(e.$t("dappsMCDMaker.create-proxy-info-message")))]),n("div",{staticClass:"buttons-container"},[n("div",{class:[e.proxyPresent?"disabled":"","submit-button large-round-button-green-filled"],on:{click:e.BuildProxy}},[e._v(" "+e._s(e.$t("dappsMCDMaker.setup"))+" ")])])]),n("p",[n("b",[e._v(" "+e._s(e.$t("dappsMCDMaker.savings-set-allowance")))])]),n("p",[e._v(e._s(e.$t("dappsMCDMaker.savings-set-allowance-info")))]),n("div",{staticClass:"buttons-container"},[n("div",{class:[!e.hasAllowance&&e.proxyPresent?"":"disabled","submit-button large-round-button-green-filled"],on:{click:e.setAllowance}},[e._v(" "+e._s(e.$t("dappsMCDMaker.set"))+" ")])])]):e._e(),e.showSetupScreen?e._e():n("div",[n("div",{staticClass:"mt-3 mb-5"},[n("b-button-group",{attrs:{size:"lg"}},[n("b-button",{class:["submit-btn",e.showDepositDisplay?"active":""],on:{click:function(t){return e.showDeposit(!0)}}},[e._v(e._s(e.$t("dappsMaker.deposit")))]),n("b-button",{class:["submit-btn",e.showDepositDisplay?"":"active"],on:{click:function(t){return e.showDeposit(!1)}}},[e._v(e._s(e.$t("dappsMaker.withdraw")))])],1)],1),e.showDepositDisplay?n("div",[n("div",{staticClass:"interface__block-title"},[n("span",[e._v(" "+e._s(e.$t("dappsMCDMaker.deposit")))]),n("div",{staticClass:"top-buttons",on:{click:e.setMaxDeposit}},[n("p",[e._v(e._s(e.$t("dappsMCDMaker.entire-dai-balance")))])])]),n("div",{staticClass:"dropdown-text-container dropdown-container no-point"},[n("p",[n("img",{staticClass:"icon-size",attrs:{src:e.DaiIcon}}),e._v(" "+e._s(e.$t("dappsMCDMaker.dai"))+" "),n("span",{staticClass:"subname"},[e._v("- "+e._s(e.$t("dappsMCDMaker.dai-stable-coin"))+" ")])])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.daiQty,expression:"daiQty"}],class:["currency-picker-container","dropdown-text-container","dropdown-container"],domProps:{value:e.daiQty},on:{input:function(t){t.target.composing||(e.daiQty=t.target.value)}}}),e.showErrorInfoOrOther?n("div",{staticClass:"input-block-message"},[n("p",[e._v(" Some Error, info, or instructions ")])]):e._e(),n("div",{staticClass:"buttons-container"},[n("div",{class:[e.validInputs&&e.canDeposit?"":"disabled","submit-button large-round-button-green-filled"],on:{click:e.deposit}},[e._v(" "+e._s(e.$t("dappsMCDMaker.deposit"))+" ")])])]):e._e(),e.showDepositDisplay?e._e():n("div",[n("div",{staticClass:"interface__block-title"},[n("span",[e._v(" "+e._s(e.$t("dappsMCDMaker.withdraw")))]),n("div",{staticClass:"top-buttons",on:{click:e.setMaxWithdraw}},[n("p",[e._v(e._s(e.$t("dappsMCDMaker.entire-deposit-balance")))])])]),n("div",{staticClass:"dropdown-text-container dropdown-container no-point"},[n("p",[n("img",{staticClass:"icon-size",attrs:{src:e.DaiIcon}}),e._v(" "+e._s(e.$t("dappsMCDMaker.dai"))+" "),n("span",{staticClass:"subname"},[e._v("- "+e._s(e.$t("dappsMCDMaker.dai-stable-coin"))+" ")])])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.daiQty,expression:"daiQty"}],class:["currency-picker-container","dropdown-text-container","dropdown-container"],domProps:{value:e.daiQty},on:{input:function(t){t.target.composing||(e.daiQty=t.target.value)}}}),n("div",{staticClass:"buttons-container"},[n("div",{class:[e.validInputs&&e.canWithdraw?"":"disabled","submit-button large-round-button-green-filled"],on:{click:e.withdraw}},[e._v(" "+e._s(e.$t("dappsMCDMaker.withdraw"))+" ")])])])])])]):e._e()])},a=[],s=(n("a4d3"),n("4de4"),n("a15b"),n("b680"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("159b"),n("96cf"),n("c964")),i=n("fc11"),o=n("2f62"),c=n("901e"),u=n.n(c),d=n("d1fb"),p=n("c1be"),l=n("9b76"),h=n.n(l),v=n("c52a");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={components:{"loading-sign":p["a"]},props:{ethPrice:{type:u.a,default:function(){return new u.a(0)}},makerActive:{type:Boolean,default:!1},cdps:{type:Array,default:function(){return[]}},availableCdps:{type:Object,default:function(){return{}}},cdpDetailsLoaded:{type:Boolean,default:!1},getValueOrFunction:{type:Function,default:function(){}}},data:function(){return{DaiIcon:h.a,showDepositDisplay:!0,setupComplete:!1,userHasProxy:!1,showErrorInfoOrOther:!1,proxyAddress:null,daiQty:0,gasLimit:-1,yearlyRate:0,daiBalance:0,deposited:0,maxWithdrawable:0,allowance:0,daiAllowance:0,proxyChecked:!1,allowanceChecked:!1,depositedValue:0}},computed:f({},Object(o["b"])(["account","gasPrice","web3","network","ens"]),{showSetupScreen:function(){return!this.hasAllowance||!this.proxyPresent},validInputs:function(){return Object(d["F"])(this.daiQty).gt(0)&&this.hasEnough&&this.proxyPresent},hasEnough:function(){return this.showDepositDisplay?Object(d["F"])(this.daiBalance).gte(this.daiQty):Object(d["F"])(this.maxWithdrawable).gte(this.daiQty)},proxyPresent:function(){return null!=this.proxyAddress},proxyAllowance:function(){return null!=this.proxyAddress},hasAllowance:function(){return Object(d["F"])(this.daiAllowance).gt(0)},canWithdraw:function(){return!!this.deposited&&Object(d["F"])(this.deposited.toBigNumber()).gte(this.daiQty)},canDeposit:function(){return Object(d["F"])(this.daiBalance).gte(this.daiQty)},ready:function(){return this.proxyChecked&&this.allowanceChecked}}),watch:{makerActive:function(e){e&&this.setup()}},beforeDestroy:function(){this.makerSaver={}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new this.web3.eth.Contract(d["e"],d["h"].PROXY_REGISTRY),e.next=3,t.methods.proxies(this.account.address).call();case 3:this.proxyAddress=e.sent,"0x0000000000000000000000000000000000000000"===this.proxyAddress&&(this.proxyAddress=null),this.proxyChecked=!0,this.setup();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{setup:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.makerSaver=this.getValueOrFunction("_mcdSaving"),this.setupComplete=void 0!==this.makerSaver,e.next=4,this.getValues();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getValues:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.setupComplete){e.next=11;break}return e.t0=d["F"],e.next=4,this.makerSaver.getYearlyRate();case 4:return e.t1=e.sent,this.yearlyRate=(0,e.t0)(e.t1).minus(1).toFixed(10),this.hasProxy(),this.checkBalance(),e.next=10,this.depositBalance();case 10:this.getAllowance();case 11:return e.abrupt("return",0);case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setMaxDeposit:function(){this.daiQty=this.daiBalance},setMaxWithdraw:function(){this.maxWithdrawable&&(this.daiQty=this.maxWithdrawable)},showDeposit:function(e){this.showDepositDisplay=e,this.daiQty=0},deposit:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.setupComplete){e.next=3;break}return e.next=3,this.makerSaver.join(Object(v["MDAI"])(this.daiQty));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),withdraw:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.setupComplete){e.next=3;break}return e.next=3,this.makerSaver.exit(Object(v["MDAI"])(this.daiQty));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),depositBalance:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.setupComplete){e.next=6;break}return e.next=3,this.makerSaver.balance();case 3:this.deposited=e.sent,this.depositedValue=this.deposited._amount.toFixed(2),this.deposited&&(this.maxWithdrawable=this.deposited.toBigNumber().toString());case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),checkBalance:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.setupComplete){e.next=11;break}if(t=this.getValueOrFunction("balances"),!t){e.next=11;break}if(n=t["MDAI"],n){e.next=6;break}return e.abrupt("return",Object(d["F"])(0));case 6:if(this.daiBalance=n.toString(),!this.proxyAddress){e.next=11;break}return e.next=10,this.getAllowance();case 10:this.daiAllowance=e.sent;case 11:return e.abrupt("return",Object(d["F"])(0));case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),hasProxy:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.setupComplete){e.next=13;break}return e.next=3,this.getValueOrFunction("getProxy")();case 3:if(this.proxyAddress=e.sent,this.proxyAddress){e.next=8;break}return this.proxyChecked=!0,this.proxyAddress=null,e.abrupt("return",null);case 8:return e.next=10,this.getAllowance();case 10:return this.daiAllowance=e.sent,this.proxyChecked=!0,e.abrupt("return",this.proxyAddress);case 13:return this.proxyChecked=!0,e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),BuildProxy:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.setupComplete){e.next=5;break}return e.next=3,this.getValueOrFunction("getProxy")();case 3:this.proxyAddress=e.sent,this.proxyAddress||this.getValueOrFunction("_proxyService").build().then((function(){return t.getValueOrFunction("_proxyService").currentProxy()})).then((function(e){t.proxyAddress=e}));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),adapterAddress:function(e){var t="MCD_JOIN_"+e.replace(/-/g,"_");return this.get("smartContract").getContractAddress(t)},getAllowance:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.proxyAddress){e.next=13;break}if(!this.setupComplete||!this.getValueOrFunction("tokens")){e.next=7;break}return e.next=4,this.getValueOrFunction("tokens")["MDAI"]._contract.allowance(this.getValueOrFunction("account").address,this.proxyAddress);case 4:return t=e.sent,this.allowanceChecked=!0,e.abrupt("return",t);case 7:return n=new this.web3.eth.Contract(d["c"],d["h"].MCD_DAI),e.next=10,n.methods.allowance(this.getValueOrFunction("account").address,this.proxyAddress).call();case 10:return r=e.sent,this.allowanceChecked=!0,e.abrupt("return",r);case 13:return this.allowanceChecked=!0,e.abrupt("return",0);case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setAllowance:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.setupComplete&&this.getValueOrFunction("tokens")&&this.getValueOrFunction("tokens")["MDAI"].approveUnlimited(this.proxyAddress);case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),displayPercentValue:function(e){return u.a.isBigNumber(e)||(e=new u.a(e)),e.times(100).toString()},displayFixedValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return u.a.isBigNumber(e)||(e=new u.a(e)),e.toFixed(t).toString()}}},w=g,y=(n("91e6"),n("2877")),m=Object(y["a"])(w,r,a,!1,null,"6d81d2cc",null),x=m.exports;t["default"]=x}}]);
//# sourceMappingURL=chunk-5b88458e.227532b8.js.map