import axios from 'axios'
import toastr from 'toastr'
import isEqual from 'lodash.isequal'
import { propertyArrangement } from './../helpers/propertyArrangement'
import { URL, STATUS_OK } from './../../config/dev.env.js'

const state = {
  database: {},
  databases: [],
  questions: {},
  answers: []
}

const getters = {
  // NOTE ovaj solo database trenutno nicem ne sluzi.
  database: state => state.database,
  databases: state => state.databases,
  questions: state => state.questions
}

const mutations = {
  setDatabase (state, payload) {
    state.database = payload
  },

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
  getDatabases ({ state, commit }) {
    if (!state.databases.length) {
      axios.get(`${URL}/databases`)
        .then(({ status, statusText, data }) => {
          if (status === STATUS_OK) {
            toastr.success('Retrieving databases', 'Successful')
            commit('setDatabases', data)
          } else {
            toastr.error('Retrieving databases', 'Something went wrong')
          }
        })
    }
  },

  getDatabase ({ state, commit }, id) {
    const database = state.databases.filter(db => db.id === id)[0]

    if (database && !(isEqual(database, state.database))) {
      commit('setDatabasde', database)
    } else if (database === undefined) {
      axios.get(`${URL}/databases?id=${id}`)
        .then(({ status, statusText, data }) => {
          commit('setDatabase', data)
        })
    }
  },

  getQuestions (context) {
    axios.get(`${URL}/questions`)
      .then(({ status, statusText, data }) => {
        if (status === STATUS_OK) {
          toastr.success('Retrieving questions', 'Successful')
          context.commit('setQuestions', data)
        } else {
          toastr.error('Retrieving questions', 'Something went wrong')
        }
      })
  },

  // getAnswers (context) {
  //   axios.get(`${URL}/answers`)
  //     .then(({ status, statusText, data }) => {
  //       if (status === STATUS_OK) {
  //         toastr.success('Retrieving answers', 'Successful')
  //         context.commit('setAnswers', data)
  //       } else {
  //         toastr.error('Retrieving answers', 'Something went wrong')
  //       }
  //     })
  // },
  //
  // getAnswer (context, questionId) {
  //   axios.get(`${URL}/answers?question_id=${questionId}`)
  //     .then(({ status, statusText, data }) => {
  //       if (status === STATUS_OK) {
  //         toastr.success('Retrieving questions', 'Successful')
  //         context.commit('getAnswer', data)
  //       }
  //     })
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}
