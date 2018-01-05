<template>
  <div class="news-container">
    <Row>
      <Col span="2" class="space">.</Col>
      <Col span="20" class="container">
        <div class="left-container">
          <div class="carousel">
            <!-- 轮播图组件 -->
            <news-carousel></news-carousel>
          </div>
        </div>
      </Col>
      <Col span="2" class="space">.</Col>
    </Row>
  </div>
</template>

<script>

  import NewsCarousel from '../news-carousel/news-carousel.vue'

  export default {
    components: {
      NewsCarousel
    }
  }
</script>

<style scoped>
.news-container {
  margin-top: 30px;
  display: flex;
}

.left-container {
  width: 400px;
}

</style>