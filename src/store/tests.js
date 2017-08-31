import axios from 'axios'
import toastr from 'toastr'
import { URL, STATUS_OK } from './../../config/dev.env.js'

const state = {
  tests: []
}
const getters = {
  tests: state => state.tests
}

const actions = {
  getTests (context) {
    axios.get(`${URL}/tests`)
      .then(({ status, statusText, data }) => {
        if (status === STATUS_OK) {
          toastr.success('Retrieving tests', 'Successful')
          context.commit('setTests', data)
        } else {
          toastr.error('Retrieving tests', 'Something went wrong')
        }
      })
  }
}

const mutations = {
  setTests (state, payload) {
    state.tests = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
