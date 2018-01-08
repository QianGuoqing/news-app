<template>
  <div class="news-details">
    <div class="back-button">
      <el-button type="success" plain @click="backToHome"> < </el-button>
    </div>
    <div v-html="newsList.pagecontent"></div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    computed: {
      uniquekey() {
        return this.$route.params.uniquekey 
      }
    },
    data() {
      return {
        newsList: ''
      }
    },
    methods: {
      backToHome() {
        this.$router.push('/')
      }
    },
    created() {
      this.$nextTick(() => {
        axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${this.uniquekey}`).then(response => {
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

</style>