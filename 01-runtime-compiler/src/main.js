/* eslint-disable no-new */
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// runtime - compiler
// template-- - parse-- -> ast(abstract syntax tree)抽象语法树 -> render() -> virtual DOM(虚拟DOM) -> 真实DOM

// runtime - only（源码量更少，因为不需要处理template-- - parse-- -> ast）
// render() -> virtual DOM(虚拟DOM) -> 真实DOM

new Vue({
  el: '#app',
  // render: h => h(App)
  // h: hyperscript 传入一个createElement函数，相当于以下代码

  render: function (createElement) {
    // 1.普通用法 createElement('标签', {属性}, ['内容'])
    // return createElement(
    //   'div',
    //   { class: 'app' },
    //   ['hello vue/cli', createElement('button', { class: 'btn' }, ['按钮'])])
    // 2. 传入一个组件对象
    return createElement(App)
  }
})
