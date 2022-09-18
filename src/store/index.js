import Vue from 'vue'
import Vuex from 'vuex'
import modulesTimetable from '../store/Timetable/Timetable'
import modulesHome from '../store/Home/home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    'Timetable': modulesTimetable,
    'Home': modulesHome
  }
})
