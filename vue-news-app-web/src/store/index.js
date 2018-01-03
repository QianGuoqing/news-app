import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: [
      {
        username: 'admin',
        password: 'admin',
        comments: ['admin', 'admin'], // 用户的评论列表
        collections: ['admin', 'admin'] // 用户的收藏列表
      }
    ]
  },
  mutations: {
    addRegisterNewUser(state, payload) {
      state.users.push(payload)
      console.log(state.users);
    }
  },
  actions: {

  },
  getters: {

  }
})

export default store