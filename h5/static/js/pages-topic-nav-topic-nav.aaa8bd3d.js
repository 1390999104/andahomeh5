(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-topic-nav-topic-nav"],{"078b":function(t,n,e){"use strict";var i,r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"scroll-row flex",staticStyle:{height:"100rpx"},attrs:{"scroll-x":"true","enable-flex":!0,"scroll-with-animation":!0,"scroll-into-view":t.scrollInto}},t._l(t.tabBar,(function(n,i){return e("v-uni-view",{key:i,staticClass:"scroll-row-item header",class:t.tabIndex==i?"activeTab":"",attrs:{id:"tab"+i},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeTab(i)}}},[t._v(t._s(n.classname))])})),1),e("v-uni-view",{staticStyle:{height:"5rpx","background-color":"#f5f5f4"}}),e("v-uni-swiper",{style:"height:"+t.listHeight+"px",attrs:{duration:150,current:t.tabIndex},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.onChangeTab.apply(void 0,arguments)}}},t._l(t.newsList,(function(n,i){return e("v-uni-swiper-item",{key:i},[e("v-uni-scroll-view",{style:"height:"+t.listHeight+"px",attrs:{"scroll-y":"true"},on:{scrolltolower:function(n){arguments[0]=n=t.$handleEvent(n),t.loadmore(i)}}},[n.list.length>0?[t._l(n.list,(function(n,i){return[e("topic-list",{key:i+"_0",attrs:{choose:t.choose,item:n,index:i},on:{follow:function(n){arguments[0]=n=t.$handleEvent(n),t.follow.apply(void 0,arguments)},doSupport:function(n){arguments[0]=n=t.$handleEvent(n),t.doSupport.apply(void 0,arguments)}}})]})),e("loadmore",{attrs:{loadmore:n.loadmore}})]:n.firstLoad?[e("v-uni-view",{staticClass:"flex flex-column"},[t._v("什么都没有....")])]:[e("v-uni-view",{staticClass:"text-light-muted flex font-md",staticStyle:{height:"200rpx"}},[t._v("加载中...")])]],2)],1)})),1)],1)},o=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}))},"1af6":function(t,n,e){var i=e("63b6");i(i.S,"Array",{isArray:e("9003")})},"20fd":function(t,n,e){"use strict";var i=e("d9f6"),r=e("aebd");t.exports=function(t,n,e){n in t?i.f(t,n,r(0,e)):t[n]=e}},2738:function(t,n,e){"use strict";e.r(n);var i=e("7da0"),r=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=r.a},"2ec0":function(t,n,e){"use strict";e.r(n);var i=e("3c16"),r=e("f941");for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);var a,c=e("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"6772f926",null,!1,i["a"],a);n["default"]=s.exports},3702:function(t,n,e){var i=e("481b"),r=e("5168")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)}},"3c16":function(t,n,e){"use strict";var i,r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"flex"},[e("v-uni-text",{staticStyle:{"font-size":"30rpx",color:"#9d9d9c"}},[t._v(t._s(t.loadmore))])],1)],1)},o=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}))},"40c3":function(t,n,e){var i=e("6b4c"),r=e("5168")("toStringTag"),o="Arguments"==i(function(){return arguments}()),a=function(t,n){try{return t[n]}catch(e){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=a(n=Object(t),r))?e:o?i(n):"Object"==(c=i(n))&&"function"==typeof n.callee?"Arguments":c}},"4a66":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:["loadmore"],data:function(){return{}}};n.default=i},"4b55":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("c5f6");var i={props:{item:Object,index:Number,choose:{type:Boolean,default:!1}},onLoad:function(t){},data:function(){return{}},methods:{openTopicDetil:function(){if(this.choose)return uni.$emit("chooseTopic",{id:this.item.id,title:this.item.title}),uni.navigateBack({delta:1});uni.navigateTo({url:"../../pages/topic-detil/topic-detil?detail="+JSON.stringify(this.item)})}}};n.default=i},"4ee1":function(t,n,e){var i=e("5168")("iterator"),r=!1;try{var o=[7][i]();o["return"]=function(){r=!0},Array.from(o,(function(){throw 2}))}catch(a){}t.exports=function(t,n){if(!n&&!r)return!1;var e=!1;try{var o=[7],c=o[i]();c.next=function(){return{done:e=!0}},o[i]=function(){return c},t(o)}catch(a){}return e}},"549b":function(t,n,e){"use strict";var i=e("d864"),r=e("63b6"),o=e("241e"),a=e("b0dc"),c=e("3702"),s=e("b447"),u=e("20fd"),l=e("7cd6");r(r.S+r.F*!e("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,r,f,d=o(t),v="function"==typeof this?this:Array,h=arguments.length,p=h>1?arguments[1]:void 0,b=void 0!==p,g=0,x=l(d);if(b&&(p=i(p,h>2?arguments[2]:void 0,2)),void 0==x||v==Array&&c(x))for(n=s(d.length),e=new v(n);n>g;g++)u(e,g,b?p(d[g],g):d[g]);else for(f=x.call(d),e=new v;!(r=f.next()).done;g++)u(e,g,b?a(f,p,[r.value,g],!0):r.value);return e.length=g,e}})},"54a1":function(t,n,e){e("6c1c"),e("1654"),t.exports=e("95d5")},6066:function(t,n,e){"use strict";var i,r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"flex pd-2 justify-start",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openTopicDetil.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"rounded mr-20",staticStyle:{width:"100rpx",height:"100rpx"},attrs:{src:t.item.cover,mode:""}}),e("v-uni-view",{staticClass:" flex-column flex-1",staticStyle:{display:"flex"}},[e("v-uni-text",{staticClass:"font text-black"},[t._v("#"+t._s(t.item.title)+"#")]),e("v-uni-text",{staticClass:"font-sm text-light-muted"},[t._v(t._s(t.item.desc))]),e("v-uni-view",{staticClass:"font-sm text-light-muted",staticStyle:{display:"flex"}},[e("v-uni-text",{staticClass:"mr-20"},[t._v("动态:"+t._s(t.item.news_count))]),e("v-uni-text",[t._v("今日:"+t._s(t.item.today_count))])],1)],1)],1)],1)},o=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}))},"616c":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".header[data-v-9804226e]{font-size:%?30?%;padding:%?20?%}.activeTab[data-v-9804226e]{color:#16c2c2;font-size:%?40?%;font-weight:700}\n\n\t/* .scroll-row{\n\twidth: 100%;\n\twhite-space: nowrap;\n}\n.scroll-row-item{\n\tdisplay: inline-block;\n} */",""]),t.exports=n},"72f2":function(t,n,e){"use strict";e.r(n);var i=e("4b55"),r=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=r.a},"75fc":function(t,n,e){"use strict";e.r(n);var i=e("a745"),r=e.n(i);function o(t){if(r()(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}var a=e("774e"),c=e.n(a),s=e("c8bb"),u=e.n(s);function l(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return c()(t)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){return o(t)||l(t)||f()}e.d(n,"default",(function(){return d}))},"774e":function(t,n,e){t.exports=e("d2d5")},"7cd6":function(t,n,e){var i=e("40c3"),r=e("5168")("iterator"),o=e("481b");t.exports=e("584a").getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[i(t)]}},"7da0":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e("75fc")),o=i(e("92d2")),a=i(e("2ec0")),c={components:{topicList:o.default,loadmore:a.default},data:function(){return{listHeight:600,tabIndex:0,scrollInto:"",tabBar:[],choose:!1,newsList:[]}},onNavigationBarSearchInputClicked:function(){uni.navigateTo({url:"../search/search"})},onNavigationBarButtonTap:function(){uni.navigateTo({url:"../add-input/add-input"})},onLoad:function(t){var n=this;console.log(t),this.tabIndex=t.index?JSON.parse(t.index):0,uni.getSystemInfo({success:function(t){n.listHeight=t.windowHeight-uni.upx2px(105)}}),this.getListData(),t.choose&&(uni.setNavigationBarTitle({title:"选择话题"}),this.choose=!0)},methods:{changeTab:function(t){this.tabIndex!=t&&(this.tabIndex=t,this.scrollInto="tab"+t,this.newsList[t].firstLoad||this.getList())},onChangeTab:function(t){this.changeTab(t.detail.current)},getListData:function(){var t=this;this.request.getArticleList().then((function(n){t.tabBar=n.data.list;for(var e=[],i=0;i<t.tabBar.length;i++){var r={loadmore:"上拉加载更多",list:[],page:1,firstLoad:!1};e.push(r)}t.newsList=e,t.tabBar.length>0&&t.getList()}))},getList:function(){var t=this,n=this.tabIndex,e=this.tabBar[n].id,i=this.newsList[n].page,o=1===i;this.request.getHotTopicClassList(e,i).then((function(e){var i=e.data.list.map((function(t){return{id:t.id,cover:t.titlepic,title:t.title,desc:t.desc,today_count:t.todaypost_count,news_count:t.post_count}}));t.newsList[n].list=o?(0,r.default)(i):[].concat((0,r.default)(t.newsList[n].list),(0,r.default)(i)),t.newsList[n].loadmore=i.length<10?"没有更多了":"上拉加载更多",o&&(t.newsList[n].firstLoad=!0)})).catch((function(e){o||t.newsList[n].page--}))},loadmore:function(t){var n=this.newsList[t];"上拉加载更多"===n.loadmore&&(n.loadmore="加载中...",this.item.page++,this.getList())}}};n.default=c},"8a8e":function(t,n,e){"use strict";var i=e("ddce"),r=e.n(i);r.a},9254:function(t,n,e){"use strict";e.r(n);var i=e("078b"),r=e("2738");for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);e("8a8e");var a,c=e("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"9804226e",null,!1,i["a"],a);n["default"]=s.exports},"92d2":function(t,n,e){"use strict";e.r(n);var i=e("6066"),r=e("72f2");for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);var a,c=e("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"430bc916",null,!1,i["a"],a);n["default"]=s.exports},"95d5":function(t,n,e){var i=e("40c3"),r=e("5168")("iterator"),o=e("481b");t.exports=e("584a").isIterable=function(t){var n=Object(t);return void 0!==n[r]||"@@iterator"in n||o.hasOwnProperty(i(n))}},a745:function(t,n,e){t.exports=e("f410")},b0dc:function(t,n,e){var i=e("e4ae");t.exports=function(t,n,e,r){try{return r?n(i(e)[0],e[1]):n(e)}catch(a){var o=t["return"];throw void 0!==o&&i(o.call(t)),a}}},c8bb:function(t,n,e){t.exports=e("54a1")},d2d5:function(t,n,e){e("1654"),e("549b"),t.exports=e("584a").Array.from},ddce:function(t,n,e){var i=e("616c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("de6fd8fa",i,!0,{sourceMap:!1,shadowMode:!1})},f410:function(t,n,e){e("1af6"),t.exports=e("584a").Array.isArray},f941:function(t,n,e){"use strict";e.r(n);var i=e("4a66"),r=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=r.a}}]);