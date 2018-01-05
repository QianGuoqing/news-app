<template>
  <div class="news-container">
    <Row>
      <Col span="2" class="space">.</Col>
      <Col span="20" class="news-content-container">
        <div class="left-container">
          <div class="carousel">
            <!-- 轮播图组件 -->
            <news-carousel></news-carousel>
          </div>
        </div>
        <div class="center-container">
          <Tabs class="news-block-tabs">
            <TabPane label="头条" name="top">
              <news-block news-type="top" :news-count="20"></news-block>
            </TabPane>
            <TabPane label="国际" name="guoji">
              <news-block news-type="guoji" :news-count="20"></news-block>
            </TabPane>
            <TabPane label="国内" name="guonei">
              <news-block news-type="guonei" :news-count="20"></news-block>
            </TabPane>
          </Tabs>
        </div>
        <div class="right-container">

        </div>
      </Col>
      <Col span="2" class="space">.</Col>
    </Row>
  </div>
</template>

<script>

  import NewsCarousel from '../news-carousel/news-carousel.vue'
  import NewsBlock from '../news-block/news-block.vue'

  export default {
    components: {
      NewsCarousel,
      NewsBlock
    }
  }
</script>

<style scoped>
.news-container {
  margin-top: 30px;
  display: flex;
}

.news-content-container {
  display: flex;
}

.left-container {
  width: 400px;
}

.news-block-tabs {
  padding-left: 20px;
}
</style>