// const state = {}
// const getters = {}
// const actions = {}
// const mutations = {}
import moment from 'moment'

const NO_OF_QUESTIONS_DEFAULT = 1
const TEST_NAME_DEFAULT = 'Default test name'
const DATE_DEFAULT = moment().format("YYYY-MM-DD")
const DURATION_DEFAULT = 60
const DEFAULT_DATABASE = { name: 'Default Database Name'}

const state = {
  name: TEST_NAME_DEFAULT,
  date: DATE_DEFAULT,
  duration: DURATION_DEFAULT,
  database: DEFAULT_DATABASE,

  noOfQuestions: {
    'easy': NO_OF_QUESTIONS_DEFAULT,
    'medium': NO_OF_QUESTIONS_DEFAULT,
    'hard': NO_OF_QUESTIONS_DEFAULT
  },
  allowedNoOfQuestions: {
    'easy': NO_OF_QUESTIONS_DEFAULT,
    'medium': NO_OF_QUESTIONS_DEFAULT,
    'hard': NO_OF_QUESTIONS_DEFAULT
  },
  selectedQuestions: {
    'easy': [],
    'medium': [],
    'hard': []
  }
}

const getters = {
  name: state => state.name,
  date: state => state.date,
  duration: state => state.duration,
  database: state => state.database,
  noOfQuestions: state => state.noOfQuestions,
  allowedNoOfQuestions: state => state.allowedNoOfQuestions,
  selectedQuestions: state => state.selectedQuestions
}

const mutations = {
  setDatabase (state, payload) {
    state.database = payload
  },

  setQuestions (state, payload) {
    state.questions = payload
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

}

export default {
  state, getters, actions, mutations
}