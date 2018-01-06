<template>
  <div id="app">
    <app-header></app-header>
    <!-- 新闻tab栏 -->
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
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/header/header'
import Footer from './components/footer/footer'
import NewsCarousel from './components/news-carousel/news-carousel'
import NewsBlock from './components/news-block/news-block'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    NewsCarousel,
    NewsBlock
  },
  data() {
    return {
      currentTab: 'top'
    }
  },
}
</script>

<style>

</style>
