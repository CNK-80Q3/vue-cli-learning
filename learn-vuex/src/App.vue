<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <h3>---------------App.vue---------------</h3>
    <h1>{{$store.getters.powerCounter}}</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="add(5)">+5</button>
    <button @click="sub(5)">-5</button>
    <h3>------------HelloVuex.vue------------</h3>
    <HelloVuex/>
    <h3>-------------getStudents-------------</h3>
    <GetStudents/>
    <h3>----------info内容是否是响应式----------</h3>
    <div>{{$store.state.info}}</div>
    <button @click="updateInfo()">改变info</button>
    <button @click="asyncUpdateInfo()">异步改变info</button>
    <h3>-----------modules  中的内容-----------</h3>
    <h1>{{$store.state.moduleA.name}}</h1>
    <h1>{{$store.getters.gettersName}}</h1>
    <h1>{{$store.getters.gettersName2}}</h1>
    <h1>{{$store.getters.gettersName3}}</h1>
    <button @click="changeName('hanhan')">改变名字</button>
    <button @click="aChangeName('guagua')">异步改变名字</button>
  </div>
</template>

<script>
import HelloVuex from '@/components/HelloVuex'
import GetStudents from '@/components/GetStudents'
import { INCREASE, DECREASE } from '@/store/mutations-types'

export default {
  name: 'App',
  data() {
    return {
      stus: this.$store.getters.getStudents
    }
  },
  methods: {
    add(num) {
      this.$store.commit(INCREASE, num)
    },
    sub(num) {
      this.$store.commit(DECREASE, num)
    },
    updateInfo() {
      this.$store.commit({
        type: 'updateInfo',
        height: 1.98
      })
    },
    asyncUpdateInfo() {
      this.$store.dispatch('asyncUpdateInfo', {
        // payload: '我是payload',
        // success: () => console.log('不优雅方式：success：里面已经完成了！！！'),
        // height: 1.98
      }).then(res => {
        console.log('优雅方式：里面完成了提交')
        console.log(res)
      })
      // 可以在这里使用.then()，是因为dispatch可以中转它所触发的函数中的Promise
    },
    changeName(name) {
      this.$store.commit('updateName', name)
    },
    aChangeName(name) {
      this.$store.dispatch('aUpdateName', name)
    }
  },
  components: {
    HelloVuex,
    GetStudents
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: blue;
}
</style>
