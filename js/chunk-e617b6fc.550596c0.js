(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e617b6fc"],{"113e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"transfer-registrar-container"},[n("div",{staticClass:"transfer-registrar-content"},[n("h3",[e._v(e._s(e.$t("ens.commit.is-available",{domain:e.fullDomainName})))]),n("p",[e._v(e._s(e.$t("ens.commit.register-domain",{domain:e.fullDomainName})))]),n("div",{staticClass:"secret-phrase-container"},[n("label",{attrs:{for:"range-slider"}},[e._v(e._s(e.$t("ens.commit.how-many-years")))]),n("b-form-input",{attrs:{id:"range-slider",type:"range",min:"1",max:"20",step:"1"},model:{value:e.duration,callback:function(t){e.duration=t},expression:"duration"}}),n("div",[e._v(" "+e._s(e.duration>1?e.$tc("ens.commit.year",2,{duration:e.duration}):e.$tc("ens.commit.year",1))+" ")])],1),n("div",{staticClass:"transfer-registrar-button"},[n("button",{class:["large-round-button-green-filled",e.loading?"disabled":"",e.info.disable?"disabled":""],on:{click:e.createCommitment}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[e._v(" "+e._s(e.$t("ens.register"))+" ")]),n("i",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.info.disable,expression:"info.disable"}]},[e._v(" "+e._s(e.$t(e.info.msg))+" ")])])]),n("interface-bottom-text",{attrs:{"link-text":e.$t("common.help-center"),question:e.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},r=[],i=(n("a4d3"),n("99af"),n("4de4"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("fc11")),o=n("539d"),s=n("2f62");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={components:{"interface-bottom-text":o["a"]},props:{hostName:{type:String,default:""},createCommitment:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},tld:{type:String,default:""}},data:function(){return{duration:"1"}},computed:l({},Object(s["b"])(["account"]),{fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)},info:function(){var e=this.account.balance;return"0"===e?{disable:!0,msg:"ens.commit.no-balance"}:{disable:!1,msg:""}}}),watch:{duration:function(e){this.$emit("updateDuration",Number(e))}},mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")}},d=u,m=(n("9245"),n("2877")),f=Object(m["a"])(d,a,r,!1,null,"7da9b2ce",null),p=f.exports;n.d(t,"default",(function(){return p}))},"2ed6":function(e,t,n){},9245:function(e,t,n){"use strict";var a=n("2ed6"),r=n.n(a);r.a}}]);
//# sourceMappingURL=chunk-e617b6fc.550596c0.js.map