(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59556e90","chunk-2d20efd5"],{"01dc":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",{attrs:{padding:0}},[n("div",{staticClass:"info-card-con"},[n("Col",{staticClass:"info-card-icon-con",style:{backgroundColor:t.color,color:"white"},attrs:{span:"8"}},[n("Row",{staticClass:"height-100",attrs:{type:"flex",align:"middle",justify:"center"}},[n("Icon",{attrs:{type:t.iconType,size:t.iconSize}})],1)],1),n("Col",{staticClass:"height-100",attrs:{span:"16"}},[n("Row",{staticClass:"height-100",attrs:{type:"flex",align:"middle",justify:"center"}},[n("count-up",{staticClass:"info-card-count user-created-count",attrs:{"id-name":t.idName,"end-val":t.endVal,color:t.color,countSize:t.countSize,countWeight:t.countWeight}},[n("p",{staticClass:"info-intro-text",attrs:{slot:"intro"},slot:"intro"},[t._v(t._s(t.introText))])])],1)],1)],1)])},i=[],r=n("1422"),s={name:"inforCard",components:{countUp:r["default"]},props:{idName:String,endVal:Number,color:String,iconType:String,introText:String,countSize:{type:String,default:"30px"},countWeight:{type:Number,default:700},iconSize:{type:Number,default:40}}},o=s,c=(n("f69f"),n("2877")),u=Object(c["a"])(o,a,i,!1,null,null,null);e["default"]=u.exports},1422:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{class:t.className,style:{textAlign:"center",color:t.color,fontSize:t.countSize,fontWeight:t.countWeight}},[n("span",{attrs:{id:t.idName}}),n("span",[t._v(t._s(t.unit))])]),t._t("intro")],2)},i=[],r=n("1a23");function s(t){var e=0,n="";return t<1e3?e=t:t>=1e3&&t<1e6?(e=parseInt(t/1e3),n="K+"):t>=1e6&&t<1e10?(e=parseInt(t/1e6),n="M+"):(e=parseInt(t/1e9),n="B+"),{val:e,unit:n}}var o={data:function(){return{unit:"",demo:{}}},name:"countUp",props:{idName:String,className:String,endVal:{type:Number,required:!0},delay:{type:Number,default:500},options:{type:Object,default:function(){return{startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,separator:",",decimal:"."}}},color:String,countSize:{type:String,default:"30px"},countWeight:{type:Number,default:700},introText:[String,Number]},mounted:function(){var t=this;this.$nextTick((function(){setTimeout((function(){var e=s(t.endVal),n=e.val;t.unit=e.unit;var a={};t.demo=a=new r["a"](t.idName,n,t.options),a.error||a.start()}),t.delay)}))},watch:{endVal:function(t){var e=s(t),n=e.val;this.unit=e.unit,this.demo.update(n)}}},c=o,u=n("2877"),l=Object(u["a"])(c,a,i,!1,null,null,null);e["default"]=l.exports},"17ed":function(t,e,n){},"195f":function(t,e,n){},6543:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"visit"},[n("Card",[n("p",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[n("Icon",{staticStyle:{"margin-right":"5px"},attrs:{type:"md-map"}}),t._v("每日来访量统计 ")],1),n("div",{attrs:{slot:"extra"},slot:"extra"},[n("DatePicker",{staticStyle:{width:"250px"},attrs:{options:t.options,type:"daterange",placeholder:"选择日期范围"}})],1),n("div",{staticStyle:{height:"273px"}},[n("apexchart",{attrs:{type:"bar",height:"280",options:t.chartOptions,series:t.series}})],1)])],1)},i=[],r=n("fe1f"),s=n("fd3a"),o=n("8c86");function c(t,e){Object(o["a"])(2,arguments);var n=Object(s["a"])(t),a=Object(r["a"])(e);return isNaN(a)?new Date(NaN):a?(n.setDate(n.getDate()+a),n):n}function u(t,e){Object(o["a"])(2,arguments);var n=Object(r["a"])(e);return c(t,-n)}var l=n("6c6d"),d=n("a3e9"),f={name:"visitVolume",data:function(){return{options:{shortcuts:l["a"]},series:[{name:"",data:[]}],chartOptions:{colors:["#398af7","#63a3f9","#b3d1fd"],chart:{stacked:!0,toolbar:{show:!1},zoom:{enabled:!1},locales:[d],defaultLocale:"zh"},plotOptions:{bar:{columnWidth:"40%",horizontal:!1}},xaxis:{type:"datetime",labels:{datetimeFormatter:{year:"yyyy年",month:"yyyy年MMM",day:"MMMdd日"}},categories:[]},legend:{show:!1},dataLabels:{enabled:!1},tooltip:{enabled:!0,x:{show:!0,format:"MMM dd日"}}}}},methods:{init:function(){this.series=[{name:"登录次数",data:[44,55,41,67,22,43,27,45,15,44,30,44,30,15]},{name:"浏览量",data:[13,23,20,8,13,27,23,20,8,13,27,13,27,50]},{name:"注册用户",data:[11,17,15,15,21,14,17,15,15,21,14,21,14,35]}];for(var t=[],e=14,n=u(new Date,e),a=0;a<e;a++)t.push(c(n,a).getTime());this.chartOptions.xaxis.categories=t}},created:function(){this.init()}},p=f,m=(n("8c63"),n("2877")),h=Object(m["a"])(p,a,i,!1,null,null,null);e["default"]=h.exports},"6c6d":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a=[{text:"今日",value:function(){var t=new Date,e=new Date;return t.setTime(e.getTime()),[e,t]}},{text:"昨日",value:function(){var t=new Date,e=new Date;return e.setTime(e.getTime()-864e5),t.setTime(t.getTime()-864e5),[e,t]}},{text:"本周",value:function(){var t=new Date,e=t.getDay(),n=t.getDate(),a=t.getMonth(),i=e||7,r=new Date(t.getFullYear(),a,n+1-i),s=new Date(t.getFullYear(),a,n+7-i);return r.setTime(r.getTime()),s.setTime(s.getTime()),[r,s]}},{text:"本月",value:function(){var t=new Date,e=t.getYear();e+=e<2e3?1900:0;var n=t.getMonth(),a=new Date(e,n,1),i=new Date(e,n+1,1),r=(i-a)/864e5,s=new Date(e,n,1),o=new Date(e,n,r);return s.setTime(s.getTime()),o.setTime(o.getTime()),[s,o]}}]},"77b8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},i=[],r=n("365c"),s=n("6543"),o=n("b25d"),c=n("01dc"),u=n("459a"),l=n("be65"),d=n.n(l),f=(n("db28"),n("1ac3")),p=n.n(f),m={name:"home",components:{visitVolume:s["default"],visitSeparation:o["default"],infoCard:c["default"],dashboard2:u["default"]},data:function(){return{showVideo:!1,count:{createUser:496,visit:3264,collection:24389305,transfer:39503498},city:"",username:""}},computed:{currNav:function(){return this.$store.state.app.currNav},avatarPath:function(){return localStorage.avatorImgPath}},methods:{init:function(){var t=this,e=JSON.parse(d.a.get("userInfo"));this.username=e.nickname,Object(r["uc"])().then((function(e){e.success&&(t.city=e.result)}))},showNotice:function(){var t=this;Object(r["Xb"])().then((function(e){if(e.success){if(!e.result)return;var n=e.result;n.open&&(n.title||n.content)&&"HOME"==n.position&&t.$Notice.info({title:n.title,desc:n.content,duration:n.duration})}}))}},mounted:function(){this.init();var t="noticeShowed",e=d.a.get(t);e!=t&&(this.showNotice(),d.a.set(t,t));var n=new p.a({clientID:"a128de2dd7383614273a",clientSecret:"a77691ecb662a8303a6c686ae651ae035868da6e",repo:"snail-comments",owner:"snail",admin:["snail"],distractionFreeMode:!1});n.render("comments");var a="videoShowed",i=d.a.get(a);i!=a&&(this.showVideo=!0,d.a.set(a,a))}},h=m,v=(n("e897"),n("2877")),g=Object(v["a"])(h,a,i,!1,null,null,null);e["default"]=g.exports},"7b7a":function(t,e,n){},"8c63":function(t,e,n){"use strict";n("195f")},b25d:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card",[n("p",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[n("Icon",{staticStyle:{"margin-right":"5px"},attrs:{type:"md-locate"}}),t._v("访问用户分布 ")],1),n("Row",{staticStyle:{height:"273px"},attrs:{type:"flex",justify:"center",align:"middle"}},[n("apexchart",{attrs:{type:"donut",width:"350",options:t.chartOptions,series:t.series}})],1)],1)],1)},i=[],r={name:"visitSeparation",data:function(){return{series:[],chartOptions:{labels:["移动端","PC","平板","IOS","其他"],plotOptions:{pie:{donut:{size:"70%"}}},dataLabels:{enabled:!1},legend:{position:"right"}}}},methods:{init:function(){this.series=[45,18,27,15,13]}},mounted:function(){this.init()}},s=r,o=n("2877"),c=Object(o["a"])(s,a,i,!1,null,null,null);e["default"]=c.exports},db28:function(t,e,n){},e897:function(t,e,n){"use strict";n("7b7a")},f69f:function(t,e,n){"use strict";n("17ed")}}]);