import axios from 'axios'
import toastr from 'toastr'
import { URL, STATUS_OK } from './../../config/dev.env.js'

const state = {
  exams: []
}
const getters = {
  exams: state => state.exams
}

const actions = {
  getExams (context) {
    axios.get(`${URL}/exams`)
      .then(({ status, statusText, data }) => {
        if (status === STATUS_OK) {
          toastr.success('Retrieving exams', 'Successful')
          context.commit('setExams', data)
        } else {
          toastr.error('Retrieving exams', 'Something went wrong')
        }
      })
  }
}

const mutations = {
  setExams (state, payload) {
    state.exams = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
