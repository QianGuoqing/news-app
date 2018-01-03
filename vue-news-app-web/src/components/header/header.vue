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
        <Menu mode="horizontal" theme="light" active-name="top">
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
          <MenuItem name="loginout" v-if="toggleLoginRegisterAndUserCenter">
            <span @click="showLoginRegister">
              <Icon type="social-dropbox"></Icon>
              登陆/注册
            </span>
          </MenuItem>
          <MenuItem name="bg" v-else>
            <Button type="primary">{{ currentUsername }}</Button>
            <Button type="dashed">个人中心</Button>
            <Button @click="exitLogin">退出</Button>
          </MenuItem>
        </Menu>
      </Col>
      <Col span="2" class="space">.</Col>
    </Row>
    <Modal
      v-model="registerLoginModel"
      title="用户中心"
      @on-ok="ok"
      @on-cancel="cancel">
        <Tabs value="login-register-tab">
          <TabPane label="登陆" name="login">
            <Form :model="loginFormItem">
              <FormItem label="账户：">
                <Input v-model="loginFormItem.username" placeholder="输入账号"></Input>
              </FormItem>
              <FormItem label="密码：">
                <Input type="password" v-model="loginFormItem.password" placeholder="输入密码"></Input>
              </FormItem>
              <Button type="primary" @click="loginHandler">登陆</Button>
              <Button type="error" @click="loginCancel">取消</Button>
            </Form>
          </TabPane>
          <TabPane label="注册" name="register">
            <Form :model="registerFormItem">
              <FormItem label="账户：">
                <Input v-model="registerFormItem.username" placeholder="输入账号"></Input>
              </FormItem>
              <FormItem label="密码：">
                <Input type="password" v-model="registerFormItem.password" placeholder="输入密码"></Input>
              </FormItem>
              <FormItem label="确认密码：">
                <Input type="password" v-model="registerFormItem.confirmPassword" placeholder="确认密码"></Input>
              </FormItem>
              <Button type="primary" @click="register">注册</Button>
              <Button type="error" @click="registerCancel">取消</Button>
            </Form>
          </TabPane>
        </Tabs>
      </Modal>
  </header>
</template>

<script>

  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        registerLoginModel: false,
        currentUsername: '',
        toggleLoginRegisterAndUserCenter: true,
        loginFormItem: {
          username: '',
          password: ''
        },
        registerFormItem: {
          username: '',
          password: '',
          confirmPassword: ''
        }
      }
    },
    methods: {
      showLoginRegister() {
        this.registerLoginModel = true
      },
      loginHandler() {
        let loginUsername = this.loginFormItem.username
        let loginPassword = this.loginFormItem.password
        let flag = false
        for (let i = 0; i < this.users.length; i++) {
          if (loginUsername === this.users[i].username && loginPassword === this.users[i].password) {
            flag = true
          }
        }
        if (flag) {
          this.$Message.success('登陆成功')
          this.currentUsername = loginUsername
          this.toggleLoginRegisterAndUserCenter = false
        } else {
          this.$Message.error('用户名或者密码错误')
        }
        this.loginCancel()
        this.registerLoginModel = false
      },
      loginCancel() {
        this.loginFormItem.username = ''
        this.loginFormItem.password = ''
      },
      register() {
        let registerName = this.registerFormItem.username
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].username === registerName) {
            this.$Message.error('用户名存在')
            return
          }
        }
        if (this.registerFormItem.password !== this.registerFormItem.confirmPassword) {
          this.$Message.error('两次密码输入不一致')
          return
        }
        this.$store.commit('addRegisterNewUser', {
          username: this.registerFormItem.username,
          password: this.registerFormItem.password,
          comments: [],
          collections: []
        })
        this.$Message.success('注册成功')
        this.registerCancel()
      },
      registerCancel() {
        this.registerFormItem.username = ''
        this.registerFormItem.password = ''
        this.registerFormItem.confirmPassword = ''
      },
      exitLogin() {
        this.toggleLoginRegisterAndUserCenter = true
      },
      ok() {
        this.registerLoginModel = false
      },
      cancel() {
        this.registerLoginModel = false
      }
    },
    computed: {
      ...mapState([
        'users'
      ])
    }
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