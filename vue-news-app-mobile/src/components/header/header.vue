<template>
  <div id="mobile">
    <header class="header">
      <img src="./logo.png" alt="logo">
      <span>Vue News</span>
      <span class="header-icon" v-if="toggleLoginRegisterFormAndUserCenter">
        <i class="el-icon-menu" @click="dialogVisible = true"></i>
      </span>
      <span class="header-icon" v-else>
        <i class="el-icon-tickets" @click="usercenterVisible = true"></i>
      </span>

      <el-dialog
        title="用户中心"
        :visible.sync="dialogVisible"
        width="90%">
        <el-tabs v-model="tabActiveName">
          <el-tab-pane label="登陆" name="login-tab">
            <el-form ref="loginForm" :model="loginForm">
              <el-form-item label="账户：">
                <el-input v-model="loginForm.username" placeholder="输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码：">
                <el-input v-model="loginForm.password" placeholder="输入密码" type="password"></el-input>
              </el-form-item>
              <el-button type="primary" plain @click="loginHandler">登陆</el-button>
              <el-button type="danger" plain @click="loginCancel">取消</el-button>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register-tab">
            <el-form ref="registerForm" :model="registerForm">
              <el-form-item label="账户：">
                <el-input v-model="registerForm.username" placeholder="输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码：">
                <el-input v-model="registerForm.password" placeholder="输入密码" type="password"></el-input>
              </el-form-item>
              <el-form-item label="确认密码：">
                <el-input v-model="registerForm.confirmPassword" placeholder="确认密码" type="password"></el-input>
              </el-form-item>
              <el-button type="primary" plain @click="registerHandler">注册</el-button>
              <el-button type="danger" plain @click="registerCancel">取消</el-button>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-dialog>

      <el-dialog
        title="用户中心"
        :visible.sync="usercenterVisible"
        width="90%">
        <el-button type="primary" plain>{{ currentUsername }}</el-button>
        <el-button type="info" plain>个人中心</el-button>
        <el-button type="danger" plain @click="exitUsercenter">退出</el-button>
      </el-dialog>
    </header>
  </div>
</template>

<script>

  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        dialogVisible: false,
        tabActiveName: 'login-tab',
        usercenterVisible: false,
        toggleLoginRegisterFormAndUserCenter: true,
        currentUsername: '',
        loginForm: {
          username: '',
          password: ''
        },
        registerForm: {
          username: '',
          password: '',
          confirmPassword: ''
        }
      }
    },
    methods: {
      loginHandler() {
        let loginUsername = this.loginForm.username
        let loginPassword = this.loginForm.password
        let flag = false
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].username === loginUsername && this.users[i].password === loginPassword) {
            flag = true
          }
        }

        if (flag) {
          this.$message({
            message: '登陆成功',
            type: 'success',
            duration: 500
          })
          this.currentUsername = loginUsername
          this.loginCancel()
          this.dialogVisible = false
          this.toggleLoginRegisterFormAndUserCenter = false
        } else {
          this.$message({
            message: '用户名或者密码错误',
            type: 'error',
            duration: 500
          })
        }
      },
      loginCancel() {
        this.loginForm.username = ''
        this.loginForm.password = ''
      },
      registerHandler() {
        let registerUsername = this.registerForm.username
        for (let i = 0; i < this.users.length; i++) {
          if (registerUsername === this.users[i].username) {
            this.$message({
              type: 'error',
              message: '用户名已存在',
              duration: 500
            })
            return
          }
        }

        if (this.registerForm.password !== this.registerForm.confirmPassword) {
          this.$message({
            message: '两次密码不一致',
            type: 'error',
            duration: 500
          })
          return
        }

        this.$store.commit('addRegisterNewUser', {
          username: this.registerForm.username,
          password: this.registerForm.password,
          comments: [],
          collections: []
        })
        this.$message({
          message: '注册成功',
          type: 'success',
          duration: 500
        })
        this.dialogVisible = false

        this.registerCancel()
      },
      registerCancel() {
        this.registerForm.username = ''
        this.registerForm.password = ''
        this.registerForm.confirmPassword = ''
      },
      exitUsercenter() {
        this.usercenterVisible = false
        this.toggleLoginRegisterFormAndUserCenter = true
      }
    },
    computed: {
      ...mapState([
        'users'
      ])
    },
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
  position: relative;
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

.header-icon {
  position: absolute;
  top: 2px;
  right: 10px;
}
</style>