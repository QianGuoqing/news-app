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
          <div class="news-image-block-container">
            <news-image-block 
              width="400px" 
              card-title="国际头条"
              image-type="guoji"
              :image-count="6"
              :image-width="112"></news-image-block>
          </div>
        </div>
        <div class="center-container">
          <Tabs class="news-block-tabs">
            <TabPane label="头条" name="top">
              <news-block news-type="top" :news-count="17"></news-block>
            </TabPane>
            <TabPane label="国际" name="guoji">
              <news-block news-type="guoji" :news-count="17"></news-block>
            </TabPane>
            <TabPane label="国内" name="guonei">
              <news-block news-type="guonei" :news-count="17"></news-block>
            </TabPane>
          </Tabs>
        </div>
        <div class="right-container">

        </div>
      </Col>
      <Col span="2" class="space">.</Col>
    </Row>
    <Row>
      <Col span="2" class="space">.</Col>
      <Col span="20">
        <news-image-block
          width="100%"
          :image-count="7"
          image-type="guonei"
          card-title="国内新闻"
          :image-width="150"></news-image-block>
      </Col>
      <Col span="2" class="space">.</Col>
    </Row>
    <Row>
      <Col span="2" class="space">.</Col>
      <Col span="20">
        <news-image-block
          width="100%"
          :image-count="14"
          image-type="yule"
          card-title="娱乐新闻"
          :image-width="160"></news-image-block>
      </Col>
      <Col span="2" class="space">.</Col>
    </Row>
    <BackTop></BackTop>
  </div>
</template>

<script>

  import NewsCarousel from '../news-carousel/news-carousel.vue'
  import NewsBlock from '../news-block/news-block.vue'
  import NewsImageBlock from '../news-image-block/news-image-block.vue'
  import NewsDetails from '../news-details/news-details.vue'

  export default {
    components: {
      NewsCarousel,
      NewsBlock,
      NewsImageBlock,
      NewsDetails
    }
  }
</script>

<style scoped>
.news-container {
  margin-top: 30px;
}

.news-content-container {
  display: flex;
}

.left-container {
  width: 400px;
}

.center-container {
  margin-left: 20px;
}
</style>