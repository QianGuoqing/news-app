<template>
  <footer class="footer">
    &copy;&nbsp; {{ getYear }} Vue News. All Rights Reserved.
  </footer>
</template>

<script>
  export default {
    computed: {
      getYear() {
        return new Date().getFullYear() 
      }
    },
  }
</script>

<style scoped>
.footer {
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
  color: #2b85e4;
}
</style>