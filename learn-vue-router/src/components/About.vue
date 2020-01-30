<template>
  <div>
    <h1>关于</h1>
    <p>这是关于内容。。。。。。</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  created () {
    console.log('About created')
  },
  destroyed () {
    console.log('About destroyed')
  }
}
</script>

<style scoped>
  * {
    color: yellow
  }
</style>
