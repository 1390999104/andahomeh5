(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-set-user-set"],{"2f25":function(t,e,n){"use strict";n.r(e);var i=n("e6d1"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"6ce1":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.loginStatus?[n("uni-list-item",{attrs:{title:"账号与安全"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openPage("user-safe")}}}),n("uni-list-item",{attrs:{title:"资料编辑"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openPage("change-userinfo")}}})]:t._e(),n("uni-list-item",{attrs:{title:"清除缓存"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"text-light-muted",attrs:{slot:"right"},slot:"right"},[t._v(t._s(t._f("format")(t.currentSize)))])],1),t.loginStatus?n("uni-list-item",{attrs:{title:"意见反馈"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openPage("user-feedback")}}}):t._e(),n("uni-list-item",{attrs:{title:"关于社区"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openPage("about")}}}),t.loginStatus?n("v-uni-view",{staticStyle:{padding:"20rpx 30rpx"}},[n("v-uni-button",{staticClass:"bgc text-white",staticStyle:{"border-radius":"50rpx"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logout.apply(void 0,arguments)}}},[t._v("退出登录")])],1):t._e()],2)},r=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},d45e:function(t,e,n){"use strict";n.r(e);var i=n("6ce1"),o=n("2f25");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var c,a=n("f0c5"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"1abee2ba",null,!1,i["a"],c);e["default"]=u.exports},e6d1:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("8e6e"),n("ac6a"),n("456d");var o=i(n("bd86")),r=i(n("3348")),c=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){(0,o.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s={components:{uniListItem:r.default},data:function(){return{currentSize:0}},onLoad:function(){this.getStorageInfo()},computed:u({},(0,c.mapState)({loginStatus:function(t){return t.loginStatus}})),filters:{format:function(t){return t>1024?(t/1024).toFixed(2)+"MB":t.toFixed(2)+"KB"}},methods:{getStorageInfo:function(){var t=uni.getStorageInfoSync();this.currentSize=t.currentSize},openPage:function(t){uni.navigateTo({url:"../".concat(t,"/").concat(t)})},logout:function(){var t=this;uni.showModal({content:"是否要退出登录",success:function(e){e.confirm&&(t.$store.commit("logout"),uni.navigateBack({delta:1}),uni.showToast({title:"退出登录成功",icon:"none"}))}})},clear:function(){var t=this;uni.showModal({title:"提示",content:"是否要清除所有缓存？",cancelText:"不清除",confirmText:"清除",success:function(e){e.confirm&&(uni.clearStorageSync(),t.getStorageInfo(),uni.showToast({title:"清除成功",icon:"none"}))}})}}};e.default=s}}]);