<template>
  <div class="image-block">
    <Card :style="{width: width}">
      <p slot="title">{{ cardTitle }}</p>
      <ul class="news-list">
        <li v-for="news in newsList" :key="news.uniquekey">
          <!-- <div class="image-item-block">
            <div class="custom-image">
              <img :style="{width: imageWidth + 'px'}" :src="news.thumbnail_pic_s" alt="">
            </div>
            <div class="custom-description">
              <h3 class="news-title">{{ news.title }}</h3>
              <p class="author-name">{{ news.author_name }}</p>
            </div>
          </div> -->
          <router-link 
            :to="{ name: 'NewsDetails', params: { uniquekey: news.uniquekey}}"
            target="_blank">
            <div class="image-item-block">
              <div class="custom-image">
                <img :style="{width: imageWidth + 'px'}" :src="news.thumbnail_pic_s" alt="">
              </div>
              <div class="custom-description">
                <h3 class="news-title">{{ news.title }}</h3>
                <p class="author-name">{{ news.author_name }}</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </Card>
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
      imageWidth: {
        type: Number,
        default: 0
      },
      imageCount: {
        type: Number,
        default: 0
      },
      imageType: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: 0
      },
      cardTitle: {
        type: String,
        default: ''
      }
    },
    created() {
      this.$nextTick(() => {
        axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.imageType}&count=${this.imageCount}`).then(response => {
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
.news-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.news-title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 110px;
}

.author-name {
  padding: 2px;
  font-size: 12px;
  color: #aaa;
}
</style>