(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-961629ba"],{"08b7":function(e,t,a){},"10b8":function(e,t,a){},"6c6d":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=[{text:"今日",value:function(){var e=new Date,t=new Date;return e.setTime(t.getTime()),[t,e]}},{text:"昨日",value:function(){var e=new Date,t=new Date;return t.setTime(t.getTime()-864e5),e.setTime(e.getTime()-864e5),[t,e]}},{text:"本周",value:function(){var e=new Date,t=e.getDay(),a=e.getDate(),r=e.getMonth(),s=t||7,n=new Date(e.getFullYear(),r,a+1-s),i=new Date(e.getFullYear(),r,a+7-s);return n.setTime(n.getTime()),i.setTime(i.getTime()),[n,i]}},{text:"本月",value:function(){var e=new Date,t=e.getYear();t+=t<2e3?1900:0;var a=e.getMonth(),r=new Date(t,a,1),s=new Date(t,a+1,1),n=(s-r)/864e5,i=new Date(t,a,1),o=new Date(t,a,n);return i.setTime(i.getTime()),o.setTime(o.getTime()),[i,o]}}]},"810a":function(e,t,a){"use strict";a("10b8")},a02e:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Drawer",{staticClass:"search",attrs:{title:e.queryUser+" 邀请新用户记录",width:"800",draggable:""},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("Row",[a("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":60}},[a("FormItem",{attrs:{label:"用户名",prop:"username"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入用户名/UID",clearable:""},model:{value:e.searchForm.username,callback:function(t){e.$set(e.searchForm,"username",t)},expression:"searchForm.username"}})],1),a("FormItem",{attrs:{label:"手机",prop:"mobile"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入手机",clearable:""},model:{value:e.searchForm.mobile,callback:function(t){e.$set(e.searchForm,"mobile",t)},expression:"searchForm.mobile"}})],1),a("FormItem",{staticClass:"br",staticStyle:{"margin-left":"-35px"}},[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:e.getDataList}},[e._v("搜索")]),a("Button",{on:{click:e.handleReset}},[e._v("重置")])],1)],1)],1),a("Row",[a("Table",{ref:"table",attrs:{loading:e.loading,border:"",columns:e.columns,data:e.data,sortable:"custom"}})],1),a("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[a("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":"",transfer:""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1)],1)},s=[],n=a("b562"),i={name:"invite",props:{value:{type:Boolean,default:!1},transferData:{type:Object}},data:function(){var e=this;return{queryUser:"",visible:this.value,loading:!0,searchForm:{pageNumber:1,pageSize:10,sort:"createTime",order:"desc",type:"",status:"",vipStatus:"",username:"",nickname:"",mobile:"",inviteBy:""},columns:[{type:"index",width:60,align:"center"},{title:"用户名/UID",key:"username",minWidth:185,sortable:!0},{title:"昵称",key:"nickname",sortable:!0,minWidth:120},{title:"头像",key:"avatar",width:80,align:"center",render:function(e,t){return e("Avatar",{props:{src:t.row.avatar}})}},{title:"手机",key:"mobile",sortable:!0,width:125},{title:"类型",key:"type",align:"center",width:110,render:function(e,t){var a="",r="";return 1==t.row.type?(a="VIP",r="red"):0==t.row.type&&(a="普通会员",r="blue"),e("div",[e("Tag",{props:{color:r}},a)])},filters:[{label:"普通会员",value:0},{label:"VIP",value:1}],filterMultiple:!1,filterRemote:function(t){var a="";t.length>0&&(a=t[0]),e.searchForm.type=a,e.getDataList()}},{title:"注册时间",key:"createTime",width:170,sortable:!0,sortType:"desc"},{title:"状态",key:"status",align:"center",width:110,render:function(e,t){return 0==t.row.status?e("div",[e("Badge",{props:{status:"success",text:"启用"}})]):-1==t.row.status?e("div",[e("Badge",{props:{status:"error",text:"禁用"}})]):void 0},filters:[{label:"启用",value:0},{label:"禁用",value:-1}],filterMultiple:!1,filterRemote:function(t){var a="";t.length>0&&(a=t[0]),e.searchForm.status=a,e.getUserList()}},{title:"注册平台",key:"platform",align:"center",width:100,render:function(e,t){var a="",r=t.row.platform;return a=0==r?"H5/PC":1==r?"Android":2==r?"IOS":3==r?"微信小程序":4==r?"支付宝小程序":5==r?"QQ小程序":6==r?"字节小程序":7==r?"百度小程序":"未知",e("div",a)}}],data:[],total:0}},methods:{init:function(){},changePage:function(e){this.searchForm.pageNumber=e,this.getDataList(),this.clearSelectAll()},changePageSize:function(e){this.searchForm.pageSize=e,this.getDataList()},changeSort:function(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"==e.order&&(this.searchForm.order="")},handleReset:function(){this.$refs.searchForm.resetFields(),this.searchForm.inviteBy=this.transferData.id,this.getDataList()},getDataList:function(){var e=this;this.loading=!0,Object(n["d"])(this.searchForm).then((function(t){e.loading=!1,t.success&&(e.data=t.result.content,e.total=t.result.totalElements)}))},setCurrentValue:function(e){e!==this.visible&&(this.queryUser=this.transferData.nickname,this.searchForm.inviteBy=this.transferData.username,this.getDataList(),this.visible=e)}},watch:{value:function(e){this.setCurrentValue(e)},visible:function(e){this.$emit("input",e)}},mounted:function(){}},o=i,l=(a("bb57"),a("2877")),c=Object(l["a"])(o,r,s,!1,null,"4ca902c5",null);t["default"]=c.exports},bb57:function(e,t,a){"use strict";a("08b7")},cba2:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search"},[a("Card",[a("Tabs",{attrs:{animated:!1},on:{"on-click":e.changeTab},model:{value:e.tabName,callback:function(t){e.tabName=t},expression:"tabName"}},[a("TabPane",{attrs:{label:"全部平台",name:"all"}}),a("TabPane",{attrs:{label:"PC/H5",name:"0"}}),a("TabPane",{attrs:{label:"Android",name:"1"}}),a("TabPane",{attrs:{label:"IOS",name:"2"}}),a("TabPane",{attrs:{label:"微信小程序",name:"3"}}),a("TabPane",{attrs:{label:"支付宝小程序",name:"4"}}),a("TabPane",{attrs:{label:"QQ小程序",name:"5"}}),a("TabPane",{attrs:{label:"字节小程序",name:"6"}}),a("TabPane",{attrs:{label:"百度小程序",name:"7"}})],1),a("Row",{directives:[{name:"show",rawName:"v-show",value:e.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch(t)}}},[a("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":70}},[a("FormItem",{attrs:{label:"用户名",prop:"username"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入用户名/UID",clearable:""},model:{value:e.searchForm.username,callback:function(t){e.$set(e.searchForm,"username",t)},expression:"searchForm.username"}})],1),a("FormItem",{attrs:{label:"昵称",prop:"nickname"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入昵称",clearable:""},model:{value:e.searchForm.nickname,callback:function(t){e.$set(e.searchForm,"nickname",t)},expression:"searchForm.nickname"}})],1),e.drop?a("span",[a("FormItem",{attrs:{label:"手机",prop:"mobile"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入手机",clearable:""},model:{value:e.searchForm.mobile,callback:function(t){e.$set(e.searchForm,"mobile",t)},expression:"searchForm.mobile"}})],1),a("FormItem",{attrs:{label:"邮箱",prop:"email"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入邮箱",clearable:""},model:{value:e.searchForm.email,callback:function(t){e.$set(e.searchForm,"email",t)},expression:"searchForm.email"}})],1),a("FormItem",{attrs:{label:"邀请码",prop:"inviteCode"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入邀请码",clearable:""},model:{value:e.searchForm.inviteCode,callback:function(t){e.$set(e.searchForm,"inviteCode",t)},expression:"searchForm.inviteCode"}})],1),a("FormItem",{attrs:{label:"注册时间",prop:"createTime"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{options:e.options,type:"daterange",format:"yyyy-MM-dd",clearable:"",placeholder:"选择起始时间"},on:{"on-change":e.selectDateRange},model:{value:e.selectDate,callback:function(t){e.selectDate=t},expression:"selectDate"}})],1)],1):e._e(),a("FormItem",{staticClass:"br",staticStyle:{"margin-left":"-35px"}},[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:e.handleSearch}},[e._v("搜索")]),a("Button",{on:{click:e.handleReset}},[e._v("重置")]),a("a",{staticClass:"drop-down",on:{click:e.dropDown}},[e._v(" "+e._s(e.dropDownContent)+" "),a("Icon",{attrs:{type:e.dropDownIcon}})],1)],1)],1)],1),a("Row",{staticClass:"operation"},[a("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:e.add}},[e._v("添加")]),a("Button",{attrs:{icon:"md-trash"},on:{click:e.delAll}},[e._v("批量删除")]),a("Button",{attrs:{icon:"md-refresh"},on:{click:e.getDataList}},[e._v("刷新")]),a("Button",{attrs:{type:"dashed"},on:{click:function(t){e.openSearch=!e.openSearch}}},[e._v(e._s(e.openSearch?"关闭搜索":"开启搜索"))]),a("Button",{attrs:{type:"dashed"},on:{click:function(t){e.openTip=!e.openTip}}},[e._v(e._s(e.openTip?"关闭提示":"开启提示"))])],1),a("Row",{directives:[{name:"show",rawName:"v-show",value:e.openTip,expression:"openTip"}]},[a("Alert",{attrs:{"show-icon":""}},[e._v(" 已选择 "),a("span",{staticClass:"select-count"},[e._v(e._s(e.selectList.length))]),e._v(" 项 "),a("a",{staticClass:"select-clear",on:{click:e.clearSelectAll}},[e._v("清空")])])],1),a("Row",[a("Table",{ref:"table",attrs:{loading:e.loading,border:"",columns:e.columns,data:e.data,sortable:"custom"},on:{"on-sort-change":e.changeSort,"on-selection-change":e.changeSelect}})],1),a("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[a("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1),a("addEdit",{attrs:{data:e.form,type:e.showType},on:{"on-submit":e.getDataList},model:{value:e.showUser,callback:function(t){e.showUser=t},expression:"showUser"}}),a("invite",{attrs:{transferData:e.transferData},model:{value:e.showInvite,callback:function(t){e.showInvite=t},expression:"showInvite"}})],1)},s=[],n=a("b562"),i=a("a728"),o=a("a02e"),l=a("6c6d"),c={name:"member",components:{addEdit:i["default"],invite:o["default"]},data:function(){var e=this;return{showInvite:!1,transferData:{},showUser:!1,showType:"0",tabName:"all",openSearch:!0,openTip:!0,loading:!0,modalType:0,modalVisible:!1,modalTitle:"",drop:!1,dropDownContent:"展开",dropDownIcon:"ios-arrow-down",searchForm:{type:"",status:"",vipStatus:"",pageNumber:1,pageSize:10,sort:"createTime",order:"desc",startDate:"",endDate:""},options:{shortcuts:l["a"]},form:{},selectDate:null,selectList:[],columns:[{type:"selection",width:60,align:"center",fixed:"left"},{type:"index",width:60,align:"center",fixed:"left"},{title:"用户名/UID",key:"username",width:185,sortable:!0,fixed:"left"},{title:"昵称",key:"nickname",sortable:!0,minWidth:120,fixed:"left",render:function(t,a){return t("a",{on:{click:function(){e.showDetail(a.row)}}},a.row.nickname)}},{title:"头像",key:"avatar",width:80,align:"center",render:function(e,t){return e("Avatar",{props:{src:t.row.avatar}})}},{title:"手机",key:"mobile",sortable:!0,width:125},{title:"地区",key:"address",sortable:!0,tooltip:!0,minWidth:130},{title:"类型",key:"type",align:"center",width:110,render:function(e,t){var a="",r="";return 1==t.row.type?(a="VIP",r="red"):0==t.row.type&&(a="普通会员",r="blue"),e("div",[e("Tag",{props:{color:r}},a)])},filters:[{label:"普通会员",value:0},{label:"VIP",value:1}],filterMultiple:!1,filterRemote:function(t){var a="";t.length>0&&(a=t[0]),e.searchForm.type=a,e.getDataList()}},{title:"VIP状态",key:"vipStatus",width:110,align:"center",render:function(e,t){var a="",r="";return 0==t.row.vipStatus?(a="未开通",r="default"):1==t.row.vipStatus?(a="已开通",r="green"):2==t.row.vipStatus&&(a="已过期",r="orange"),e("div",[e("Tag",{props:{color:r}},a)])},filters:[{label:"未开通",value:0},{label:"已开通",value:1},{label:"已过期",value:2}],filterMultiple:!1,filterRemote:function(t){var a="";t.length>0&&(a=t[0]),e.searchForm.vipStatus=a,e.getDataList()}},{title:"VIP开通时间",key:"vipStartTime",width:170,sortable:!0},{title:"VIP到期时间",key:"vipEndTime",width:170,sortable:!0},{title:"注册时间",key:"createTime",width:170,sortable:!0,sortType:"desc"},{title:"状态",key:"status",align:"center",width:110,render:function(e,t){return 0==t.row.status?e("div",[e("Badge",{props:{status:"success",text:"启用"}})]):-1==t.row.status?e("div",[e("Badge",{props:{status:"error",text:"禁用"}})]):void 0},filters:[{label:"启用",value:0},{label:"禁用",value:-1}],filterMultiple:!1,filterRemote:function(t){var a="";t.length>0&&(a=t[0]),e.searchForm.status=a,e.getUserList()}},{title:"注册平台",key:"platform",align:"center",width:100,render:function(e,t){var a="",r=t.row.platform;return a=0==r?"H5/PC":1==r?"Android":2==r?"IOS":3==r?"微信小程序":4==r?"支付宝小程序":5==r?"QQ小程序":6==r?"字节小程序":7==r?"百度小程序":"未知",e("div",a)}},{title:"邀请人UID",key:"inviteBy",minWidth:185,sortable:!0},{title:"操作",key:"action",align:"center",width:170,fixed:"right",render:function(t,a){var r;return r=0==a.row.status?t("DropdownItem",{props:{name:"disable"}},"禁用"):t("DropdownItem",{props:{name:"enable"}},"启用"),t("div",[t("a",{on:{click:function(){e.edit(a.row)}}},"编辑"),t("Divider",{props:{type:"vertical"}}),t("Dropdown",{props:{transfer:!0},on:{"on-click":function(t){e.changeDropDown(a.row,t)}}},[t("a",["更多操作",t("Icon",{props:{type:"ios-arrow-down"}})]),t("DropdownMenu",{slot:"list"},[t("DropdownItem",{props:{name:"invite"}},"邀请记录"),t("DropdownItem",{props:{name:"vip"}},"VIP开通记录"),t("DropdownItem",{props:{name:"recharge"}},"充值记录"),r,t("DropdownItem",{props:{name:"remove"}},"删除")])])])}}],data:[],total:0}},methods:{init:function(){this.getDataList()},changeTab:function(e){"all"==e&&(e=""),this.searchForm.platform=e,this.getDataList()},changeDropDown:function(e,t){"enable"==t?this.changeStatus(e,!0):"disable"==t?this.changeStatus(e,!1):"remove"==t?this.remove(e):"invite"==t?(this.transferData=e,this.showInvite=!0):this.$Modal.info({title:"待开发，获取PLUS版永久更新~",content:"支付链接: http://xpay.snail.cn/pay?snail"})},changePage:function(e){this.searchForm.pageNumber=e,this.getDataList(),this.clearSelectAll()},changePageSize:function(e){this.searchForm.pageSize=e,this.getDataList()},handleSearch:function(){this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getDataList()},handleReset:function(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.selectDate=null,this.searchForm.startDate="",this.searchForm.endDate="",this.getDataList()},changeSort:function(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"===e.order&&(this.searchForm.order=""),this.getDataList()},clearSelectAll:function(){this.$refs.table.selectAll(!1)},changeSelect:function(e){this.selectList=e},selectDateRange:function(e){e&&(this.searchForm.startDate=e[0],this.searchForm.endDate=e[1])},dropDown:function(){this.drop?(this.dropDownContent="展开",this.dropDownIcon="ios-arrow-down"):(this.dropDownContent="收起",this.dropDownIcon="ios-arrow-up"),this.drop=!this.drop},getDataList:function(){var e=this;this.loading=!0,Object(n["d"])(this.searchForm).then((function(t){e.loading=!1,t.success&&(e.data=t.result.content,e.total=t.result.totalElements,0==e.data.length&&e.searchForm.pageNumber>1&&(e.searchForm.pageNumber-=1,e.getDataList()))}))},showDetail:function(e){for(var t in e)null==e[t]&&(e[t]="");var a=JSON.stringify(e),r=JSON.parse(a);this.form=r,this.showType="0",this.showUser=!0},add:function(){this.showType="2",this.showUser=!0},edit:function(e){for(var t in e)null===e[t]&&(e[t]="");var a=JSON.stringify(e),r=JSON.parse(a);this.form=r,this.showType="1",this.showUser=!0},changeStatus:function(e,t){var a=this,r="启用";t||(r="禁用"),this.$Modal.confirm({title:"确认"+r,content:"您确认要"+r+"用户 "+e.nickname+" ?",loading:!0,onOk:function(){Object(n["e"])({userId:e.id,enable:t}).then((function(e){a.$Modal.remove(),e.success&&(a.$Message.success("操作成功"),a.getDataList())}))}})},remove:function(e){var t=this;this.$Modal.confirm({title:"确认删除",content:"您确认要删除用户 "+e.nickname+" ?",loading:!0,onOk:function(){Object(n["b"])({ids:e.id}).then((function(e){t.$Modal.remove(),e.success&&(t.$Message.success("操作成功"),t.getDataList())}))}})},delAll:function(){var e=this;this.selectList.length<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectList.length+" 条数据?",loading:!0,onOk:function(){var t="";e.selectList.forEach((function(e){t+=e.id+","})),t=t.substring(0,t.length-1),Object(n["b"])({ids:t}).then((function(t){e.$Modal.remove(),t.success&&(e.$Message.success("操作成功"),e.clearSelectAll(),e.getDataList())}))}})}},mounted:function(){this.init()}},h=c,u=(a("810a"),a("2877")),m=Object(u["a"])(h,r,s,!1,null,null,null);t["default"]=m.exports}}]);