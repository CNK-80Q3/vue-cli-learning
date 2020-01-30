import Vue from 'vue'
import App from './App'
// 自动找文件夹里的index文件，所以省略 /index
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
