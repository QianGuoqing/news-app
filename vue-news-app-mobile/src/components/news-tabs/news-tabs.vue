<template>
  <div class="news-tabs">
    <el-tabs v-model="currentTab" type="card">
      <el-tab-pane label="头条" name="top">
        <news-carousel></news-carousel>
        <news-block news-type="top" :news-count="20"></news-block>
      </el-tab-pane>
      <el-tab-pane label="社会" name="shehui">
        <news-block news-type="shehui" :news-count="20"></news-block>
      </el-tab-pane>
      <el-tab-pane label="国内" name="guonei">
        <news-block news-type="guonei" :news-count="20"></news-block>
      </el-tab-pane>
      <el-tab-pane label="国际" name="guoji">
        <news-block news-type="guoji" :news-count="20"></news-block>
      </el-tab-pane>
      <el-tab-pane label="娱乐" name="yule">
        <news-block news-type="yule" :news-count="20"></news-block>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

  import NewsCarousel from '../news-carousel/news-carousel.vue'
  import NewsBlock from '../news-block/news-block.vue'

  export default {
    components: {
      NewsCarousel,
      NewsBlock
    },
    data() {
      return {
        currentTab: 'top'
      }
    }
  }
</script>

<style scoped>

</style>