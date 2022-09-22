import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入Vant组件库
import getVant from './plugins'
//引入axios
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
getVant()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')