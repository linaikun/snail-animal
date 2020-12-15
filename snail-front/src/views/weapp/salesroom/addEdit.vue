<template>
  <div>
    <!-- Drawer抽屉 -->
    <Drawer :title="title" v-model="visible" width="500" draggable :mask-closable="type=='0'">
      <div :style="{maxHeight: maxHeight}" class="drawer-content">
        <Form ref="form" :model="form" :rules="formValidate"  label-position="top">
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="门店名" prop="room_name" >
                <Input v-model="form.room_name" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="门店地址" prop="room_adress" >
                <Input v-model="form.room_adress" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="地铁站名" prop="subway_name" >
                <Input v-model="form.subway_name" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="地铁步行距离" prop="subway_dis" >
                <Input v-model="form.subway_dis" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="地铁乘坐提示" prop="subway_tip" >
                <Input v-model="form.subway_tip" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="公交站名" prop="bus_name" >
                <Input v-model="form.bus_name" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="公交步行距离" prop="bus_dis" >
                <Input v-model="form.bus_dis" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="公交乘坐提示" prop="bus_tip" >
                <Input v-model="form.bus_tip" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="自驾目的地" prop="drive_pur" >
                <Input v-model="form.drive_pur" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="自驾提示" prop="drive_tip" >
                <Input v-model="form.drive_tip" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="推荐到达方式" prop="preferred_Methods" >
                <Select v-model="form.preferred_Methods" clearable transfer>
                  <Option value="0">请自行编辑下拉菜单</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="展示图片" prop="show_picture" >
                <uploadThumb v-model="form.show_picture" multiple></uploadThumb>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="地理位置X" prop="location_x" >
                <Input v-model="form.location_x" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="地理位置Y" prop="location_y" >
                <Input v-model="form.location_y" clearable/>
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
import { addSalesroom, editSalesroom } from "@/api/index";
import uploadThumb from "@/views/my-components/snail/upload-pic-thumb";
export default {
  name: "addEdit",
  components: {
    uploadThumb,
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
        room_name: "",
        room_adress: "",
        subway_name: "",
        subway_dis: "",
        subway_tip: "",
        bus_name: "",
        bus_dis: "",
        bus_tip: "",
        drive_pur: "",
        drive_tip: "",
        preferred_Methods: "",
        show_picture: [],
        location_x: "",
        location_y: "",
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
            editSalesroom(this.form).then(res => {
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
            addSalesroom(this.form).then(res => {
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