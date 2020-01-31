import Vue from 'vue'
import Vuex from 'vuex'
import { INCREASE, DECREASE } from '@/store/mutations-types'

const moduleA = {
  // 在modules中除了state展示需要加 .module名 之外，其他的使用方式都与未划分模块之前一样，注意方法名不要重复
  state: {
    name: 'moduleA_name'
  },
  getters: {
    gettersName(state) {
      return state.name + '11111'
    },
    gettersName2(state, getters) {
      return getters.gettersName + '22222'
    },
    gettersName3(state, getters, rootState) {
      return rootState.counter + '使用根state'
    }
  },
  mutations: {
    updateName(state, name) {
      state.name = name
    },
    aName(state, payload) {
      state.name = payload.name
    },
  },
  actions: {
    aUpdateName(context) {
      console.log(context)
      // 这里的context只包括modules里面的内容
      setTimeout(() => {
        context.commit({
          type: 'aName',
          name: 'guagua'
        })
      }, 1000);
    }
  }
}

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({
  state: {
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
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    getStudents(state) {
      return state.students.filter(stu => stu.age >= state.defaultAge)
    },
    // 这里的getters参数，即是vuex实例里的getters
    getStudentsLength(state, getters) {
      return getters.getStudents.length
    }
  },
  mutations: {
    // 方法
    // 默认可以传一个参数state
    [INCREASE](state, num) {
      isNaN(num) ?
        state.counter = state.counter + 1
        :
        state.counter = state.counter + num
    },
    [DECREASE](state, num) {
      isNaN(num) ?
        state.counter = state.counter - 1
        :
        state.counter = state.counter - num
    },
    setLimitAge(state, payload) {
      state.defaultAge = payload.limitAge
      console.log(payload)
    },
    addStudents(state, stus) {
      state.students = state.students.concat(stus)
      console.log(stus);

      console.log(state.students)
    },
    updateInfo(state, payload) {
      // // 要做到响应式必须是state中已经定义的变量
      // // state.info.height = payload.height
      // state.info['name'] = 'name'
      // console.log(state.info)
      // // 但是貌似前面已经使用了state.info的话，也能做到响应式
      // state.info['address'] = '洛杉矶'
      // Vue.set(state.info, 'address', 'kakaluote')

      // 该方法做不到响应式
      // delete state.info.age

      Vue.delete(state.info, 'name')
    },
    // updateInfo(state) {
    //   // 在mutations里做异步操作时，Devtools是不能跟踪的，所以异步操作要放在actions里面进行
    //   setTimeout(() => {
    //     state.info.name = 'codewhy'
    //   }, 1000)
    // },
    asyncChangeInfo(state, payload) {
      state.info.name = payload.name
    }
  },
  actions: {
    // asyncUpdateInfo(context, payload) {
    //   // 使用setTimeout模拟异步操作，actions触发mutations里面对应的方法，再去改变state
    //   setTimeout(() => {
    //     context.commit({
    //       type: 'asyncChangeInfo',
    //       name: 'payload的name'
    //     })
    //     // 回调payload里传过来的success方法，达到通知修改信息的目的，但是这种做法不够优雅
    //     console.log(payload.height)
    //     payload.success()
    //   }, 3000)
    // },
    // 优雅的通知信息的方法：
    asyncUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit({
            type: 'asyncChangeInfo',
            name: 'payload的name'
          })
        }, 3000);
        resolve('success message')
      })
    }
  },
  // 由于单一状态树推荐只创建一个Vuex实例，随着项目增大state会越来越臃肿，所以使用modules分模块

  modules: {
    moduleA
  }

})

export default store