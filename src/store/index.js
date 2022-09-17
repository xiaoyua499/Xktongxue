import Vue from 'vue'
import Vuex from 'vuex'
import modulesTimetable from '../store/Timetable/Timetable'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    'Timetable': modulesTimetable
  }
})
