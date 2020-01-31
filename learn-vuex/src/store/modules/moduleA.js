export default {
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