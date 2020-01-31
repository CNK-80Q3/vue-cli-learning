export default {
  powerCounter(state) {
    return state.counter * state.counter
  },
  getStudents(state) {
    return state.students.filter(stu => stu.age >= state.defaultAge)
  },
  // 这里的getters参数，即是vuex实例里的getters
  getStudentsLength(state, getters) {
    return getters.getStudents.length
  }
}