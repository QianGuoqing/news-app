import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewsContainer from '../components/news-container/news-container.vue'
import NewsDetails from '../components/news-details/news-details.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'NewsContainer',
      component: NewsContainer
    },
    {
      path: '/details/:uniquekey',
      name: 'NewsDetails',
      component: NewsDetails
    }
  ]
})
