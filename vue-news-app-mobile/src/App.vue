<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/header/header'
import Footer from './components/footer/footer'
import NewsCarousel from './components/news-carousel/news-carousel'
import NewsBlock from './components/news-block/news-block'
import NewsTabs from './components/news-tabs/news-tabs'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    NewsCarousel,
    NewsBlock,
    NewsTabs
  }
}
</script>

<style>

</style>
