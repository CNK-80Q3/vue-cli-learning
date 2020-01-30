<template>
  <h3>{{this.$store.state.counter}}</h3>
</template>

<script>
export default {
  name: 'HelloVuex',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: #42b983;
}
</style>
