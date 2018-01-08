<template>
  <div class="news-details">
    <Row>
      <Col span="2" class="space">.</Col>
      <Col span="14">
        <div class="news-detail-content">
          <div v-html="newsDetail.pagecontent"></div>
        </div>
        <div class="news-comments-wrapper">
          <news-comments :uniquekey="uniquekey"></news-comments>
        </div>
      </Col>
      <Col span="6">
        <div class="news-image-content">
          <news-image-block
            card-title="新闻图片"
            :image-count="30"
            image-type="top"
            width="100%"
            :image-width="150"></news-image-block>
        </div>
      </Col>
      <Col span="2" class="space">.</Col>
    </Row>
    <BackTop></BackTop>
  </div>
</template>

<script>

  import NewsImageBlock from '../news-image-block/news-image-block.vue'
  import NewsComments from '../news-comments/news-comments.vue'
  import axios from 'axios'

  export default {
    data () {
      return {
        newsDetail: ''
      }
    },
    components: {
      NewsImageBlock,
      NewsComments
    },
    computed: {
      uniquekey() {
        return this.$route.params.uniquekey 
      }
    },
    created() {
      this.$nextTick(() => {
        axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${this.uniquekey}`).then(response => {
          response = response.data
          this.newsDetail = response
        }).catch(error => {
          console.log(error)
        })
      })
    }
  }
</script>

<style scoped>
.news-detail-content {
  padding-top: 30px;
}
</style>