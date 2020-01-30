<template>
  <div>
    <h1>用户界面</h1>
    <p>{{user}} 用户界面内容。。。。</p>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    user () {
      return this.$route.params.userId
    }
  },
  created () {
    console.log('User created')
  },
  destroyed () {
    console.log('User destroyed')
  }
}
</script>
