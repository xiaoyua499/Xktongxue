export default {
  //开启模块化命名空间
  namespaced: true,
  state: {
    Details: {
      //是否有课
      isHave: true,
      //课程时长
      classTime: true,
      //课程名称
      className: "",
      //任课教师
      teacher: "",
      // 教室
      classroom: "",
    },
  },
  getters: {
  },
  mutations: {
    updataDetails(state, value) {
      this.state.Details = value
      this.state.Details.isHave = true
      this.state.Details.classTime = true
    },
  },
  actions: {
  },
}