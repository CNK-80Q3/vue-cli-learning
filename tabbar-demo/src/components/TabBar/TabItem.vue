<template>
  <div class="tab-item" @click="tabItemClick" style="'color': 'this.color'">
    <div v-if="isActive">
      <slot name="tab-item-img-active"></slot>
    </div>
    <div v-else>
      <slot name="tab-item-img"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tab-item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#d81e06'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive() {
      return !this.$route.path.indexOf(this.path)
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    tabItemClick(path) {
      this.$router.push(this.path).catch(err => err)
    }
  }
}
</script>

<style>
  @import "../../assets/css/TabItem.css";
</style>