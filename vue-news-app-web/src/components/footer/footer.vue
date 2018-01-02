<template>
  <footer class="footer">
    <Row>
      <Col span="2" class="space">.</Col>
      <Col span="20">
        &copy;&nbsp; {{ getYear }} Vue News. All Rights Reserved.
      </Col>
      <Col span="2" class="space">.</Col>
    </Row>
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
  text-align: center;
  margin-top: 20px;
  color: #2b85e4;
}
</style>