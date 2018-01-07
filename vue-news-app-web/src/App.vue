<template>
  <div id="app">
    <app-header></app-header>
    <!-- <news-container></news-container> -->
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/header/header'
import Footer from './components/footer/footer'
import NewsContainer from './components/news-container/news-container'
export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    NewsContainer
  }
}
</script>

<style>
.space {
  color: transparent;
}
</style>
