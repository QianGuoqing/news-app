<template>
  <div class="news-block">
    <Card>
      <div v-if="this.newsList.length === 0">
        暂无数据
      </div>
      <ul class="news-block-list" v-else>
        <li v-for="item in newsList" :key="item.uniquekey" class="news-block-list-item">
          <a href="" target="_blank">{{ item.title }}</a>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    data() {
      return {
        newsList: ''
      }
    },
    props: {
      newsType: {
        type: String,
        default: ''
      },
      newsCount: {
        type: Number,
        default: 0
      }
    },
    created() {
      this.$nextTick(() => {
        axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.newsType}&count=${this.newsCount}`).then(response => {
          response = response.data
          this.newsList = response
        }).catch(error => {
          console.log(error)
        })
      })
    }
  }
</script>

<style scoped>
.news-block-list-item a {
  display: inline-block;
  line-height: 2.5;
}
</style>