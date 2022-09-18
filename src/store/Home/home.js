export default {
  //开启模块化命名空间
  namespaced: true,
  state: {
    CurrentClass: []
  },
  getters: {
  },
  mutations: {
    getCurrentClass(state, value) {
      state.CurrentClass = value
      console.log(state.CurrentClass);
    }
  },
  actions: {
  },
}