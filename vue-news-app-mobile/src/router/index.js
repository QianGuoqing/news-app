import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewsTabs from '../components/news-tabs/news-tabs.vue'
import NewsDetails from '../components/news-details/news-details.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'NewsTabs',
      component: NewsTabs
    },
    {
      path: '/details/:uniquekey',
      name: 'NewsDetails',
      component: NewsDetails
    }
  ]
})
