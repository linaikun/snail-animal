(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e925c09","chunk-326397f7"],{"3d66":function(t,e,n){},"40d1":function(t,e,n){"use strict";n("3d66")},4158:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("Card",{staticStyle:{"margin-bottom":"10px"}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("div",{staticClass:"edit-head"},[n("a",{staticClass:"back-title",on:{click:t.close}},[n("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),n("div",{staticClass:"head-name"},[t._v("流程审批进度历史")]),n("span"),n("a",{staticClass:"window-close",on:{click:t.close}},[n("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),n("Row",{staticStyle:{position:"relative"}},[n("Table",{ref:"table",attrs:{loading:t.loading,border:"",columns:t.columns,data:t.data}}),n("div",{staticClass:"img-title"},[t._v("实时流程图")]),n("Row",{staticStyle:{position:"relative"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgUrl,expression:"imgUrl"}]}),t.loadingImg?n("Spin",{attrs:{size:"large",fix:""}}):t._e()],1),t.loading?n("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1)},i=[],o=n("81c1"),a=n("c276"),c={name:"historic_detail",props:{procInstId:String},data:function(){return{loading:!1,loadingImg:!1,columns:[{type:"selection",width:60,align:"center"},{type:"index",width:60,align:"center"},{title:"任务名称",key:"name",minWidth:120,sortable:!0},{title:"处理人",key:"assignees",align:"center",sortable:!0,minWidth:150,render:function(t,e){if(e.row.assignees)return t("div",e.row.assignees.map((function(e,n){return e.isExecutor?t("Tooltip",{props:{placement:"top",content:e.username}},[t("Tag",{style:{"margin-right":"8px"},props:{type:"border",color:"primary"}},e.nickname)]):t("Tooltip",{props:{placement:"top",content:e.username}},[t("Tag",{style:{"margin-right":"8px"},props:{type:"border"}},e.nickname)])})))}},{title:"审批操作",key:"deleteReason",align:"center",minWidth:150,sortable:!0},{title:"审批意见",key:"comment",align:"center",minWidth:120,sortable:!0},{title:"耗时",key:"duration",align:"center",width:100,sortable:!0,render:function(t,e){return t("div",a["a"].millsToTime(e.row.duration))}},{title:"创建时间",key:"createTime",width:170,sortType:"asc",sortable:!0},{title:"完成时间",key:"endTime",width:170,sortable:!0},{title:"状态",align:"center",width:120,render:function(t,e){var n="",r="";return e.row.endTime?(r="blue",n="已办理"):(r="default",n="待处理"),t("div",[t("Tag",{props:{color:r}},n)])}}],data:[],id:"",imgUrl:"",backRoute:""}},methods:{init:function(){this.$route.query.id?(this.id=this.$route.query.id,this.backRoute=this.$route.query.backRoute):this.id=this.procInstId,this.imgUrl=o["D"]+this.id+"?accessToken="+this.getStore("accessToken")+"&time="+new Date,this.getDataList()},getDataList:function(){var t=this;this.loading=!0,Object(o["M"])(this.id).then((function(e){t.loading=!1,e.success&&(t.data=e.result,e.result&&0!=e.result.length||t.$Modal.info({title:"未找到该记录审批历史数据",content:"历史数据可能已被删除"}))}))},close:function(){this.$route.query.id?(this.$store.commit("removeTag","historic_detail"),localStorage.pageOpenedList=JSON.stringify(this.$store.state.app.pageOpenedList),this.$router.push({name:this.backRoute})):this.$emit("close",!0)}},mounted:function(){this.init()},watch:{$route:function(t,e){"historic_detail"==t.name&&this.init()}}},s=c,u=(n("40d1"),n("2877")),l=Object(u["a"])(s,r,i,!1,null,null,null);e["default"]=l.exports},"557a":function(t,e,n){},"6c6d":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=[{text:"今日",value:function(){var t=new Date,e=new Date;return t.setTime(e.getTime()),[e,t]}},{text:"昨日",value:function(){var t=new Date,e=new Date;return e.setTime(e.getTime()-864e5),t.setTime(t.getTime()-864e5),[e,t]}},{text:"本周",value:function(){var t=new Date,e=t.getDay(),n=t.getDate(),r=t.getMonth(),i=e||7,o=new Date(t.getFullYear(),r,n+1-i),a=new Date(t.getFullYear(),r,n+7-i);return o.setTime(o.getTime()),a.setTime(a.getTime()),[o,a]}},{text:"本月",value:function(){var t=new Date,e=t.getYear();e+=e<2e3?1900:0;var n=t.getMonth(),r=new Date(e,n,1),i=new Date(e,n+1,1),o=(i-r)/864e5,a=new Date(e,n,1),c=new Date(e,n,o);return a.setTime(a.getTime()),c.setTime(c.getTime()),[a,c]}}]},"81c1":function(t,e,n){"use strict";n.d(e,"x",(function(){return i})),n.d(e,"r",(function(){return o})),n.d(e,"y",(function(){return a})),n.d(e,"D",(function(){return c})),n.d(e,"F",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"s",(function(){return l})),n.d(e,"o",(function(){return d})),n.d(e,"J",(function(){return h})),n.d(e,"U",(function(){return f})),n.d(e,"X",(function(){return m})),n.d(e,"i",(function(){return g})),n.d(e,"K",(function(){return p})),n.d(e,"v",(function(){return b})),n.d(e,"w",(function(){return y})),n.d(e,"p",(function(){return v})),n.d(e,"L",(function(){return w})),n.d(e,"B",(function(){return k})),n.d(e,"I",(function(){return T})),n.d(e,"C",(function(){return O})),n.d(e,"G",(function(){return j})),n.d(e,"H",(function(){return D})),n.d(e,"V",(function(){return I})),n.d(e,"q",(function(){return S})),n.d(e,"j",(function(){return F})),n.d(e,"T",(function(){return x})),n.d(e,"t",(function(){return L})),n.d(e,"M",(function(){return P})),n.d(e,"k",(function(){return $})),n.d(e,"P",(function(){return _})),n.d(e,"Q",(function(){return B})),n.d(e,"z",(function(){return C})),n.d(e,"e",(function(){return M})),n.d(e,"f",(function(){return N})),n.d(e,"g",(function(){return R})),n.d(e,"n",(function(){return z})),n.d(e,"N",(function(){return A})),n.d(e,"O",(function(){return V})),n.d(e,"a",(function(){return W})),n.d(e,"u",(function(){return H})),n.d(e,"l",(function(){return E})),n.d(e,"R",(function(){return U})),n.d(e,"A",(function(){return q})),n.d(e,"d",(function(){return J})),n.d(e,"S",(function(){return Y})),n.d(e,"h",(function(){return K})),n.d(e,"m",(function(){return G})),n.d(e,"E",(function(){return Q})),n.d(e,"b",(function(){return X})),n.d(e,"W",(function(){return Z}));var r=n("7f80"),i="/snail/actModel/export/",o="/snail/actModel/deployByFile",a="/snail/actProcess/export",c="/snail/actProcess/getHighlightImg/",s=function(t){return Object(r["b"])("/actModel/getByCondition",t)},u=function(t){return Object(r["e"])("/actModel/add",t)},l=function(t,e){return Object(r["b"])("/actModel/deploy/".concat(t),e)},d=function(t){return Object(r["e"])("/actModel/delByIds",t)},h=function(t){return Object(r["b"])("/actProcess/getByCondition",t)},f=function(t){return Object(r["e"])("/actProcess/updateInfo",t)},m=function(t){return Object(r["e"])("/actProcess/updateStatus",t)},g=function(t,e){return Object(r["b"])("/actProcess/convertToModel/".concat(t),e)},p=function(t,e){return Object(r["b"])("/actProcess/getProcessNode/".concat(t),e)},b=function(t){return Object(r["e"])("/actProcess/editNodeUser",t)},y=function(t){return Object(r["e"])("/actProcess/editStartUser",t)},v=function(t){return Object(r["e"])("/actProcess/delByIds",t)},w=function(t){return Object(r["b"])("/actProcess/getRunningProcess",t)},k=function(t){return Object(r["b"])("/actProcess/getFinishedProcess",t)},T=function(t,e){return Object(r["b"])("/actProcess/getByKey/".concat(t),e)},O=function(t,e){return Object(r["b"])("/actProcess/getFirstNode/".concat(t),e)},j=function(t,e,n){return Object(r["b"])("/actProcess/getNextNode/".concat(t,"/").concat(e),n)},D=function(t,e){return Object(r["b"])("/actProcess/getNode/".concat(t),e)},I=function(t){return Object(r["e"])("/actProcess/updateInsStatus",t)},S=function(t){return Object(r["e"])("/actProcess/delInsByIds",t)},F=function(t){return Object(r["e"])("/actProcess/delHistoricInsByIds",t)},x=function(t){return Object(r["b"])("/actTask/todoList",t)},L=function(t){return Object(r["b"])("/actTask/doneList",t)},P=function(t,e){return Object(r["b"])("/actTask/historicFlow/".concat(t),e)},$=function(t){return Object(r["e"])("/actTask/delegate",t)},_=function(t){return Object(r["e"])("/actTask/pass",t)},B=function(t){return Object(r["e"])("/actTask/passAll",t)},C=function(t,e){return Object(r["b"])("/actTask/getBackList/".concat(t),e)},M=function(t){return Object(r["e"])("/actTask/back",t)},N=function(t){return Object(r["e"])("/actTask/backAll",t)},R=function(t){return Object(r["e"])("/actTask/backToTask",t)},z=function(t){return Object(r["e"])("/actTask/deleteHistoric",t)},A=function(t){return Object(r["b"])("/actCategory/getByParentId/0",t)},V=function(t,e){return Object(r["b"])("/actCategory/getByParentId/".concat(t),e)},W=function(t){return Object(r["e"])("/actCategory/add",t)},H=function(t){return Object(r["e"])("/actCategory/edit",t)},E=function(t){return Object(r["e"])("/actCategory/delByIds",t)},U=function(t){return Object(r["b"])("/actCategory/search",t)},q=function(t){return Object(r["b"])("/actBusiness/getByCondition",t)},J=function(t){return Object(r["e"])("/actBusiness/apply",t)},Y=function(t){return Object(r["e"])("/actBusiness/start",t)},K=function(t){return Object(r["e"])("/actBusiness/cancel",t)},G=function(t){return Object(r["e"])("/actBusiness/delByIds",t)},Q=function(t,e){return Object(r["b"])("/leave/get/".concat(t),e)},X=function(t){return Object(r["e"])("/leave/add",t)},Z=function(t){return Object(r["f"])("/leave/update",t)}},"97a9":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[t.showHistory?n("historicDetail",{attrs:{procInstId:t.procInstId},on:{close:function(e){t.showHistory=!1}}}):t._e(),n("Card",{directives:[{name:"show",rawName:"v-show",value:!t.showHistory,expression:"!showHistory"}]},[n("Row",{directives:[{name:"show",rawName:"v-show",value:t.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch(e)}}},[n("Form",{ref:"searchForm",attrs:{model:t.searchForm,inline:"","label-width":70}},[n("FormItem",{attrs:{label:"任务名称",prop:"name"}},[n("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入",clearable:""},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),n("FormItem",{attrs:{label:"创建时间"}},[n("DatePicker",{staticStyle:{width:"200px"},attrs:{options:t.options,type:"daterange",format:"yyyy-MM-dd",clearable:"",placeholder:"选择起始时间"},on:{"on-change":t.selectDateRange},model:{value:t.selectDate,callback:function(e){t.selectDate=e},expression:"selectDate"}})],1),n("FormItem",{staticClass:"br",staticStyle:{"margin-left":"-35px"}},[n("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:t.handleSearch}},[t._v("搜索")]),n("Button",{on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1),n("Row",{staticClass:"operation"},[n("Button",{attrs:{icon:"md-trash"},on:{click:t.delAll}},[t._v("批量删除")]),n("Button",{attrs:{icon:"md-refresh"},on:{click:t.getDataList}},[t._v("刷新")]),n("Button",{attrs:{type:"dashed"},on:{click:function(e){t.openSearch=!t.openSearch}}},[t._v(t._s(t.openSearch?"关闭搜索":"开启搜索"))]),n("Button",{attrs:{type:"dashed"},on:{click:function(e){t.openTip=!t.openTip}}},[t._v(t._s(t.openTip?"关闭提示":"开启提示"))])],1),n("Row",{directives:[{name:"show",rawName:"v-show",value:t.openTip,expression:"openTip"}]},[n("Alert",{attrs:{"show-icon":""}},[t._v(" 已选择 "),n("span",{staticClass:"select-count"},[t._v(t._s(t.selectList.length))]),t._v(" 项 "),n("a",{staticClass:"select-clear",on:{click:t.clearSelectAll}},[t._v("清空")])])],1),n("Row",[n("Table",{ref:"table",attrs:{loading:t.loading,border:"",columns:t.columns,sortable:"custom",data:t.data},on:{"on-sort-change":t.changeSort,"on-selection-change":t.showSelect}})],1),n("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[n("Page",{attrs:{current:t.searchForm.pageNumber,total:t.total,"page-size":t.searchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}})],1)],1),n("Modal",{attrs:{title:t.modalTitle,"mask-closable":!1,width:500},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[n("Form",{ref:"form",attrs:{model:t.form,"label-width":70,rules:t.formValidate}},[n("FormItem",{attrs:{label:"删除原因",prop:"reason"}},[n("Input",{attrs:{type:"textarea",rows:4},model:{value:t.form.reason,callback:function(e){t.$set(t.form,"reason",e)},expression:"form.reason"}})],1)],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:t.handelCancel}},[t._v("取消")]),n("Button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:t.handelSubmit}},[t._v("提交")])],1)],1)],1)},i=[],o=n("81c1"),a=n("c276"),c=n("4158"),s=n("6c6d"),u={name:"done-manage",components:{historicDetail:c["default"]},data:function(){var t=this;return{showHistory:!1,procInstId:"",openSearch:!0,openTip:!0,loading:!0,selectList:[],searchForm:{name:"",pageNumber:1,pageSize:10,sort:"createTime",order:"desc"},selectDate:null,options:{shortcuts:s["a"]},modalType:0,modalVisible:!1,modalTitle:"",form:{reason:""},formValidate:{},submitLoading:!1,columns:[{type:"selection",width:60,align:"center"},{type:"index",width:60,align:"center"},{title:"任务名称",key:"name",minWidth:160},{title:"所属流程",key:"processName",minWidth:150,render:function(t,e){var n="";return e.row.version&&(n=e.row.processName+" - v."+e.row.version),t("div",[t("span",n)])}},{title:"委托代办人",key:"owner",minWidth:130,align:"center",render:function(t,e){return e.row.owner?t("Tooltip",{props:{placement:"top",content:e.row.ownerUsername}},[t("Tag",{style:{"margin-right":"8px"},props:{type:"border"}},e.row.owner)]):t("span","-")}},{title:"流程发起人",key:"applyer",minWidth:130,align:"center",render:function(t,e){return t("Tooltip",{props:{placement:"top",content:e.row.applyerUsername}},[t("Tag",{style:{"margin-right":"8px"},props:{type:"border"}},e.row.applyer)])}},{title:"优先级",key:"priority",width:100,sortable:!0,align:"center",render:function(e,n){var r="无";return t.dictPriority.forEach((function(t){t.value==n.row.priority&&(r=t.title)})),e("div",r)}},{title:"审批操作",key:"deleteReason",align:"center",minWidth:130},{title:"审批意见",key:"comment",align:"center",minWidth:130},{title:"耗时",key:"duration",align:"center",width:100,sortable:!0,render:function(t,e){return t("div",a["a"].millsToTime(e.row.duration))}},{title:"创建时间",key:"createTime",width:180,sortType:"desc",sortable:!0},{title:"操作",key:"action",align:"center",width:220,fixed:"right",render:function(e,n){return e("div",[e("a",{on:{click:function(){t.detail(n.row)}}},"表单数据"),e("Divider",{props:{type:"vertical"}}),e("a",{on:{click:function(){t.history(n.row)}}},"审批历史"),e("Divider",{props:{type:"vertical"}}),e("a",{on:{click:function(){t.remove(n.row)}}},"删除")])}}],data:[],total:0,deleteId:"",dictPriority:this.$store.state.dict.priority}},methods:{init:function(){this.getDataList()},changeSort:function(t){this.searchForm.sort=t.key,this.searchForm.order=t.order,"normal"==t.order&&(this.searchForm.order=""),this.getDataList()},changePage:function(t){this.searchForm.pageNumber=t,this.getDataList(),this.clearSelectAll()},changePageSize:function(t){this.searchForm.pageSize=t,this.getDataList()},selectDateRange:function(t){t&&(this.searchForm.startDate=t[0],this.searchForm.endDate=t[1])},getDataList:function(){var t=this;this.loading=!0,Object(o["t"])(this.searchForm).then((function(e){t.loading=!1,e.success&&(t.data=e.result.content,t.total=e.result.totalElements,0==t.data.length&&t.searchForm.pageNumber>1&&(t.searchForm.pageNumber-=1,t.getDataList()))}))},handleSearch:function(){this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getDataList()},handleReset:function(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.selectDate=null,this.searchForm.startDate="",this.searchForm.endDate="",this.getDataList()},showSelect:function(t){this.selectList=t},clearSelectAll:function(){this.$refs.table.selectAll(!1)},handelCancel:function(){this.modalVisible=!1},handelSubmit:function(){var t=this;this.$refs.form.validate((function(e){if(e)if(t.submitLoading=!0,0==t.modalType)deleteProcessIns({ids:t.deleteId}).then((function(e){t.submitLoading=!1,e.success&&(t.$Message.success("操作成功"),t.modalVisible=!1,t.getDataList())}));else if(1==t.modalType){var n="";t.selectList.forEach((function(t){n+=t.id+","})),n=n.substring(0,n.length-1),deleteProcessIns({ids:n}).then((function(e){t.submitLoading=!1,e.success&&(t.$Message.success("操作成功"),t.modalVisible=!1,t.clearSelectAll(),t.getDataList())}))}}))},editStatus:function(t,e){var n=this,r="";r=0==t?"暂停挂起":"激活运行",this.$Modal.confirm({title:"确认"+r,content:"您确认要".concat(r,"流程实例").concat(e.name,"?"),loading:!0,onOk:function(){var r={status:t,id:e.id};Object(o["V"])(r).then((function(t){n.$Modal.remove(),t.success&&(n.$Message.success("操作成功"),n.getDataList())}))}})},detail:function(t){var e={id:t.tableId,type:3,backRoute:this.$route.name};this.$router.push({name:t.routeName,query:e})},history:function(t){t.procInstId?(this.procInstId=t.procInstId,this.showHistory=!0):this.$Message.error("流程实例ID不存在")},remove:function(t){var e=this;this.$Modal.confirm({title:"确认删除",content:"您确认要删除 "+t.name+" ?",loading:!0,onOk:function(){Object(o["n"])({ids:t.id}).then((function(t){e.$Modal.remove(),t.success&&(e.clearSelectAll(),e.$Message.success("操作成功"),e.getDataList())}))}})},delAll:function(){var t=this;this.selectList.length<=0?this.$Message.warning("您还未选择要删除的数据"):(this.modalTitle="确认要删除所选的 "+this.selectList.length+" 条数据",this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectList.length+" 条数据?",loading:!0,onOk:function(){var e="";t.selectList.forEach((function(t){e+=t.id+","})),e=e.substring(0,e.length-1),Object(o["n"])({ids:e}).then((function(e){t.$Modal.remove(),e.success&&(t.$Message.success("操作成功"),t.clearSelectAll(),t.getDataList())}))}}))}},mounted:function(){this.init()},watch:{$route:function(t,e){"done-manage"==t.name&&this.getDataList()}}},l=u,d=(n("f697"),n("2877")),h=Object(d["a"])(l,r,i,!1,null,null,null);e["default"]=h.exports},f697:function(t,e,n){"use strict";n("557a")}}]);