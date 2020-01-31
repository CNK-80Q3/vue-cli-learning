import Vue from 'vue'
import { INCREASE, DECREASE } from '@/store/mutations-types'

export default {
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
}