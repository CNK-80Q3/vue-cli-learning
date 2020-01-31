<template>
  <div id="get-students">
    <input
      type="number"
      name="ageGetter"
      id="age-getter"
      v-model="limitAge"
      @keyup.enter="setLimitAge(limitAge)"
    />
    <button @click="addStudents">添加学生</button>
    <h1 v-for="(item, index) in $store.getters.getStudents">{{index}}. {{item.name}}</h1>
    <h2>共有：{{$store.getters.getStudentsLength}}人</h2>
  </div>
</template>

<script>
export default {
  name: 'GetStudents',
  data() {
    return {
      limitAge: this.$store.state.defaultAge
    }
  },
  methods: {
    // 参数被称为是mutations的载荷（Payload）
    setLimitAge() {
      // 1. 普通提交方式（提交的参数格式为自身的类型）
      // this.$store.commit('setLimitAge', this.limitAge)

      // 2. 特殊提交方式（提交参数的格式：无论是什么类型的参数都会自动被封装进Payload，成为其中的一个属性）
      this.$store.commit({
        type: 'setLimitAge',
        limitAge: this.limitAge
      })
    },
    // 传递多个参数时，放入对象，或数组再传递
    addStudents() {
      const stus = [
        { id: 5, name: 'burning', age: 29 },
        { id: 6, age: 26, name: 'sccc' }
      ]
      this.$store.commit('addStudents', stus)
    }
  }
}
</script>

<style>
h1 {
  color: rgb(255, 247, 0);
}
</style>
