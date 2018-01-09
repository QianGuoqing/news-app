<template>
  <div class="news-comments">
    <div class="send-comments-wrapper">
      <el-input
        type="textarea"
        :rows="3"
        placeholder="发表评论.."
        v-model="newComment"
        class="comment-textarea"></el-input>
      <div class="button-group">
        <el-button type="primary" plain @click="publishComment">发表评论</el-button>
        <el-button type="success" plain>收藏文章</el-button>
      </div>
    </div>
    <el-card v-for="(comment, index) in users[0].comments" :key="index + 9876">
      <div slot="header" class="comment-header">
        <span>{{ 'admin' }}</span>
        <span class="comment-datetime">{{ comment.datetime }}</span>
      </div>
      <p>{{ comment.content}}</p>
    </el-card>
    <el-card v-for="(comment, index) in comments" :key="index">
      <div slot="header" class="comment-header">
        <span>{{ comment.UserName }}</span>
        <span class="comment-datetime">{{ comment.datetime }}</span>
      </div>
      <p>{{ comment.Comments}}</p>
    </el-card>
  </div>
</template>

<script>

  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    props: {
      uniquekey: {
        type: String,
        default: ''
      },
    },
    methods: {
      publishComment() {
        this.users[0].comments.unshift({
          content: this.newComment,
          datetime: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
        })
        this.newComment = ''
      }
    },
    data() {
      return {
        comments: '',
        newComment: ''
      }
    },
    created() {
      this.$nextTick(() => {
        axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=${this.uniquekey}`).then(response => {
          response = response.data
          response = response.slice(0, 30)
          this.comments = response
        }).catch(error => {
          console.log(error)
        })
      })
    },
    computed: {
      ...mapState([
        'users'
      ])
    },
  }
</script>

<style scoped>
.comment-header {
  display: flex;
  justify-content: space-between;
}

.comment-datetime {
  color: #409EFF;
}

.send-comments-wrapper {
  margin: 20px auto;
}

.button-group {
  margin-top: 10px;
}
</style>