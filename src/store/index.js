import Vue from 'vue'
import Vuex from 'vuex'
import databases from './databases.js'
import students from './students.js'
import createTest from './createTest.js'
import tests from './tests.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    databases,
    students,
    createTest,
    tests
  }
})
