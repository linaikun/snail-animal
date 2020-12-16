<template>
  <div>
    <!-- Drawer抽屉 -->
    <Drawer :title="title" v-model="visible" width="500" draggable :mask-closable="type=='0'">
      <div :style="{maxHeight: maxHeight}" class="drawer-content">
        <Form ref="form" :model="form" :rules="formValidate"  label-position="top">
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="昵称" prop="name" >
                <Input v-model="form.name" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="简短描述" prop="brief_des" >
                <Input v-model="form.brief_des" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="专业资质" prop="professional_qua" >
                <Input v-model="form.professional_qua" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="说说" prop="message" >
                <Input v-model="form.message" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="头像" prop="face_pic" >
                <upload-pic-input v-model="form.face_pic"></upload-pic-input>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="私教" prop="personal_train" >
                <RadioGroup v-model="form.personal_train">
                  <Radio label="是">是</Radio>
                  <Radio label="否">否</Radio>
                </RadioGroup>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="私教微信" prop="personal_wx" >
                <Input v-model="form.personal_wx" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="私教电话" prop="personal_tel" >
                <Input v-model="form.personal_tel" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="私教价格" prop="personal_price" >
                <InputNumber v-model="form.personal_price" style="width:100%"></InputNumber>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="私教起售节数" prop="personal_num" >
                <InputNumber v-model="form.personal_num" style="width:100%"></InputNumber>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="私教擅长项目" prop="personal_at" >
                <Input v-model="form.personal_at" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="详细介绍" prop="detailed_intro" >
                <Input v-model="form.detailed_intro" type="textarea" :rows="4" maxlength="250" show-word-limit/>
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
import { addCoach, editCoach } from "@/api/index";
import uploadPicInput from "@/views/my-components/snail/upload-pic-input";
export default {
  name: "addEdit",
  components: {
    uploadPicInput,
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
        name: "",
        brief_des: "",
        professional_qua: "",
        message: "",
        face_pic: "",
        personal_train: "",
        personal_wx: "",
        personal_tel: "",
        personal_price: 0,
        personal_num: 0,
        personal_at: "",
        detailed_intro: "",
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
            editCoach(this.form).then(res => {
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
            addCoach(this.form).then(res => {
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