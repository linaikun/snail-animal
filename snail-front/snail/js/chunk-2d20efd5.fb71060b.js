(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20efd5"],{b25d:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Card",[i("p",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[i("Icon",{staticStyle:{"margin-right":"5px"},attrs:{type:"md-locate"}}),t._v("访问用户分布 ")],1),i("Row",{staticStyle:{height:"273px"},attrs:{type:"flex",justify:"center",align:"middle"}},[i("apexchart",{attrs:{type:"donut",width:"350",options:t.chartOptions,series:t.series}})],1)],1)],1)},n=[],a={name:"visitSeparation",data:function(){return{series:[],chartOptions:{labels:["移动端","PC","平板","IOS","其他"],plotOptions:{pie:{donut:{size:"70%"}}},dataLabels:{enabled:!1},legend:{position:"right"}}}},methods:{init:function(){this.series=[45,18,27,15,13]}},mounted:function(){this.init()}},o=a,r=i("2877"),l=Object(r["a"])(o,s,n,!1,null,null,null);e["default"]=l.exports}}]);