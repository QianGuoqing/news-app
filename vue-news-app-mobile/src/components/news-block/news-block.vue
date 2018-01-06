<template>
  <div class="news-block">
    <el-row>
      <el-col :span="24">
        <ul class="news-list list-group">
          <li v-for="news in newsList" :key="news.uniquekey" class="list-group-item">
            <div class="news-list-item">
              <div class="news-item-image"><img :src="news.thumbnail_pic_s" alt=""></div>
              <div class="news-item-description">
                <h3 class="news-item-title">{{ news.title }}</h3>
                <div class="news-item-extra">
                  <span class="news-item-type">{{ news.realtype }}</span>
                  <span class="news-item-timestamp">{{ news.date }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    data () {
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
          console.log(this.newsList)
        }).catch(error => {
          console.log(error)
        })
      })
    }
  }
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
  list-style: none;
}


.news-list-item {
  display: flex;
}

.news-item-image {
  height: 1.4rem;
}

.news-item-image img {
  width: 100px;
  height: 75px;
}

.news-item-description {
  margin-left: 5px;
}

.news-item-title {
  width: 100%;
  white-space: wrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 17px;
  height: 36px;
}

.news-item-type {
  border: 1px solid #f30;
  font-size: 10px;
  color: #f30;
}

.news-item-timestamp {

}
</style>