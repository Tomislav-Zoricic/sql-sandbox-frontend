import Vue from 'vue'
import Vuex from 'vuex'
import databases from './databases.js'
import students from './students.js'
import createExam from './createExam.js'
import activeExam from './activeExam.js'
import exams from './exams.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    databases,
    students,
    createExam,
    exams,
    activeExam
  }
})
