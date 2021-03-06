<template>
  <div class="search">
    <Card>
      <Row v-show="openSearch" @keydown.enter.native="handleSearch">          <Form ref="searchForm" :model="searchForm" inline :label-width="70">
        <FormItem label="课程名" prop="courseName">
          <Input type="text" v-model="searchForm.courseName" placeholder="请输入课程名" clearable style="width: 200px"/>
        </FormItem>
        <FormItem style="margin-left:-35px;" class="br">
          <Button @click="handleSearch" type="primary" icon="ios-search">搜索</Button>
          <Button @click="handleReset">重置</Button>
        </FormItem>
      </Form>
      </Row>
      <Row class="operation">
        <Button @click="add" type="primary" icon="md-add">添加</Button>
        <Button @click="delAll" icon="md-trash">批量删除</Button>
        <Button @click="getDataList" icon="md-refresh">刷新</Button>
        <Button type="dashed" @click="openSearch=!openSearch">{{openSearch ? "关闭搜索" : "开启搜索"}}</Button>
        <Button type="dashed" @click="openTip=!openTip">{{openTip ? "关闭提示" : "开启提示"}}</Button>
      </Row>
      <Row v-show="openTip">
        <Alert show-icon>
          已选择
          <span class="select-count">{{selectList.length}}</span> 项
          <a class="select-clear" @click="clearSelectAll">清空</a>
        </Alert>
      </Row>
      <Row>
        <Table
            :loading="loading"
            border
            :columns="columns"
            :data="data"
            ref="table"
            sortable="custom"
            @on-sort-change="changeSort"
            @on-selection-change="changeSelect"
        ></Table>
      </Row>
      <Row type="flex" justify="end" class="page">
        <Page
            :current="searchForm.pageNumber"
            :total="total"
            :page-size="searchForm.pageSize"
            @on-change="changePage"
            @on-page-size-change="changePageSize"
            :page-size-opts="[10,20,50]"
            size="small"
            show-total
            show-elevator
            show-sizer
        ></Page>
      </Row>

      <addEdit :data="form" :type="showType" v-model="showDrawer" @on-submit="getDataList" />
    </Card>
  </div>
</template>

<script>
// 根据你的实际请求api.js位置路径修改
import { getCourseListList, deleteCourseList } from "@/api/index";
// 根据你的实际添加编辑组件位置路径修改
import addEdit from "./addEdit.vue";
import { shortcuts } from "@/libs/shortcuts";
export default {
  name: "courseList",
  components: {
    addEdit,
  },
  data() {
    return {
      openSearch: true, // 显示搜索
      openTip: true, // 显示提示
      showType: "0", // 添加或编辑标识
      showDrawer: false, // 显示添加编辑抽屉
      loading: true, // 表单加载状态
      searchForm: { // 搜索框初始化对象
        pageNumber: 1, // 当前页数
        pageSize: 10, // 页面大小
        sort: "createTime", // 默认排序字段
        order: "desc", // 默认排序方式
      },
      selectList: [], // 多选数据
      form: {},
      columns: [
        // 表头
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          type: "index",
          width: 60,
          align: "center"
        },
        {
          title: "课程名",
          key: "courseName",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "难易度",
          key: "facilityValue",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "卡路里消耗",
          key: "calorieCon",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "卡路里消耗提示",
          key: "calorieTip",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "柔韧性",
          key: "flexibility",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "心肺功能",
          key: "heartNum",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "协调性",
          key: "coordination",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "肌肉耐力",
          key: "muscleEndurance",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "肌肉力量",
          key: "muscleStrength",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "课程体系",
          key: "curriculum",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "是否推荐到首页",
          key: "recommend",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "课程描述",
          key: "courseDes",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "注意事项",
          key: "matters",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "自带物品",
          key: "belongings",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "示意图片",
          key: "coursePic",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "详情",
          key: "details",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "操作",
          key: "action",
          align: "center",
          width: 150,
          render: (h, params) => {
            return h("div", [
              h(
                  "a",
                  {
                    on: {
                      click: () => {
                        this.edit(params.row);
                      }
                    }
                  },
                  "编辑"
              ),
              h("Divider", {
                props: {
                  type: "vertical",
                },
              }),
              h(
                  "a",
                  {
                    on: {
                      click: () => {
                        this.remove(params.row);
                      }
                    }
                  },
                  "删除"
              )
            ]);
          }
        }
      ],
      data: [], // 表单数据
      pageNumber: 1, // 当前页数
      pageSize: 10, // 页面大小
      total: 0 // 表单数据总数
    };
  },
  methods: {
    init() {
      this.getDataList();
    },
    changePage(v) {
      this.searchForm.pageNumber = v;
      this.getDataList();
      this.clearSelectAll();
    },
    changePageSize(v) {
      this.searchForm.pageSize = v;
      this.getDataList();
    },
    handleSearch() {
      this.searchForm.pageNumber = 1;
      this.searchForm.pageSize = 10;
      this.getDataList();
    },
    handleReset() {
      this.$refs.searchForm.resetFields();
      this.searchForm.pageNumber = 1;
      this.searchForm.pageSize = 10;
      // 重新加载数据
      this.getDataList();
    },
    changeSort(e) {
      this.searchForm.sort = e.key;
      this.searchForm.order = e.order;
      if (e.order === "normal") {
        this.searchForm.order = "";
      }
      this.getDataList();
    },
    clearSelectAll() {
      this.$refs.table.selectAll(false);
    },
    changeSelect(e) {
      this.selectList = e;
    },
    getDataList() {
      this.loading = true;
      getCourseListList(this.searchForm).then(res => {
        this.loading = false;
        if (res.success) {
          this.data = res.result.content;
          this.total = res.result.totalElements;
          if (this.data.length == 0 && this.searchForm.pageNumber > 1) {
            this.searchForm.pageNumber -= 1;
            this.getDataList();
          }
        }
      });
    },
    add() {
      this.showType = "2";
      this.showDrawer = true;
    },
    edit(v) {
      // 转换null为""
      for (let attr in v) {
        if (v[attr] == null) {
          v[attr] = "";
        }
      }
      let str = JSON.stringify(v);
      let data = JSON.parse(str);
      this.form = data;
      this.showType = "1";
      this.showDrawer = true;
    },
    remove(v) {
      this.$Modal.confirm({
        title: "确认删除",
        // 记得确认修改此处
        content: "您确认要删除 " + v.name + " ?",
        loading: true,
        onOk: () => {
          // 删除
          deleteCourseList({ids: v.id}).then(res => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("操作成功");
              this.clearSelectAll();
              this.getDataList();
            }
          });
        }
      });
    },
    delAll() {
      if (this.selectList.length <= 0) {
        this.$Message.warning("您还未选择要删除的数据");
        return;
      }
      this.$Modal.confirm({
        title: "确认删除",
        content: "您确认要删除所选的 " + this.selectList.length + " 条数据?",
        loading: true,
        onOk: () => {
          let ids = "";
          this.selectList.forEach(function(e) {
            ids += e.id + ",";
          });
          ids = ids.substring(0, ids.length - 1);
          // 批量删除
          deleteCourseList({ids: ids}).then(res => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("操作成功");
              this.clearSelectAll();
              this.getDataList();
            }
          });
        }
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="less">
// 建议引入通用样式 具体路径自行修改 可删除下面样式代码
// @import "../../../styles/table-common.less";
.search {
  .operation {
    margin-bottom: 2vh;
  }
  .select-count {
    font-weight: 600;
    color: #40a9ff;
  }
  .select-clear {
    margin-left: 10px;
  }
  .page {
    margin-top: 2vh;
  }
  .drop-down {
    margin-left: 5px;
  }
}
</style>