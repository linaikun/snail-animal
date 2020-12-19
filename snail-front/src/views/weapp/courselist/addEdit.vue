<template>
  <div>
    <!-- Drawer抽屉 -->
    <Drawer :title="title" v-model="visible" width="500" draggable :mask-closable="type=='0'">
      <div :style="{maxHeight: maxHeight}" class="drawer-content">
        <Form ref="form" :model="form" :rules="formValidate"  label-position="top">
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="课程名" prop="courseName" >
                <Input v-model="form.courseName" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="难易度" prop="facilityValue" >
                <Select v-model="form.facilityValue" clearable transfer>
                  <Option value="简单">简单</Option>
                  <Option value="一般">一般</Option>
                  <Option value="苦难">困难</Option>
                  <Option value="极难">极难</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="卡路里消耗" prop="calorieCon" >
                <InputNumber v-model="form.calorieCon" style="width:100%"></InputNumber>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="卡路里消耗提示" prop="calorieTip" >
                <Input v-model="form.calorieTip" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="柔韧性" prop="flexibility" >
                <Select v-model="form.flexibility" clearable transfer>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>

                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="心肺功能" prop="heartNum" >
                <Select v-model="form.heartNum" clearable transfer>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="协调性" prop="coordination" >
                <Select v-model="form.coordination" clearable transfer>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="肌肉耐力" prop="muscleEndurance" >
                <Select v-model="form.muscleEndurance" clearable transfer>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="肌肉力量" prop="muscleStrength" >
                <Select v-model="form.muscleStrength" clearable transfer>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="课程体系" prop="curriculum" >
                <Select v-model="form.curriculum" clearable transfer>
                  <Option
                      v-for="item in courseList"
                      :value="item.id"
                      :key="item.id"
                  >
                    <span style="margin-right: 10px">{{ item.cur_name }}</span>
                  </Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="是否推荐到首页" prop="recommend" >
                <RadioGroup v-model="form.recommend">
                  <Radio label="0">否</Radio>
                  <Radio label="1">是</Radio>
                </RadioGroup>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="课程描述" prop="courseDes" >
                <Input v-model="form.courseDes" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="注意事项" prop="matters" >
                <Input v-model="form.matters" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="自带物品" prop="belongings" >
                <Input v-model="form.belongings" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="示意图片" prop="coursePic" >
                <Input v-model="form.coursePic" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="详情" prop="details" >
                <Input v-model="form.details" type="textarea" :rows="4" maxlength="250" show-word-limit/>
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
import {addCourseList, editCourseList, getAllCurriculum} from "@/api/index";
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
      courseList: [],
      visible: this.value,
      title: "",
      submitLoading: false,
      maxHeight: 510,
      form: { // 添加或编辑表单对象初始化数据
        courseName: "",
        facilityValue: "",
        calorieCon: 0,
        calorieTip: "",
        flexibility: "",
        heartNum: "",
        coordination: "",
        muscleEndurance: "",
        muscleStrength: "",
        curriculum: "",
        recommend: "",
        courseDes: "",
        matters: "",
        belongings: "",
        coursePic: "",
        details: "",
      },
      // 表单验证规则
      formValidate: {
      }
    };
  },
  methods: {
    init() {
      this.getCourseList();
    },
    getCourseList(){
      getAllCurriculum().then((res) => {
        if (res.success) {
          this.courseList = res.result;
        }
      });
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.type == "1") {
            // 编辑
            this.submitLoading = true;
            editCourseList(this.form).then(res => {
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
            addCourseList(this.form).then(res => {
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