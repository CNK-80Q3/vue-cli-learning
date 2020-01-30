import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({
  state: {
    counter: 0
  },
  actions: {

  },
  mutations: {
    // 方法
    // 默认可以传一个参数state
    increase(state) {
      state.counter++
    },
    decrease(state) {
      state.counter--
    }
  },
  modules: {
    
  },
  getters: {

  }

})

export default store