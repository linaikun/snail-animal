<template>
  <div>
    <!-- Drawer抽屉 -->
    <Drawer :title="title" v-model="visible" width="500" draggable :mask-closable="type=='0'">
      <div :style="{maxHeight: maxHeight}" class="drawer-content">
        <Form ref="form" :model="form" :rules="formValidate"  label-position="top">
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="教练" prop="class_coach" >
                <Select v-model="form.class_coach" clearable transfer>
                  <Option
                      v-for="item in coachList"
                      :value="item.name"
                      :key="item.id"
                  >
                    <span style="margin-right: 10px">{{ item.name }}</span>
                  </Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="课程" prop="class_curriculum" >
                <Select v-model="form.class_curriculum" clearable transfer>
                  <Option
                      v-for="item in courseList"
                      :value="item.courseName"
                      :key="item.id"
                  >
                    <span style="margin-right: 10px">{{ item.courseName }}</span>
                  </Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="人数" prop="people_num" >
                <InputNumber v-model="form.people_num" style="width:100%"></InputNumber>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="课程价格" prop="class_price" >
                <InputNumber v-model="form.class_price" style="width:100%"></InputNumber>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="开始时间" prop="start_time" >
                <DatePicker type="datetime" v-model="form.start_time" clearable transfer style="width: 100%"></DatePicker>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="结束时间" prop="end_time" >
                <DatePicker type="datetime" v-model="form.end_time" clearable transfer style="width: 100%"></DatePicker>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="预约开始时间" prop="start_order_time" >
                <DatePicker type="datetime" v-model="form.start_order_time" clearable transfer style="width: 100%"></DatePicker>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="预约结束时间" prop="end_order_time" >
                <DatePicker type="datetime" v-model="form.end_order_time" clearable transfer style="width: 100%"></DatePicker>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
      <div class="drawer-footer br" v-show="type!='0'">
        <Button type="primary" :loading="submitLoading" @click="submit">提交</Button>
        <Button @click="visible = false">取消</Button>
      </div>
    </Drawer>
  </div>
</template>

<script>
// 根据你的实际请求api.js位置路径修改
import {addClasscard, editClasscard, getAllCoach, getAllCourseList} from "@/api/index";
export default {
  name: "addEdit",
  components: {
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object
    },
    type: {
      type: String,
      default: "0"
    }
  },
  data() {
    return {
      coachList: [],
      courseList: [],

      visible: this.value,
      title: "",
      submitLoading: false,
      maxHeight: 510,
      form: { // 添加或编辑表单对象初始化数据
        class_coach: "",
        class_curriculum: "",
        people_num: 0,
        class_price: 0,
        start_time: "",
        end_time: "",
        start_order_time: "",
        end_order_time: "",
      },
      // 表单验证规则
      formValidate: {
      }
    };
  },
  methods: {
    init() {
      this.getAllCoach();
      this.getAllCourseList();
    },
    getAllCoach(){
      getAllCoach().then((res) => {
        if (res.success) {
          this.coachList = res.result;
        }
      });
    },
    getAllCourseList(){
      getAllCourseList().then((res) => {
        if (res.success) {
          this.courseList = res.result;
        }
      });
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (typeof this.form.start_time == "object") {
            this.form.start_time = this.format(this.form.start_time, "yyyy-MM-dd HH:mm:ss");
          }
          if (typeof this.form.end_time == "object") {
            this.form.end_time = this.format(this.form.end_time, "yyyy-MM-dd HH:mm:ss");
          }
          if (typeof this.form.start_order_time == "object") {
            this.form.start_order_time = this.format(this.form.start_order_time, "yyyy-MM-dd HH:mm:ss");
          }
          if (typeof this.form.end_order_time == "object") {
            this.form.end_order_time = this.format(this.form.end_order_time, "yyyy-MM-dd HH:mm:ss");
          }
          if (this.type == "1") {
            // 编辑
            this.submitLoading = true;
            editClasscard(this.form).then(res => {
              this.submitLoading = false;
              if (res.success) {
                this.$Message.success("操作成功");
                this.$emit("on-submit", true);
                this.visible = false;
              }
            });
          } else {
            // 添加
            this.submitLoading = true;
            addClasscard(this.form).then(res => {
              this.submitLoading = false;
              if (res.success) {
                this.$Message.success("操作成功");
                this.$emit("on-submit", true);
                this.visible = false;
              }
            });
          }
        }
      });
    },
    setCurrentValue(value) {
      if (value === this.visible) {
        return;
      }
      if (this.type == "1") {
        this.title = "编辑";
        this.maxHeight =
            Number(document.documentElement.clientHeight - 121) + "px";
      } else if (this.type == "2") {
        this.title = "添加";
        this.maxHeight =
            Number(document.documentElement.clientHeight - 121) + "px";
      } else {
        this.title = "详细信息";
        this.maxHeight = "100%";
      }
      // 清空数据
      this.$refs.form.resetFields();
      if (this.type == "0" || this.type == "1") {
        // 回显数据处理
        this.form = this.data;
      } else {
        // 添加
        delete this.form.id;
      }
      this.visible = value;
    }
  },
  watch: {
    value(val) {
      this.setCurrentValue(val);
    },
    visible(value) {
      this.$emit("input", value);
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
// 建议引入通用样式 具体路径自行修改 可删除下面样式代码
// @import "../../../styles/drawer-common.less";
.drawer-footer {
  z-index: 10;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: left;
  background: #fff;
}

.drawer-content {
  overflow: auto;
}

.drawer-content::-webkit-scrollbar {
  display: none;
}

.drawer-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
}

.drawer-title {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  display: block;
  margin-bottom: 16px;
}
</style>