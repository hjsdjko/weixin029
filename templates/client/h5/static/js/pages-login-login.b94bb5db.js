(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{3285:function(t,e,n){"use strict";n.r(e);var i=n("6263"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"58b9":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-6b32a172]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),t.exports=e},6263:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("3b8d")),a=i(n("2971")),o={data:function(){return{username:"",password:"",loginType:1,codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","yonghu","yuangong"],index:1,roleNum:0}},onLoad:function(){var t=["请选择登录用户类型"],e=a.default.list();this.menuList=e;for(var n=0;n<this.menuList.length;n++)"是"==this.menuList[n].hasFrontLogin&&(t.push(this.menuList[n].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=t,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(t){uni.setStorageSync("loginTable",t),this.$utils.jump("../register/register")},onLoginTap:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.username){t.next=3;break}return this.$utils.msg("请输入用户名"),t.abrupt("return");case 3:if(this.password){t.next=6;break}return this.$utils.msg("请输入用户密码"),t.abrupt("return");case 6:if(this.optionsValues[this.index]){t.next=9;break}return this.$utils.msg("请选择登录用户类型"),t.abrupt("return");case 9:return t.next=11,this.$api.login("".concat(this.optionsValues[this.index]),{username:this.username,password:this.password});case 11:return e=t.sent,uni.removeStorageSync("useridTag"),uni.setStorageSync("token",e.token),uni.setStorageSync("nickname",this.username),uni.setStorageSync("nowTable","".concat(this.optionsValues[this.index])),t.next=18,this.$api.session("".concat(this.optionsValues[this.index]));case 18:e=t.sent,e.data.touxiang?uni.setStorageSync("headportrait",e.data.touxiang):e.data.headportrait&&uni.setStorageSync("headportrait",e.data.headportrait),uni.setStorageSync("userid",e.data.id),e.data.vip&&uni.setStorageSync("vip",e.data.vip),uni.setStorageSync("appRole","".concat(this.options[this.index])),this.$utils.tab("../index/index");case 24:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value}}};e.default=o},"76d5":function(t,e,n){var i=n("58b9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("68f63d1c",i,!0,{sourceMap:!1,shadowMode:!1})},a86a:function(t,e,n){"use strict";n.r(e);var i=n("b39e"),r=n("3285");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("ac48");var o,s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"6b32a172",null,!1,i["a"],o);e["default"]=u.exports},ac48:function(t,e,n){"use strict";var i=n("76d5"),r=n.n(i);r.a},b39e:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"box",style:{minHeight:"100vh",width:"100%",padding:"224rpx 44rpx 244rpx 44rpx",background:"url(http://clfile.zggen.cn/20231027/1c74fe0f859b421da2ff00db828f3937.jpg) no-repeat center top / 100%,#6185fd",height:"100%"}},[n("v-uni-view",{style:{padding:"40rpx 48rpx 40rpx 48rpx",boxShadow:"0px 0px 0px #dddddd",margin:"0 0 244rpx 0",borderRadius:"24rpx",background:"#ffffff",display:"block",width:"100%",position:"relative",height:"auto"}},[n("v-uni-image",{style:{width:"160rpx",margin:"0 auto 40rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"160rpx"},attrs:{src:"http://clfile.zggen.cn/20231027/4b7b24d658fd400e849c8c2314e29d56.jpg",mode:"aspectFill"}}),1==t.loginType?n("v-uni-view",{staticClass:"uni-form-item uni-column",style:{width:"100%",margin:"0 0 24rpx 0",height:"auto"}},[n("v-uni-input",{staticClass:"uni-input",style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"40rpx",background:"#ffffff",width:"100%",fontSize:"28rpx",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"请输入账号"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1):t._e(),1==t.loginType?n("v-uni-view",{staticClass:"uni-form-item uni-column",style:{width:"100%",margin:"0 0 24rpx 0",height:"auto"}},[n("v-uni-input",{staticClass:"uni-input",style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"40rpx",background:"#ffffff",width:"100%",fontSize:"28rpx",height:"80rpx"},attrs:{type:"password",name:"",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1):t._e(),t.roleNum>1?n("v-uni-picker",{style:{border:"2rpx solid #eeeeee",width:"100%",padding:"0 20rpx",margin:"0 0 24rpx 0",borderRadius:"40rpx",height:"auto"},attrs:{value:t.index,range:t.options},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.optionsChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-picker-type",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#666666"}},[t._v(t._s(t.options[t.index]))])],1):t._e(),1==t.loginType?n("v-uni-button",{staticClass:"btn-submit",style:{border:"0",padding:"0 0 0 0",margin:"0 0 24rpx 0",color:"#ffffff",borderRadius:"60rpx",background:"url(http://clfile.zggen.cn/20231027/6e8b0d771019408d8e99fb9a88018f81.png) no-repeat center top / 100%",width:"100%",lineHeight:"80rpx",fontSize:"32rpx",height:"80rpx"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoginTap.apply(void 0,arguments)}}},[t._v("登录")]):t._e(),2==t.loginType?n("v-uni-button",{staticClass:"btn-submit",style:{border:"0",padding:"0 0 0 0",margin:"0 0 24rpx 0",color:"#ffffff",borderRadius:"60rpx",background:"url(http://clfile.zggen.cn/20231027/6e8b0d771019408d8e99fb9a88018f81.png) no-repeat center top / 100%",width:"100%",lineHeight:"80rpx",fontSize:"32rpx",height:"80rpx"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onFaceLoginTap.apply(void 0,arguments)}}},[t._v("人脸识别登录")]):t._e(),n("v-uni-view",{staticClass:"links",style:{width:"100%",margin:"0 0 24rpx 0",flexWrap:"wrap",display:"flex",height:"auto"}},[n("v-uni-view",{staticClass:"link-highlight",style:{color:"#999999",padding:"0 8rpx 0 8rpx",fontSize:"28rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onRegisterTap("yonghu")}}},[t._v("注册用户")]),n("v-uni-view",{staticClass:"link-highlight",style:{color:"#999999",padding:"0 8rpx 0 8rpx",fontSize:"28rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onRegisterTap("yuangong")}}},[t._v("注册员工")])],1)],1)],1)],1)},a=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))}}]);