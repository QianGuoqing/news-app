<template>
  <div id="mobile">
    <header class="header">
      <img src="./logo.png" alt="logo">
      <span>Vue News</span>
    </header>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
#mobile {
  flex: 1;
  background: #f6f6f6;
}

#mobile .header {
  border-bottom: 1px solid #2b85e4;
  padding-left: 10px;
}

#mobile .header img {
  height: 50px;
}

#mobile .header span {
  font-size: 33px;
  vertical-align: top;
  padding-left: 10px;
  color: #2b85e4;
}
</style>