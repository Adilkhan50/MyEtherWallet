(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5087cf46"],{"29f8":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sign-message-container"},[s("signature-modal-modal",{ref:"signatureModal",attrs:{signature:e.signature}}),s("interface-container-title",{attrs:{title:e.$t("signMessage.title")}}),s("div",{staticClass:"content-container"},[s("div",{staticClass:"send-form"},[s("p",[e._v(e._s(e.$t("signMessage.desc")))]),s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[e._v(e._s(e.$t("signMessage.message")))])])]),s("div",{staticClass:"the-form"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-textarea-1",attrs:{name:"message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("message"),expression:"errors.has('message')"}]},[e._v(" "+e._s(e.errors.first("message"))+" ")])])]),s("div",{staticClass:"submit-button-container"},[s("div",{staticClass:"buttons"},[s("button",{class:[e.message.length>0?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:e.signMessage}},[e._v(" "+e._s(e.$t("signMessage.sign"))+" ")])]),s("div",{staticClass:"clear-all-btn",on:{click:function(t){return e.deleteInputText()}}},[e._v(" "+e._s(e.$t("common.clear-all"))+" ")])])])],1)},a=[],i=(s("a4d3"),s("4de4"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("fc11")),r=s("2f62"),o=s("ce96"),c=s("55c1"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-modal",{ref:"signatureModal",staticClass:"bootstrap-modal",attrs:{title:e.$t("common.signature"),"hide-footer":"",centered:"",static:"",lazy:""}},[s("div",{staticClass:"modal-contents"},[s("div",[s("div",{staticClass:"copy-container"},[s("h4",[e._v(e._s(e.$t("signMessage.signed")))]),s("div",{staticClass:"copy-buttons"},[s("span",{on:{click:e.copy}},[e._v(e._s(e.$t("common.copy")))])])]),s("textarea",{ref:"signedMess",staticClass:"custom-textarea-1",attrs:{name:"message"},domProps:{value:e.signature}}),e._v(" "),s("div",{staticClass:"button-container"},[s("button",{staticClass:"submit-button large-round-button-green-filled clickable",on:{click:function(t){return e.copy("main")}}},[e._v(" "+e._s(e.$t("common.copy"))+" ")])])])])])],1)},u=[],d={props:{signature:{type:String,default:""}},methods:{copy:function(e){this.$refs.signedMess.select(),document.execCommand("copy"),o["e"].responseHandler(this.$t("common.copied"),o["e"].INFO),"main"===e&&this.$refs.signatureModal.hide()}}},g=d,m=(s("8ef5"),s("2877")),f=Object(m["a"])(g,l,u,!1,null,"7c242d10",null),p=f.exports;function v(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function b(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?v(s,!0).forEach((function(t){Object(i["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):v(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var h={name:"SignMessage",components:{"interface-container-title":c["a"],"signature-modal-modal":p},data:function(){return{message:"",signature:""}},computed:b({},Object(r["b"])(["account","web3"])),mounted:function(){var e=this;this.$refs.signatureModal.$refs.signatureModal.$on("hidden",(function(){e.deleteInputText()}))},methods:{signMessage:function(){var e=this;try{this.web3.eth.sign(this.message,this.account.address).then((function(t){e.signature=JSON.stringify({address:e.account.address,msg:e.message,sig:t,version:"3",signer:e.account.isHardware?e.account.identifier:"MEW"},null,2),e.$refs.signatureModal.$refs.signatureModal.show()})).catch((function(e){o["e"].responseHandler(e,o["e"].ERROR)}))}catch(t){o["e"].responseHandler(t,o["e"].ERROR)}},copyToClipboard:function(){this.$refs.signature.select(),document.execCommand("copy"),window.getSelection().removeAllRanges(),o["e"].responseHandler(this.$t("common.copied"),o["e"].INFO)},deleteInputText:function(){this.signature="",this.message=""}}},y=h,O=(s("ec79"),Object(m["a"])(y,n,a,!1,null,"53a430a2",null)),w=O.exports;s.d(t,"default",(function(){return w}))},"8ef5":function(e,t,s){"use strict";var n=s("9bd9"),a=s.n(n);a.a},"8f71":function(e,t,s){},"9bd9":function(e,t,s){},ec79:function(e,t,s){"use strict";var n=s("8f71"),a=s.n(n);a.a}}]);
//# sourceMappingURL=chunk-5087cf46.a546793a.js.map