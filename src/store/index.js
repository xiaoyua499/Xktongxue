import Vue from 'vue'
import Vuex from 'vuex'
import modulesTimetable from '../store/Timetable/Timetable'
import modulesHome from '../store/Home/home'
import modulesLogin from '../store/Login/Login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    'Timetable': modulesTimetable,
    'Home': modulesHome,
    'Login': modulesLogin
  }
})
