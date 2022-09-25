export default {
  //开启模块化命名空间
  namespaced: true,
  state: {
    //用户信息
    user: JSON.parse(sessionStorage.getItem('user')) || {},
  },
  getters: {
  },
  mutations: {
    //获取用户信息
    getUser(state, value) {
      state.user = value
      // console.log(state.user);
      sessionStorage.setItem('user', JSON.stringify(state.user))
    },
  },
  actions: {
  },
}