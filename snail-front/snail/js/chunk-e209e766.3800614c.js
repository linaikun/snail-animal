(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e209e766"],{"666a":function(t,o,e){"use strict";e.r(o);var r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{class:{"shop-hover-container":"saleoff"!=t.type}},[e("a",{class:{"shop-product-wrap":!0,"saleoff-wrap":"saleoff"==t.type},style:t.topBorderColor,on:{click:function(o){return t.openProduct(t.data)}}},[e("div",{class:{bg:"saleoff"==t.type,bgt:"saleoff"!=t.type}}),t.data.flag?e("div",{staticClass:"flag",style:t.flagBg},[t._v(t._s(t.data.flag))]):t._e(),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.data.picUrl,expression:"data.picUrl"}],style:{marginBottom:"saleoff"==t.type?"22px":"18px"},attrs:{width:"160",height:"160"}}),e("div",{staticClass:"title"},[t._v(t._s(t.data.title))]),e("div",{staticClass:"desc"},[t._v(t._s(t.data.description))]),e("div",{staticClass:"item-price"},[e("div",{staticClass:"item-discount"},[t._v(t._s(t.data.price)+" 元")]),t.data.originPrice?e("del",{staticClass:"item-origin"},[t._v(t._s(t.data.originPrice)+" 元")]):t._e()]),t.data.review&&t.data.reviewer?e("div",{staticClass:"review-wrapper"},[e("div",{staticClass:"review"},[t._v(t._s(t.data.review))]),e("div",{staticClass:"reviewer"},[t._v("来自于 "+t._s(t.data.reviewer)+" 的评价")])]):t._e()])])},a=[],i={name:"ProductShop",data:function(){return{}},props:{data:{type:Object,default:function(){return{}}},type:{type:String,default:""},topColor:{type:Number,default:-1}},computed:{flagBg:function(){var t=String(this.data.flagType).toLowerCase();return"saleoff"==t?"background-color: #e53935;":"background-color: #83c44e;"},topBorderColor:function(){return 0==this.topColor?"border-top-color: #ffac13;":1==this.topColor?"border-top-color: #83c44e;":2==this.topColor?"border-top-color: #2196f3;":3==this.topColor?"border-top-color: #e53935;":4==this.topColor?"border-top-color: #00c0a5;":5==this.topColor?"border-top-color: #ffac13;":6==this.topColor?"border-top-color: #83c44e;":7==this.topColor?"border-top-color: #2196f3;":8==this.topColor?"border-top-color: #e53935;":9==this.topColor?"border-top-color: #00c0a5;":"border-top-style: none;"}},methods:{openProduct:function(t){}},mounted:function(){}},s=i,l=(e("cfe8"),e("2877")),c=Object(l["a"])(s,r,a,!1,null,null,null);o["default"]=c.exports},"90d2":function(t,o,e){},cfe8:function(t,o,e){"use strict";e("90d2")}}]);