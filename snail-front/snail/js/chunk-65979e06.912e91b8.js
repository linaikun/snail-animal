(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65979e06","chunk-6ee98f12"],{"01dc":function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("Card",{attrs:{padding:0}},[a("div",{staticClass:"info-card-con"},[a("Col",{staticClass:"info-card-icon-con",style:{backgroundColor:t.color,color:"white"},attrs:{span:"8"}},[a("Row",{staticClass:"height-100",attrs:{type:"flex",align:"middle",justify:"center"}},[a("Icon",{attrs:{type:t.iconType,size:t.iconSize}})],1)],1),a("Col",{staticClass:"height-100",attrs:{span:"16"}},[a("Row",{staticClass:"height-100",attrs:{type:"flex",align:"middle",justify:"center"}},[a("count-up",{staticClass:"info-card-count user-created-count",attrs:{"id-name":t.idName,"end-val":t.endVal,color:t.color,countSize:t.countSize,countWeight:t.countWeight}},[a("p",{staticClass:"info-intro-text",attrs:{slot:"intro"},slot:"intro"},[t._v(t._s(t.introText))])])],1)],1)],1)])},e=[],s=a("1422"),r={name:"inforCard",components:{countUp:s["default"]},props:{idName:String,endVal:Number,color:String,iconType:String,introText:String,countSize:{type:String,default:"30px"},countWeight:{type:Number,default:700},iconSize:{type:Number,default:40}}},o=r,l=(a("f69f"),a("2877")),u=Object(l["a"])(o,n,e,!1,null,null,null);i["default"]=u.exports},1422:function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("p",{class:t.className,style:{textAlign:"center",color:t.color,fontSize:t.countSize,fontWeight:t.countWeight}},[a("span",{attrs:{id:t.idName}}),a("span",[t._v(t._s(t.unit))])]),t._t("intro")],2)},e=[],s=a("1a23");function r(t){var i=0,a="";return t<1e3?i=t:t>=1e3&&t<1e6?(i=parseInt(t/1e3),a="K+"):t>=1e6&&t<1e10?(i=parseInt(t/1e6),a="M+"):(i=parseInt(t/1e9),a="B+"),{val:i,unit:a}}var o={data:function(){return{unit:"",demo:{}}},name:"countUp",props:{idName:String,className:String,endVal:{type:Number,required:!0},delay:{type:Number,default:500},options:{type:Object,default:function(){return{startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,separator:",",decimal:"."}}},color:String,countSize:{type:String,default:"30px"},countWeight:{type:Number,default:700},introText:[String,Number]},mounted:function(){var t=this;this.$nextTick((function(){setTimeout((function(){var i=r(t.endVal),a=i.val;t.unit=i.unit;var n={};t.demo=n=new s["a"](t.idName,a,t.options),n.error||n.start()}),t.delay)}))},watch:{endVal:function(t){var i=r(t),a=i.val;this.unit=i.unit,this.demo.update(a)}}},l=o,u=a("2877"),h=Object(u["a"])(l,n,e,!1,null,null,null);i["default"]=h.exports},"17ed":function(t,i,a){},"1a23":function(t,i,a){"use strict";a.d(i,"a",(function(){return e}));var n=function(){return(n=Object.assign||function(t){for(var i,a=1,n=arguments.length;a<n;a++)for(var e in i=arguments[a])Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e]);return t}).apply(this,arguments)},e=function(){function t(t,i,a){var e=this;this.target=t,this.endVal=i,this.options=a,this.version="2.0.7",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){e.startTime||(e.startTime=t);var i=t-e.startTime;e.remaining=e.duration-i,e.useEasing?e.countDown?e.frameVal=e.startVal-e.easingFn(i,0,e.startVal-e.endVal,e.duration):e.frameVal=e.easingFn(i,e.startVal,e.endVal-e.startVal,e.duration):e.countDown?e.frameVal=e.startVal-(e.startVal-e.endVal)*(i/e.duration):e.frameVal=e.startVal+(e.endVal-e.startVal)*(i/e.duration),e.countDown?e.frameVal=e.frameVal<e.endVal?e.endVal:e.frameVal:e.frameVal=e.frameVal>e.endVal?e.endVal:e.frameVal,e.frameVal=Number(e.frameVal.toFixed(e.options.decimalPlaces)),e.printValue(e.frameVal),i<e.duration?e.rAF=requestAnimationFrame(e.count):null!==e.finalEndVal?e.update(e.finalEndVal):e.callback&&e.callback()},this.formatNumber=function(t){var i,a,n,s,r,o=t<0?"-":"";if(i=Math.abs(t).toFixed(e.options.decimalPlaces),n=(a=(i+="").split("."))[0],s=a.length>1?e.options.decimal+a[1]:"",e.options.useGrouping){r="";for(var l=0,u=n.length;l<u;++l)0!==l&&l%3==0&&(r=e.options.separator+r),r=n[u-l-1]+r;n=r}return e.options.numerals&&e.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return e.options.numerals[+t]})),s=s.replace(/[0-9]/g,(function(t){return e.options.numerals[+t]}))),o+e.options.prefix+n+s+e.options.suffix},this.easeOutExpo=function(t,i,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+i},this.options=n(n({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},f69f:function(t,i,a){"use strict";a("17ed")}}]);