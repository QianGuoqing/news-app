<template>
  <header class="header">
    <Row>
      <Col span="2" class="space">.</Col>
      <Col span="4">
        <a href="/" class="logo">
          <img src="./logo.png" alt="">
          <span>Vue News</span>
        </a>
      </Col>
      <Col span="16">
        <Menu mode="horizontal" theme="dark" active-name="top">
          <MenuItem name="top">
            <Icon type="social-dropbox"></Icon>
            头条
          </MenuItem>
          <MenuItem name="shehui">
            <Icon type="social-dropbox"></Icon>
            社会
          </MenuItem>
          <MenuItem name="guonei">
            <Icon type="social-dropbox"></Icon>
            国内
          </MenuItem>
          <MenuItem name="guoji">
            <Icon type="social-dropbox"></Icon>
            国际
          </MenuItem>
          <MenuItem name="yule">
            <Icon type="social-dropbox"></Icon>
            娱乐
          </MenuItem>
          <MenuItem name="tiyu">
            <Icon type="social-dropbox"></Icon>
            体育
          </MenuItem>
          <MenuItem name="keji">
            <Icon type="social-dropbox"></Icon>
            科技
          </MenuItem>
          <MenuItem name="shishang">
            <Icon type="social-dropbox"></Icon>
            时尚
          </MenuItem>
        </Menu>
      </Col>
      <Col span="2" class="space">.</Col>
    </Row>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 48px;
  height: 48px;
}

.logo span {
  font-size: 24px;
  padding-left: 5px;
}
</style>