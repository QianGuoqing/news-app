<template>
  <div class="news-comments">
    <h3 style="color: #2d8cf0;">发表评论</h3>
    <div class="send-comments-wrapper">
      <Input type="textarea" v-model="newComment" :autosize="{minRows: 5,maxRows: 10}"></Input>
      <div class="button-group">
        <Button type="primary" @click="publishComments">发表评论</Button>
        <Button type="success">收藏新闻</Button>
      </div>
    </div>
    <Card v-for="(comment, index) in users[0].comments" :key="index + 9876" class="comment-list-card">
      <p slot="title">{{ 'admin' }}</p>
      <span slot="extra" class="comment-datetime">{{ comment.datetime }}</span>
      <p>{{ comment }}</p>
    </Card>
    <Card v-for="(comment, index) in comments" :key="index" class="comment-list-card">
      <p slot="title">{{ comment.UserName }}</p>
      <span slot="extra" class="comment-datetime">{{ comment.datetime }}</span>
      <p>{{ comment.Comments }}</p>
    </Card>
  </div>
</template>

<script>

  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    methods: {
      publishComments() {
        this.users[0].comments.unshift(this.newComment)
        this.newComment = ''
      }
    },
    props: {
      uniquekey: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        comments: '',
        newComment: ''
      }
    },
    created() {
      axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=${this.uniquekey}`).then(response => {
          console.log(this.uniquekey)
          response = response.data
          response = response.slice(0, 30)
          this.comments = response
          console.log(this.users)
        }).catch(error => {
          console.log(error)
      })
    },
    computed: {
      ...mapState([
        'loginStatus',
        'users'
      ])
    },
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

.send-comments-wrapper {
  margin: 20px 0;
}

.button-group {
  margin-top: 10px;
}
</style>