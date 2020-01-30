import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 那么.vue文件中的template是谁解析的？ --是之前下载的vue-template-compiler解析的，在package.json里可以找到
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
