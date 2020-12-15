<template>
  <div>
    <!-- Drawer抽屉 -->
    <Drawer :title="title" v-model="visible" width="500" draggable :mask-closable="type=='0'">
      <div :style="{maxHeight: maxHeight}" class="drawer-content">
        <Form ref="form" :model="form" :rules="formValidate"  label-position="top">
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="公司地址" prop="company_adress" >
                <Input v-model="form.company_adress" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="公司logo" prop="company_logo" >
                <Input v-model="form.company_logo" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="公司名称" prop="company_name" >
                <Input v-model="form.company_name" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="公司电话" prop="company_tel" >
                <Input v-model="form.company_tel" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="公司地址坐标X" prop="location_x" >
                <Input v-model="form.location_x" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="公司地址坐标Y" prop="location_y" >
                <Input v-model="form.location_y" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="微信名称" prop="wx_name" >
                <Input v-model="form.wx_name" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="微信ID" prop="wxunid" >
                <InputNumber v-model="form.wxunid" style="width:100%"></InputNumber>
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
import { addBasicsetup, editBasicsetup } from "@/api/index";
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
      visible: this.value,
      title: "",
      submitLoading: false,
      maxHeight: 510,
      form: { // 添加或编辑表单对象初始化数据
        company_adress: "",
        company_logo: "",
        company_name: "",
        company_tel: "",
        location_x: "",
        location_y: "",
        wx_name: "",
        wxunid: 0,
      },
      // 表单验证规则
      formValidate: {
      }
    };
  },
  methods: {
    init() {
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.type == "1") {
            // 编辑
            this.submitLoading = true;
            editBasicsetup(this.form).then(res => {
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
            addBasicsetup(this.form).then(res => {
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