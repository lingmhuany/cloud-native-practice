(function(e){function t(t){for(var r,u,i=t[0],l=t[1],s=t[2],f=0,p=[];f<i.length;f++)u=i[f],o[u]&&p.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{name:"header"}}),n("router-view",{attrs:{name:"main"}})],1)},a=[],u=n("2877"),i={},l=Object(u["a"])(i,o,a,!1,null,null,null),s=l.exports,c=n("5c96"),f=n.n(c);n("0fae");r["default"].use(f.a);var p=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rainbow"},[e._v("\n  "+e._s(e.greeting)+"\n  "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.generate()}}},[e._v("生成")]),e._v("\n  "+e._s(e.sentence)+"\n")],1)},g=[],h={name:"Rainbow",data:function(){return{greeting:null,sentence:null}},created:function(){var e=this;this.axios({method:"get",url:"/greeting/get"}).then(function(t){200==t.status?e.greeting=t.data:e.$message.error("未知错误")})},methods:{generate:function(){var e=this;this.axios({method:"get",url:"/rainbow/get"}).then(function(t){200==t.status?e.sentence=t.data:e.$message.error("未知错误")})}}},v=h,b=Object(u["a"])(v,d,g,!1,null,null,null),m=b.exports;r["default"].use(p["a"]);var y=new p["a"]({routes:[{path:"/",redirect:"/login"},{path:"/login",name:"Login",components:{main:Login}},{path:"/rainbow",name:"rainbow",components:{main:m}}]}),w=n("bc3a"),_=n.n(w),x=n("4328"),O=n.n(x);r["default"].config.productionTip=!1,r["default"].prototype.axios=_.a,r["default"].prototype.qs=O.a,new r["default"]({router:y,render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.6207f27f.js.map