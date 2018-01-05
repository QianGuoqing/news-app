<template>
  <div class="news-carousel">
    <Carousel autoplay loop v-model="currentCarousel">
      <CarouselItem>
        <div><img src="./carousel_1.jpg" alt=""></div>
      </CarouselItem>
      <CarouselItem>
        <div><img src="./carousel_2.jpg" alt=""></div>
      </CarouselItem>
      <CarouselItem>
        <div><img src="./carousel_3.jpg" alt=""></div>
      </CarouselItem>
      <CarouselItem>
        <div><img src="./carousel_4.jpg" alt=""></div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentCarousel: 1
      }
    },
  }
</script>

<style scoped>

</style>