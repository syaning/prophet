(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"0de4":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"prophet-register"},[r("h3",[e._v(e._s(e.$t("register.title")))]),r("Form",{attrs:{model:e.user}},[r("FormItem",{attrs:{prop:"email"}},[r("Input",{attrs:{placeholder:e.$t("register.email.placeholder")},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{type:"password",placeholder:e.$t("register.password.placeholder")},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),r("FormItem",{attrs:{prop:"confirmPass"}},[r("Input",{attrs:{type:"password",placeholder:e.$t("register.confirmPass.placeholder")},model:{value:e.user.confirmPass,callback:function(t){e.$set(e.user,"confirmPass",t)},expression:"user.confirmPass"}})],1),r("FormItem",{attrs:{prop:"phone"}},[r("Input",{attrs:{placeholder:e.$t("register.phone.placeholder")},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}},[r("Select",{staticStyle:{width:"75px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:e.user.area,callback:function(t){e.$set(e.user,"area",t)},expression:"user.area"}},e._l(e.areas,function(t){return r("Option",{key:t,attrs:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])}),1)],1)],1),r("FormItem",{attrs:{prop:"code"}},[r("Row",{attrs:{gutter:8}},[r("Col",{attrs:{span:16}},[r("Input",{attrs:{placeholder:e.$t("register.code.placeholder")},model:{value:e.user.code,callback:function(t){e.$set(e.user,"code",t)},expression:"user.code"}})],1),r("Col",{attrs:{span:8}},[r("Button",{attrs:{long:""},on:{click:e.getCode}},[e._v("\n            "+e._s(e.$t("register.getCode"))+"\n          ")])],1)],1)],1),r("FormItem",[r("Row",{attrs:{gutter:8}},[r("Col",{attrs:{span:12}},[r("Button",{attrs:{long:"",type:"primary"}},[e._v("\n            "+e._s(e.$t("register.register"))+"\n          ")])],1),r("Col",{staticStyle:{"text-align":"right"},attrs:{span:12}},[r("router-link",{attrs:{to:{name:"login"}}},[e._v("\n            "+e._s(e.$t("register.login"))+"\n          ")])],1)],1)],1)],1)],1)},a=[],o={data:function(){return{user:{email:"",password:"",confirmPass:"",area:"+86",phone:"",code:""},areas:["+86"]}},computed:{rules:function(){return{}}},methods:{getCode:function(){}}},n=o,l=(r("0f3c"),r("2877")),p=Object(l["a"])(n,s,a,!1,null,null,null);p.options.__file="index.vue";t["default"]=p.exports},"0f3c":function(e,t,r){"use strict";var s=r("a1f2"),a=r.n(s);a.a},a1f2:function(e,t,r){}}]);
//# sourceMappingURL=register.3e75d58a.js.map