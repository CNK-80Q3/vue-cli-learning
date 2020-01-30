<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h3>---------------App.vue---------------</h3>
    <h1>{{$store.state.counter}}</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <h3>------------HelloVuex.vue------------</h3>
    <HelloVuex></HelloVuex>
  </div>
</template>

<script>
import HelloVuex from '@/components/HelloVuex'

export default {
  name: 'App',
  methods: {
    add() {
      this.$store.commit('increase')
    },
    sub() {
      this.$store.commit('decrease')
    }
  },
  components: {
    HelloVuex
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: blue
}
</style>
