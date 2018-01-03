<template>
  <div id="app">
    <app-header></app-header>
    <!-- 新闻tab栏 -->
    <el-tabs v-model="currentTab" type="card">
      <el-tab-pane label="头条" name="top"></el-tab-pane>
      <el-tab-pane label="社会" name="shehui"></el-tab-pane>
      <el-tab-pane label="国内" name="guonei"></el-tab-pane>
      <el-tab-pane label="国际" name="guoji"></el-tab-pane>
      <el-tab-pane label="娱乐" name="yule"></el-tab-pane>
    </el-tabs>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/header/header'
import Footer from './components/footer/footer'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer
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
