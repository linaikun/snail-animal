(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aeb4a"],{"0acf":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Select",{attrs:{loading:e.loading,placeholder:e.placeholder,multiple:e.multiple,disabled:e.disabled,filterable:"",transfer:e.transfer,clearable:e.clearable,placement:e.placement,"not-found-text":e.notFoundText,"label-in-value":e.labelInValue,"transfer-class-name":e.transferClassName,prefix:e.prefix,"max-tag-count":e.maxTagCount,"max-tag-placeholder":e.maxTagPlaceholder,remote:"","remote-method":e.searchUser},on:{"on-change":e.handleChange,"on-query-change":e.handleQueryChange,"on-clear":e.handleClear,"on-open-change":e.handleOpenChange,"on-select":e.handleSelect},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.userList,(function(t,a){return n("Option",{key:a,attrs:{value:t.id,label:t.nickname,tag:t.username}},[n("span",{staticStyle:{"margin-right":"10px"}},[e._v(e._s(t.nickname))]),n("span",{staticStyle:{color:"#ccc"}},[e._v(e._s(t.username))])])})),1)],1)},l=[],i=n("365c"),o={name:"customList",props:{placeholder:{type:String,default:"请输入用户名搜索选择用户"},placement:{type:String,default:"bottom-start"},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},notFoundText:{type:String,default:"无匹配数据"},labelInValue:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data:function(){return{value:null,userList:[],loading:!1}},methods:{searchUser:function(e){var t=this;e&&(this.loading=!0,Object(i["Lc"])(e).then((function(e){t.loading=!1,e.success&&(t.userList=e.result)})))},handleChange:function(e){this.$emit("input",e),this.$emit("on-change",e)},handleQueryChange:function(e){this.$emit("on-query-change",e)},handleClear:function(){this.$emit("on-clear","")},handleOpenChange:function(e){this.$emit("on-open-change",e)},handleSelect:function(e){this.$emit("on-select",e)},clear:function(){this.value=null,this.userList=[]},setData:function(e){var t=this;if(e.length){if(e.length>0){var n=[],a=[];e.forEach((function(e){n.push(e),a.push(e.id)})),this.userList=n,setTimeout((function(){t.value=a,t.$emit("input",a)}),10)}}else{var l=[e];this.userList=l,setTimeout((function(){t.value=e.id,t.$emit("input",e.id)}),10)}}},mounted:function(){}},u=o,s=n("2877"),r=Object(s["a"])(u,a,l,!1,null,null,null);t["default"]=r.exports}}]);