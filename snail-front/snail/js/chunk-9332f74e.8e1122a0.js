(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9332f74e"],{a1d3:function(t,e,i){"use strict";i("a2c6")},a2c6:function(t,e,i){},bfb3:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search"},[i("Card",[i("Row",{attrs:{type:"flex",justify:"space-between"}},[t.expand?i("Col",{attrs:{span:"5"}},[i("Row",{staticClass:"operation"},[i("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:t.addDcit}},[t._v("添加字典")]),i("Dropdown",{on:{"on-click":t.handleDropdown}},[i("Button",[t._v(" 更多操作 "),i("Icon",{attrs:{type:"md-arrow-dropdown"}})],1),i("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[i("DropdownItem",{attrs:{name:"editDcit"}},[t._v("编辑字典")]),i("DropdownItem",{attrs:{name:"delDcit"}},[t._v("删除字典")]),i("DropdownItem",{attrs:{name:"refreshDcit"}},[t._v("刷新")])],1)],1)],1),i("Alert",{attrs:{"show-icon":""}},[t._v(" 当前选择： "),i("span",{staticClass:"select-title"},[t._v(t._s(t.editTitle))]),t.editTitle?i("a",{staticClass:"select-clear",on:{click:t.cancelEdit}},[t._v("取消选择")]):t._e()]),i("Input",{attrs:{suffix:"ios-search",placeholder:"输入搜索字典",clearable:""},on:{"on-change":t.search},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),i("div",{staticClass:"tree-bar",style:{maxHeight:t.maxHeight}},[i("Tree",{ref:"tree",attrs:{data:t.treeData},on:{"on-select-change":t.selectTree}}),t.treeLoading?i("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1):t._e(),i("div",{staticClass:"expand"},[i("Icon",{staticClass:"icon",attrs:{type:t.expandIcon,size:"16"},on:{click:t.changeExpand}})],1),i("Col",{attrs:{span:t.span}},[i("Row",{directives:[{name:"show",rawName:"v-show",value:t.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch(e)}}},[i("Form",{ref:"searchForm",attrs:{model:t.searchForm,inline:"","label-width":70}},[i("FormItem",{attrs:{label:"数据名称",prop:"title"}},[i("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入",clearable:""},model:{value:t.searchForm.title,callback:function(e){t.$set(t.searchForm,"title",e)},expression:"searchForm.title"}})],1),i("FormItem",{attrs:{label:"状态",prop:"status"}},[i("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",clearable:""},model:{value:t.searchForm.status,callback:function(e){t.$set(t.searchForm,"status",e)},expression:"searchForm.status"}},[i("Option",{attrs:{value:"0"}},[t._v("正常")]),i("Option",{attrs:{value:"-1"}},[t._v("禁用")])],1)],1),i("FormItem",{staticClass:"br",staticStyle:{"margin-left":"-35px"}},[i("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:t.handleSearch}},[t._v("搜索")]),i("Button",{on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1),i("Row",{staticClass:"operation"},[i("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加数据")]),i("Button",{attrs:{icon:"md-trash"},on:{click:t.delAll}},[t._v("批量删除")]),i("Button",{attrs:{icon:"md-refresh"},on:{click:t.getDataList}},[t._v("刷新数据")]),i("Button",{attrs:{type:"dashed"},on:{click:function(e){t.openSearch=!t.openSearch}}},[t._v(t._s(t.openSearch?"关闭搜索":"开启搜索"))]),i("Button",{attrs:{type:"dashed"},on:{click:function(e){t.openTip=!t.openTip}}},[t._v(t._s(t.openTip?"关闭提示":"开启提示"))])],1),i("Row",{directives:[{name:"show",rawName:"v-show",value:t.openTip,expression:"openTip"}]},[i("Alert",{attrs:{"show-icon":""}},[t._v(" 已选择 "),i("span",{staticClass:"select-count"},[t._v(t._s(t.selectList.length))]),t._v(" 项 "),i("a",{staticClass:"select-clear",on:{click:t.clearSelectAll}},[t._v("清空")])])],1),i("Row",[i("Table",{ref:"table",attrs:{loading:t.loading,border:"",columns:t.columns,data:t.data,sortable:"custom"},on:{"on-sort-change":t.changeSort,"on-selection-change":t.showSelect}})],1),i("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[i("Page",{attrs:{current:t.searchForm.pageNumber,total:t.total,"page-size":t.searchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}})],1)],1)],1)],1),i("Modal",{attrs:{title:t.dictModalTitle,"mask-closable":!1,width:500},model:{value:t.dictModalVisible,callback:function(e){t.dictModalVisible=e},expression:"dictModalVisible"}},[i("Form",{ref:"dictForm",attrs:{model:t.dictForm,"label-width":85,rules:t.dictFormValidate}},[i("FormItem",{attrs:{label:"字典名称",prop:"title"}},[i("Input",{model:{value:t.dictForm.title,callback:function(e){t.$set(t.dictForm,"title",e)},expression:"dictForm.title"}})],1),i("FormItem",{staticClass:"block-tool",attrs:{label:"字典类型",prop:"type"}},[i("Tooltip",{attrs:{placement:"right","max-width":220,transfer:"",content:"建议英文名且需唯一 非开发人员谨慎修改"}},[i("Input",{model:{value:t.dictForm.type,callback:function(e){t.$set(t.dictForm,"type",e)},expression:"dictForm.type"}})],1)],1),i("FormItem",{attrs:{label:"备注",prop:"description"}},[i("Input",{model:{value:t.dictForm.description,callback:function(e){t.$set(t.dictForm,"description",e)},expression:"dictForm.description"}})],1),i("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[i("Tooltip",{attrs:{trigger:"hover",placement:"right",content:"值越小越靠前，支持小数"}},[i("InputNumber",{attrs:{max:1e3,min:0},model:{value:t.dictForm.sortOrder,callback:function(e){t.$set(t.dictForm,"sortOrder",e)},expression:"dictForm.sortOrder"}})],1)],1)],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{type:"text"},on:{click:function(e){t.dictModalVisible=!1}}},[t._v("取消")]),i("Button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:t.handelSubmitDict}},[t._v("提交")])],1)],1),i("Modal",{attrs:{title:t.modalTitle,"mask-closable":!1,width:500},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[i("Form",{ref:"form",attrs:{model:t.form,"label-width":80,rules:t.formValidate}},[i("FormItem",{attrs:{label:"名称",prop:"title"}},[i("Input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),i("FormItem",{attrs:{label:"数据值",prop:"value"}},[i("Input",{model:{value:t.form.value,callback:function(e){t.$set(t.form,"value",e)},expression:"form.value"}})],1),i("FormItem",{attrs:{label:"备注",prop:"description"}},[i("Input",{model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),i("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[i("Tooltip",{attrs:{trigger:"hover",placement:"right",content:"值越小越靠前，支持小数"}},[i("InputNumber",{attrs:{max:1e3,min:0},model:{value:t.form.sortOrder,callback:function(e){t.$set(t.form,"sortOrder",e)},expression:"form.sortOrder"}})],1)],1),i("FormItem",{attrs:{label:"是否启用",prop:"status"}},[i("i-switch",{attrs:{size:"large","true-value":0,"false-value":-1},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[i("span",{attrs:{slot:"open"},slot:"open"},[t._v("启用")]),i("span",{attrs:{slot:"close"},slot:"close"},[t._v("禁用")])])],1)],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{type:"text"},on:{click:function(e){t.modalVisible=!1}}},[t._v("取消")]),i("Button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:t.handelSubmit}},[t._v("提交")])],1)],1)],1)},a=[],r=i("365c"),o={name:"dic-manage",data:function(){var t=this;return{openSearch:!0,openTip:!0,treeLoading:!1,maxHeight:"500px",loading:!1,editTitle:"",searchKey:"",expand:!0,span:18,expandIcon:"ios-arrow-back",selectNode:{},treeData:[],selectList:[],searchForm:{name:"",status:"",pageNumber:1,pageSize:10,sort:"sortOrder",order:"asc"},modalType:0,modalVisible:!1,dictModalVisible:!1,dictModalTitle:"",modalTitle:"",dictForm:{title:"",type:"",description:"",sortOrder:0},form:{title:"",value:"",status:0,description:"",sortOrder:0},dictFormValidate:{title:[{required:!0,message:"不能为空",trigger:"change"}],type:[{required:!0,message:"不能为空",trigger:"change"}],sortOrder:[{required:!0,type:"number",message:"排序值不能为空",trigger:"change"}]},formValidate:{title:[{required:!0,message:"不能为空",trigger:"change"}],value:[{required:!0,message:"不能为空",trigger:"change"}],sortOrder:[{required:!0,type:"number",message:"排序值不能为空",trigger:"change"}]},columns:[{type:"selection",width:60,align:"center"},{type:"index",width:60,align:"center"},{title:"名称",key:"title",minWidth:160,sortable:!0},{title:"数据值",key:"value",minWidth:160,sortable:!0},{title:"备注",key:"description",width:150,sortable:!0},{title:"排序值",key:"sortOrder",width:100,align:"center",sortable:!0,sortType:"asc"},{title:"状态",key:"status",align:"center",width:120,render:function(t,e){return 0==e.row.status?t("div",[t("Badge",{props:{status:"success",text:"启用"}})]):-1==e.row.status?t("div",[t("Badge",{props:{status:"error",text:"禁用"}})]):void 0}},{title:"创建时间",key:"createTime",width:200,sortable:!0},{title:"操作",key:"action",width:150,align:"center",fixed:"right",render:function(e,i){return e("div",[e("a",{on:{click:function(){t.edit(i.row)}}},"编辑"),e("Divider",{props:{type:"vertical"}}),e("a",{on:{click:function(){t.remove(i.row)}}},"删除")])}}],submitLoading:!1,data:[],total:0}},methods:{init:function(){this.getAllDict(),this.getDataList()},getAllDict:function(){var t=this;this.treeLoading=!0,Object(r["Cb"])().then((function(e){t.treeLoading=!1,e.success&&(t.treeData=e.result)}))},search:function(){var t=this;this.searchKey?(this.treeLoading=!0,Object(r["Jc"])({key:this.searchKey}).then((function(e){t.treeLoading=!1,e.success&&(t.treeData=e.result)}))):this.getAllDict()},selectTree:function(t){if(t.length>0){for(var e in this.$refs.dictForm.resetFields(),t[0])null==t[0][e]&&(t[0][e]="");var i=JSON.stringify(t[0]),s=JSON.parse(i);this.selectNode=s,this.dictForm=s,this.editTitle=s.title+"("+s.type+")",this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getDataList()}else this.cancelEdit()},cancelEdit:function(){var t=this.$refs.tree.getSelectedNodes()[0];t&&(t.selected=!1),this.selectNode={},this.editTitle="",this.getDataList()},changeSelect:function(t){this.selectList=t},changeExpand:function(){this.expand=!this.expand,this.expand?(this.expandIcon="ios-arrow-back",this.span=18):(this.expandIcon="ios-arrow-forward",this.span=23)},changePage:function(t){this.searchForm.pageNumber=t,this.getDataList(),this.clearSelectAll()},changePageSize:function(t){this.searchForm.pageSize=t,this.getDataList()},getDataList:function(){var t=this;this.loading=!0,this.selectNode.id?this.searchForm.dictId=this.selectNode.id:delete this.searchForm.dictId,this.searchForm.status||(this.searchForm.status=""),Object(r["Bb"])(this.searchForm).then((function(e){t.loading=!1,e.success&&(t.data=e.result.content,t.total=e.result.totalElements,0==t.data.length&&t.searchForm.pageNumber>1&&(t.searchForm.pageNumber-=1,t.getDataList()))}))},handleSearch:function(){this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getDataList()},handleReset:function(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getDataList()},changeSort:function(t){this.searchForm.sort=t.key,this.searchForm.order=t.order,"normal"==t.order&&(this.searchForm.order=""),this.getDataList()},showSelect:function(t){this.selectList=t},clearSelectAll:function(){this.$refs.table.selectAll(!1)},refreshDict:function(){this.getAllDict(),this.selectNode={},this.editTitle="",this.getDataList()},handleDropdown:function(t){if("editDcit"==t){if(!this.selectNode.id)return void this.$Message.warning("您还未选择要编辑的字典");this.editDcit()}else"delDcit"==t?this.delDcit():"refreshDcit"==t&&this.refreshDict()},addDcit:function(){this.modalType=0,this.dictModalTitle="添加字典",this.$refs.dictForm.resetFields(),this.dictForm.sortOrder=this.treeData.length+1,this.cancelEdit(),this.dictModalVisible=!0},editDcit:function(){this.modalType=1,this.dictModalTitle="编辑字典",this.dictModalVisible=!0},delDcit:function(){var t=this;this.selectNode.id?this.$Modal.confirm({title:"确认删除",loading:!0,content:"您确认要删除 "+this.selectNode.title+" ?",onOk:function(){Object(r["G"])({ids:t.selectNode.id}).then((function(e){t.$Modal.remove(),e.success&&(t.$Message.success("操作成功"),t.refreshDict())}))}}):this.$Message.warning("您还未选择要删除的字典")},add:function(){this.selectNode.id?(this.modalType=0,this.modalTitle="添加字典 "+this.editTitle+" 的数据",this.$refs.form.resetFields(),this.form.sortOrder=this.data.length+1,this.modalVisible=!0):this.$Message.warning("请先选择一个字典类别")},edit:function(t){for(var e in this.modalType=1,this.editTitle?this.modalTitle="编辑字典 "+this.editTitle+" 的数据":this.modalTitle="编辑字典数据",this.$refs.form.resetFields(),t)null==t[e]&&(t[e]="");var i=JSON.stringify(t),s=JSON.parse(i);this.form=s,this.modalVisible=!0},handelSubmitDict:function(){var t=this;this.$refs.dictForm.validate((function(e){e&&(t.submitLoading=!0,0==t.modalType?(delete t.dictForm.id,Object(r["h"])(t.dictForm).then((function(e){t.submitLoading=!1,e.success&&(t.$Message.success("操作成功"),t.getAllDict(),t.dictModalVisible=!1)}))):1==t.modalType&&Object(r["cb"])(t.dictForm).then((function(e){t.submitLoading=!1,e.success&&(t.$Message.success("操作成功"),t.getAllDict(),t.dictModalVisible=!1)})))}))},handelSubmit:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.submitLoading=!0,0==t.modalType?(delete t.form.id,t.form.dictId=t.selectNode.id,Object(r["i"])(t.form).then((function(e){t.submitLoading=!1,e.success&&(t.$Message.success("操作成功"),t.getDataList(),t.modalVisible=!1)}))):1==t.modalType&&Object(r["db"])(t.form).then((function(e){t.submitLoading=!1,e.success&&(t.$Message.success("操作成功"),t.getDataList(),t.modalVisible=!1)})))}))},remove:function(t){var e=this;this.$Modal.confirm({title:"确认删除",content:"您确认要删除 "+t.title+" ?",loading:!0,onOk:function(){Object(r["E"])({ids:t.id}).then((function(t){e.$Modal.remove(),t.success&&(e.clearSelectAll(),e.$Message.success("操作成功"),e.getDataList())}))}})},delAll:function(){var t=this;this.selectList.length<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectList.length+" 条数据?",loading:!0,onOk:function(){var e="";t.selectList.forEach((function(t){e+=t.id+","})),e=e.substring(0,e.length-1),Object(r["E"])({ids:e}).then((function(e){t.$Modal.remove(),e.success&&(t.$Message.success("操作成功"),t.clearSelectAll(),t.getDataList())}))}})}},mounted:function(){var t=document.documentElement.clientHeight;this.maxHeight=Number(t-287)+"px",this.init()}},l=o,c=(i("a1d3"),i("2877")),n=Object(c["a"])(l,s,a,!1,null,null,null);e["default"]=n.exports}}]);