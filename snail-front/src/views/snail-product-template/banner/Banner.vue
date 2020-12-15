<style lang="less">
</style>
<template>
  <div>
    <Row>
      <Col>
        <Card>     
          <Tabs value="1">
            <TabPane label="慕课类" name="1">

            </TabPane>
            <TabPane label="电商类1" name="2">

            </TabPane>
            <TabPane label="电商类2" name="3">

            </TabPane>
          </Tabs>
              
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import BannerMooc from "./mooc/BannerMooc.vue";
import BannerShop from "./shop/BannerShop.vue";
export default {
  name: "banner",
  components: {
    BannerMooc,
    BannerShop
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    init() {}
  },
  mounted() {
    this.init();
  }
};
</script>