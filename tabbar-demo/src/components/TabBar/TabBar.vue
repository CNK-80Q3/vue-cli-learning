<template>
  <div id="tab-bar" class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import TabItem from './TabItem'
export default {
  name: 'TabBar',
  components: {
    TabItem
  }
}
</script>

<style>
  @import "../../assets/css/TabBar.css";
</style>