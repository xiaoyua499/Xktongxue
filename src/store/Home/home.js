export default {
  //开启模块化命名空间
  namespaced: true,
  state: {
    CurrentClass: [] || JSON.parse(sessionStorage.getItem('CurrentClass'))
  },
  getters: {
  },
  mutations: {
    getCurrentClass(state, value) {
      state.CurrentClass = value
      sessionStorage.setItem('CurrentClass', JSON.stringify(value))
      console.log(state.CurrentClass);
    }
  },
  actions: {
  },
}