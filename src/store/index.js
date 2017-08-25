import Vue from 'vue'
import Vuex from 'vuex'
import databases from './databases.js'
import students from './students.js'
import activeTest from './activeTest.js'
import testsHistory from './testsHistory.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    databases,
    students,
    activeTest,
    testsHistory
  }
})
