<template>
  <div>
    <h1>MESSAGES</h1>
    <ul>
      <li>messages1</li>
      <li>messages2</li>
      <li>messages3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeMessages',
  created () {
    console.log('HomeMessages created')
  },
  destroyed () {
    console.log('HomeMessages destroyed')
  }
}
</script>

<style scoped>
  * {
    color: skyblue
  }
</style>
