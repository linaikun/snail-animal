(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1175cf62"],{"0a21":function(e,t,a){"use strict";var i=a("5f5c"),o=a.n(i);function s(e,t){for(var a=t.map((function(e){return e.map((function(e){return null==e?{wch:10}:e.toString().charCodeAt(0)>255?{wch:2*e.toString().length}:{wch:e.toString().length}}))})),i=a[0],o=1;o<a.length;o++)for(var s=0;s<a[o].length;s++)i[s]["wch"]<a[o][s]["wch"]&&(i[s]["wch"]=a[o][s]["wch"]);e["!cols"]=i}function l(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))}function r(e){var t,a=[],i=o.a.utils.decode_range(e["!ref"]),s=i.s.r;for(t=i.s.c;t<=i.e.c;++t){var l=e[o.a.utils.encode_cell({c:t,r:s})],r="UNKNOWN "+t;l&&l.t&&(r=o.a.utils.format_cell(l)),a.push(r)}return a}var n=function(e,t){var a=document.getElementById(e),i=o.a.utils.table_to_book(a);o.a.writeFile(i,t)},c=function(e){var t=e.data,a=e.key,i=e.title,r=e.filename,n=e.autoWidth,c=o.a.utils.book_new();t.unshift(i);var u=o.a.utils.json_to_sheet(t,{header:a,skipHeader:!0});if(n){var d=l(a,t);s(u,d)}o.a.utils.book_append_sheet(c,u,r),o.a.writeFile(c,r+".xlsx")},u=function(e){var t=e.key,a=e.data,i=e.title,r=e.filename,n=e.autoWidth,c=o.a.utils.book_new(),u=l(t,a);u.unshift(i);var d=o.a.utils.aoa_to_sheet(u);n&&s(d,u),o.a.utils.book_append_sheet(c,d,r),o.a.writeFile(c,r+".xlsx")},d=function(e,t){var a=o.a.read(e,{type:t}),i=a.SheetNames[0],s=a.Sheets[i],l=r(s),n=o.a.utils.sheet_to_json(s);return{header:l,results:n}};t["a"]={export_table_to_excel:n,export_array_to_excel:u,export_json_to_excel:c,read:d}},"51a6":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}));var i=[{title:"username",key:"username"},{title:"password",key:"password"},{title:"avatar",key:"avatar"},{title:"departmentId",key:"departmentId"},{title:"mobile",key:"mobile"},{title:"email",key:"email"},{title:"sex",key:"sex"},{title:"address",key:"address"},{title:"type",key:"type"},{title:"status",key:"status"},{title:"delFlag",key:"delFlag"},{title:"defaultRole",key:"defaultRole"}],o=[{username:"【记得删除该说明行】唯一用户名不能为空",password:"密码不能为空",avatar:"头像图片链接",departmentId:"部门表主键id",email:"邮箱",mobile:"手机",sex:"性别 0(女) 1(男)",address:"地址数据省市编号 请勿乱填",type:"用户类型 0(普通用户) 1(管理员)",status:"用户状态 0(正常) -1(禁用)",delFlag:"删除标志 0(正常) 1(已删)",defaultRole:"角色 0(不分配默认角色) 1(分配默认注册用户角色)"},{username:"snail",password:"123456",avatar:"https://s1.ax1x.com/2018/05/19/CcdVQP.png",departmentId:"40652338142121984",email:"1012139570@qq.com",sex:1,address:'["510000","510100","510104"]',mobile:"18782059038",type:0,status:0,delFlag:0,defaultRole:1}]},"666f":function(e,t,a){"use strict";a("ac6c")},a3d7:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search"},[a("Card",[a("Row",{staticClass:"operation"},[a("Button",{attrs:{icon:"md-cloud-upload"},on:{click:e.exportSelectData}},[e._v("导出所选数据")]),a("Button",{attrs:{icon:"ios-cloud-upload"},on:{click:e.exportAll}},[e._v("导出全部数据")]),a("Button",{attrs:{icon:"ios-download"},on:{click:function(t){e.importModalVisible=!0}}},[e._v("导入数据")]),a("Button",{attrs:{type:"dashed"},on:{click:function(t){e.openTip=!e.openTip}}},[e._v(e._s(e.openTip?"关闭提示":"开启提示"))])],1),a("Row",{directives:[{name:"show",rawName:"v-show",value:e.openTip,expression:"openTip"}]},[a("Alert",{attrs:{"show-icon":""}},[e._v(" 已选择 "),a("span",{staticClass:"select-count"},[e._v(e._s(e.selectList.length))]),e._v(" 项 "),a("a",{staticClass:"select-clear",on:{click:e.clearSelectAll}},[e._v("清空")])])],1),a("Row",[a("Table",{ref:"table",attrs:{loading:e.loading,border:"",columns:e.columns,data:e.data,sortable:"custom"},on:{"on-sort-change":e.changeSort,"on-selection-change":e.showSelect}})],1),a("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[a("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1),a("Modal",{attrs:{title:e.exportTitle,loading:e.loadingExport},on:{"on-ok":e.exportCustomData},model:{value:e.exportModalVisible,callback:function(t){e.exportModalVisible=t},expression:"exportModalVisible"}},[a("Form",{ref:"exportForm",attrs:{"label-width":100}},[a("FormItem",{attrs:{label:"导出文件名"}},[a("Input",{model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}})],1),a("FormItem",{attrs:{label:"自定义导出列"}},[a("CheckboxGroup",{model:{value:e.chooseColumns,callback:function(t){e.chooseColumns=t},expression:"chooseColumns"}},e._l(e.exportColumns,(function(e,t){return a("Checkbox",{key:t,attrs:{label:e.title,value:e.checked,disabled:e.disabled}})})),1)],1)],1)],1),a("Drawer",{attrs:{title:"导入数据",closable:"",width:"1000"},model:{value:e.importModalVisible,callback:function(t){e.importModalVisible=t},expression:"importModalVisible"}},[a("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[a("Upload",{attrs:{action:"","before-upload":e.beforeUploadImport,accept:".xls, .xlsx"}},[a("Button",{staticStyle:{"margin-right":"10px"},attrs:{loading:e.reading,icon:"ios-cloud-upload-outline"}},[e._v("上传Excel文件")]),e.uploadfile.name?a("span",[e._v("当前选择文件："+e._s(e.uploadfile.name))]):e._e()],1),a("Button",{attrs:{icon:"md-trash"},on:{click:e.clearImportData}},[e._v("清空数据")])],1),a("Alert",{attrs:{type:"warning","show-icon":""}},[e._v("导入前请下载查看导入模版数据文件，确保数据格式正确，不得修改列英文名称。")]),a("Table",{ref:"importTable",attrs:{columns:e.importColumns,border:"",height:e.height,data:e.importTableData}}),a("div",{staticClass:"drawer-footer"},[a("Button",{attrs:{type:"info"},on:{click:e.downloadTemple}},[e._v("下载导入模板")]),a("div",{staticStyle:{position:"absolute",right:"15px",display:"inline-block"}},[a("Button",{on:{click:function(t){e.importModalVisible=!1}}},[e._v("关闭")]),a("Button",{staticStyle:{"margin-left":"5px"},attrs:{loading:e.importLoading,disabled:e.importTableData.length<=0,type:"primary"},on:{click:e.importData}},[e._v(" 确认导入 "),e.importTableData.length>0?a("span",[e._v(e._s(e.importTableData.length)+" 条数据")]):e._e()])],1)],1)],1)],1)},o=[],s=a("51a6"),l=a("0a21"),r={name:"excel",data:function(){var e=this;return{openTip:!0,reading:!1,height:510,loading:!0,importLoading:!1,loadingExport:!0,exportModalVisible:!1,importModalVisible:!1,selectList:[],searchForm:{pageNumber:1,pageSize:10,sort:"createTime",order:"desc"},columns:[{type:"selection",width:60,align:"center"},{type:"index",width:60,align:"center"},{title:"名称",key:"name",sortable:!0},{title:"手机",key:"mobile",sortable:!0},{title:"创建时间",key:"createTime",sortable:!0,sortType:"desc"},{title:"更新时间",key:"updateTime",sortable:!0},{title:"操作",key:"action",align:"center",width:200,render:function(t,a){return t("div",[t("a",{on:{click:function(){e.$Message.info("点击了编辑")}}},"编辑"),t("Divider",{props:{type:"vertical"}}),t("a",{on:{click:function(){e.$Message.info("点击了删除")}}},"删除")])}}],exportColumns:[{title:"名称",key:"name",sortable:!0},{title:"手机",key:"mobile",sortable:!0},{title:"创建时间",key:"createTime",sortable:!0,sortType:"desc"},{title:"更新时间",key:"updateTime",sortable:!0}],chooseColumns:[],filename:"数据",exportTitle:"确认导出",exportType:"",importTableData:[],importColumns:[],uploadfile:{name:""},tempColumns:s["a"],tempData:s["b"],data:[],exportData:[],total:0}},methods:{init:function(){var e=this;this.getDataList();var t=[];this.exportColumns.forEach((function(a){e.getStore("roles").includes("ROLE_ADMIN")||"mobile"!=a.key?a.disabled=!1:(a.title="[无权导出] "+a.title,a.disabled=!0),t.push(a.title)})),this.chooseColumns=t},changePage:function(e){this.searchForm.pageNumber=e,this.getDataList(),this.clearSelectAll()},changePageSize:function(e){this.searchForm.pageSize=e,this.getDataList()},selectDateRange:function(e){e&&(this.searchForm.startDate=e[0],this.searchForm.endDate=e[1])},getDataList:function(){this.loading=!0;this.pageNumber,this.pageSize,this.sortColumn,this.sortType;this.data=[{id:"1",name:"Snail",mobile:"12345678901",createTime:"2018-08-08 00:08:00",updateTime:"2018-08-08 00:08:00"},{id:"2",name:"snail",mobile:"12345678901",createTime:"2018-08-08 00:08:00",updateTime:"2018-08-08 00:08:00"}],this.total=this.data.length,this.loading=!1},handleSearch:function(){this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getDataList()},handleReset:function(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getDataList()},changeSort:function(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"==e.order&&(this.searchForm.order=""),this.getDataList()},exportSelectData:function(){this.selectList.length<=0?this.$Message.warning("您还未选择要导出的数据"):(this.exportType="part",this.exportModalVisible=!0,this.exportTitle="确认导出 "+this.selectList.length+" 条数据")},exportAll:function(){this.exportType="all",this.exportModalVisible=!0,this.exportTitle="确认导出全部 "+this.total+" 条数据",this.exportData=[{id:"1",name:"Snail",mobile:"12345678901",createTime:"2018-08-08 00:08:00",updateTime:"2018-08-08 00:08:00"},{id:"2",name:"snail",mobile:"12345678901",createTime:"2018-08-08 00:08:00",updateTime:"2018-08-08 00:08:00"}]},exportCustomData:function(){var e=this;""==this.filename&&(this.filename="用户数据");var t=[];this.exportColumns.forEach((function(a){e.chooseColumns.forEach((function(e){a.title!=e||a.disabled||t.push(a)}))})),this.exportColumns=t,this.exportModalVisible=!1;var a=[],i=[];this.exportColumns.forEach((function(e){a.push(e.title),i.push(e.key)}));var o={title:a,key:i,data:this.exportData,autoWidth:!0,filename:this.filename};l["a"].export_array_to_excel(o)},beforeUploadImport:function(e){this.uploadfile=e;var t=e.name.split(".").pop().toLocaleLowerCase();return"xlsx"==t||"xls"==t?(this.readFile(e),this.file=e):this.$Notice.warning({title:"文件类型错误",desc:"所选文件‘ "+e.name+" ’不是EXCEL文件，请选择后缀为.xlsx或者.xls的EXCEL文件。"}),!1},readFile:function(e){var t=this;this.reading=!0;var a=new FileReader;a.readAsArrayBuffer(e),a.onerror=function(e){t.reading=!1,t.$Message.error("文件读取出错")},a.onload=function(e){var a=e.target.result,i=l["a"].read(a,"array"),o=i.header,s=i.results,r=o.map((function(e){return{title:e,key:e,minWidth:100,align:"center"}}));t.importTableData=s,t.importColumns=r,t.reading=!1,t.$Message.success("读取数据成功")}},downloadTemple:function(){var e=[],t=[];s["a"].forEach((function(a){e.push(a.title),t.push(a.key)}));var a={title:e,key:t,data:s["b"],autoWidth:!0,filename:"导入数据模版"};l["a"].export_array_to_excel(a)},importData:function(){this.importLoading=!0,this.importLoading=!1,this.importModalVisible=!1,this.$Modal.info({title:"导入结果",content:"导入成功，这是假通知"}),this.getDataList()},showSelect:function(e){this.exportData=e,this.selectList=e},clearSelectAll:function(){this.$refs.table.selectAll(!1)},clearImportData:function(){this.importTableData=[],this.importColumns=[],this.uploadfile={}}},mounted:function(){this.height=Number(document.documentElement.clientHeight-230),this.init()}},n=r,c=(a("666f"),a("2877")),u=Object(c["a"])(n,i,o,!1,null,null,null);t["default"]=u.exports},ac6c:function(e,t,a){}}]);