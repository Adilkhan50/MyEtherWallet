(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5f0c12e"],{"161e":function(e,t,r){"use strict";var n=r("71f1"),a=r.n(n);a.a},"71f1":function(e,t,r){},"82a3":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div")},a=[],i=(r("a4d3"),r("4de4"),r("b680"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("25f0"),r("159b"),r("96cf"),r("c964")),o=r("fc11"),c=r("2f62"),u=r("901e"),s=r.n(u);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){return new s.a(e)},d={props:{ethPrice:{type:s.a,default:function(){return new s.a(0)}},makerActive:{type:Boolean,default:!1},cdps:{type:Array,default:function(){return[]}},availableCdps:{type:Object,default:function(){return{}}},cdpDetailsLoaded:{type:Boolean,default:!1}},data:function(){return{loaded:!1,wethToPethRatio:0,daiPrice:0,priceFloor:0,ethQty:0,daiQty:0,selectedCdp:"",cdp:{},eth:f(0),dai:f(0),debtValue:f(0),collatRatio:f(0),pethCollateral:f(0),usdCollateral:f(0),ethCollateral:f(0),ratio:null,isSafe:!1,maxDaiDraw:f(0),maxPethDraw:f(0),maxEthDraw:f(0)}},computed:p({},Object(c["b"])(["account","gasPrice","web3","network","ens"]),{cdpOptions:function(){return this.availableCdps}}),mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.makerActive||this.$router.push({name:"Maker"});case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{openManage:function(e){this.$router.push({name:"manage",params:{cdpId:e}})},displayPercentValue:function(e){return s.a.isBigNumber(e)||(e=new s.a(e)),e.times(100).toString()},displayFixedValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return s.a.isBigNumber(e)||(e=new s.a(e)),e.toFixed(t).toString()}}},b=d,h=(r("161e"),r("2877")),w=Object(h["a"])(b,n,a,!1,null,"0948f6e7",null),m=w.exports;t["default"]=m}}]);
//# sourceMappingURL=chunk-a5f0c12e.afa2606f.js.map