import axios from 'axios'
import toastr from 'toastr'
import isEqual from 'lodash.isequal'
import { propertyArrangement } from './../helpers/propertyArrangement'
import { URL, STATUS_OK } from './../../config/dev.env.js'

const state = {
  databases: [],
  questions: {},
  answers: []
}

const getters = {
  databases: state => state.databases,
  questions: state => state.questions
}

const mutations = {
  setDatabases (state, payload) {
    state.databases = payload
  },

  setQuestions (state, payload) {
    state.questions = propertyArrangement(payload, 'database_id')
  },

  addQuestion (state, payload) {
    state.questions[payload.database_id].push(payload);
  },

  // NOTE Still discusion whether removing/updating question
  // will be possible because of cascades related to tests.
  removeQuestion (state, { q_id, db_id }) {
    state.questions[db_id] = state.questions[db_id].filter(q => q.id !== q_id)
  },

  addDatabase (state, payload) {
    state.databases.push(payload);
    state.questions[payload.id] = []
  },

  removeDatabase (state, id) {
    state.databases = state.databases.filter(d => d.id !== id)
  }
}

const actions = {
  getDatabases ({ commit }) {
    return axios.get(`${URL}/databases`)
        .then(({ status, statusText, data }) => {
          if (status === STATUS_OK) {
            toastr.success('Retrieving databases', 'Successful')
            commit('setDatabases', data)
          } else {
            toastr.error('Retrieving databases', 'Something went wrong')
          }
        })
  },

  getQuestions ({ commit }) {
    return axios.get(`${URL}/questions`)
      .then(({ status, statusText, data }) => {
        if (status === STATUS_OK) {
          toastr.success('Retrieving questions', 'Successful')
          commit('setQuestions', data)
        } else {
          toastr.error('Retrieving questions', 'Something went wrong')
        }
      })
  },

  createDatabase ({ commit }, data) {
    const messageSubtitle = 'Creating database'
    return axios.post(`${URL}/databases`, data)
        .then(({ status, statusText, data }) => {
          if (checkStatus(status, statusText)) {
            toastr.success(messageSubtitle, 'Successful')
            commit('addDatabase', data)
          } else {
            toastr.error(messageSubtitle, 'Something went wrong')
          }

          return data
        })
  },

  createQuestion ({ commit }, data) {
    const messageSubtitle = 'Creating question'
    return axios.post(`${URL}/questions`, data)
        .then(({ status, statusText, data }) => {
          if (checkStatus(status, statusText)) {
            toastr.success(messageSubtitle, 'Successful')
            commit('addQuestion', data)
          } else {
            toastr.error(messageSubtitle, 'Something went wrong')
          }

          return data
        })
  }
}

// statusText added for later use.
function checkStatus(status, statusText) {
  return status.toString() && status.toString().startsWith(2);
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
