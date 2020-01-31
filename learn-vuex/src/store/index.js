import Vue from 'vue'
import Vuex from 'vuex'

import getters from '@/store/getters'
import actions from '@/store/actions'
import mutations from '@/store/mutations'
import moduleA from '@/store/modules/moduleA'


// 1. 安装插件
Vue.use(Vuex)

const state = {
  counter: 0,
  students: [
    { id: 1, name: 'Kobe', age: 41 },
    { id: 2, name: 'Kaka', age: 33 },
    { id: 3, name: 'Pis', age: 22 },
    { id: 4, name: 'Zsmj', age: 11 },
  ],
  defaultAge: 25,
  info: {
    name: 'Alaheiya',
    age: 44,
    height: 1.99
  }
}

// 2. 创建对象
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  
  // 由于单一状态树推荐只创建一个Vuex实例，随着项目增大state会越来越臃肿，所以使用modules分模块
  modules: {
    moduleA
  }

})

export default store