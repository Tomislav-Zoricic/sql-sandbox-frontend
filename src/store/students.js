import axios from 'axios'
import toastr from 'toastr'
import { API_URL, STATUS_OK } from './../../config/dev.env.js'

const state = {
  students: []
}
const getters = {
  students: state => state.students

}

const mutations = {
  setStudents (state, payload) {
    state.students = payload
  }
}

const actions = {
  getStudents (context) {
    axios.get(`${API_URL}/students`)
      .then(({ status, statusText, data }) => {
        if (status === STATUS_OK) {
          toastr.success('Retrieving students', 'Successful')
          context.commit('setStudents', data)
        } else {
          toastr.error('Retrieving students', 'Something went wrong')
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
