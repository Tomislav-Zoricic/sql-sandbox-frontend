import moment from 'moment'
import toastr from 'toastr'
import axios from 'axios'
import { API_URL, STATUS_OK } from './../../config/dev.env.js'

const NO_OF_QUESTIONS_DEFAULT = 1
const EXAM_NAME_DEFAULT = 'Default exam name'
const DATE_DEFAULT = moment().format("YYYY-MM-DD")
const DURATION_DEFAULT = 60
const DEFAULT_DATABASE = 1

const state = {
  name: EXAM_NAME_DEFAULT,
  date: DATE_DEFAULT,
  duration: DURATION_DEFAULT,
  // NOTE Not sure do I need entire database or just id here.
  database: DEFAULT_DATABASE,
  questions: [],
  // NOTE Last actions, consider renaming.
  // NOTE History item should consist of
  // question_id
  // answer
  // timestamp
  // score
  history: []
}

const getters = {
  name: state => state.name,
  date: state => state.date,
  duration: state => state.duration,
  database: state => state.database,
  questions: state => state.questions,
  history: state => state.history
}

const mutations = {
  setExam (state, payload) {
    console.log('SETTING EXAM', payload)
    state.name = payload.name
    state.duration = payload.duration
    state.database = payload.databaseId
    state.questions = payload.questions
  }
}

const actions = {
  getExam ({ commit }) {
    return axios.get(`${API_URL}/exam`)
        .then(({ status, statusText, data }) => {
          if (checkStatus(status, statusText)) {
            toastr.success('Retrieving databases', 'Successful')
            commit('setExam', data)
          } else {
            toastr.error('Retrieving databases', 'Something went wrong')
          }
        })
  }
}

// statusText added for later use.
function checkStatus(status, statusText) {
  return status.toString() && status.toString().startsWith(2)
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
