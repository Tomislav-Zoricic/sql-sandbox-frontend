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
  // Add after localhost:3000/question post
  addQuestion (state, payload) {
    console.log('questions', state.questions[payload.database_id], payload)
    state.questions[payload.database_id].push(payload);
  },

  removeQuestion (state, { q_id, db_id }) {
    console.log('removing question', db_id, q_id, state.questions[db_id])
    state.questions[db_id] = state.questions[db_id].filter(q => q.id !== q_id)
  },

  addDatabase (state, payload) {
    state.databases.push(payload);
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
