<template>
  <div>
    <h1>NEWS</h1>
    <ul>
      <li>news1</li>
      <li>news2</li>
      <li>news3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeNews',
  // 组件内守卫：
  // beforeRouteEnter
  // beforeRouteUpdate
  // beforeRouteLeave
  // beforeRouteEnter (to, from, next) {
  //   // 在渲染该组件的对应路由被 confirm 前调用
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  //   console.log('组件内守卫，beforeRouterEnter')
  //   next()
  // },
  // beforeRouteUpdate (to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   console.log('组件内守卫，beforeRouterUpdate')
  //   next()
  // },
  // beforeRouteLeave (to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  //   console.log('组件内守卫，beforeRouterLeave')
  //   next()
  // },
  // 路由跳转会创建销毁，子路由跳转不会创建销毁
  created () {
    console.log('HomeNews created')
  },
  destroyed () {
    console.log('HomeNews destroyed')
  }
}
</script>

<style scoped>
* {
  color: yellowgreen;
}
</style>
