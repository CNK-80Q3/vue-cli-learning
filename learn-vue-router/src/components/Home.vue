<template>
  <div>
    <h1>首页</h1>
    <p>这是首页内容。。。。。。</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/messages">信息</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      path: '/home/news'
    }
  },
  // keep-alive的使用
  // activated和deactivated两个函数只在组件被使用时，被<keep-alive></keep-alive> 包裹的情况下会执行
  activated () {
    this.$router.push(this.path).catch(err => err)
    console.log('activated')
  },
  beforeRouteLeave (to, from, next) {
    this.path = this.$route.path
    console.log(this.$route.path)
    next()
  },
  created () {
    console.log('Home created')
  },
  destroyed () {
    console.log('Home destroyed')
  }
}
</script>

<style scoped>
  * {
    color: green
  }
</style>
