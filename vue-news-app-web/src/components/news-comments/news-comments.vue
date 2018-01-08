<template>
  <div class="news-comments">
    <Card v-for="(comment, index) in comments" :key="index" class="comment-list-card">
      <p slot="title">{{ comment.UserName }}</p>
      <span slot="extra" class="comment-datetime">{{ comment.datetime }}</span>
      <p>{{ comment.Comments }}</p>
    </Card>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    props: {
      uniquekey: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        comments: ''
      }
    },
    created() {
      axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=${this.uniquekey}`).then(response => {
          console.log(this.uniquekey)
          response = response.data
          response = response.slice(0, 30)
          this.comments = response
        }).catch(error => {
          console.log(error)
      })
    }
  }
</script>

<style scoped>
.news-comments {
  margin-top: 20px;
}
.comment-list-card {
  margin-bottom: 10px;
}
.comment-datetime {
  color: #2d8cf0;
}
</style>