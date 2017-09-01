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

  questions: [],
  noOfQuestions: {
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
  questions: state => state.questions,
  noOfQuestions: state => state.noOfQuestions,
  selectedQuestions: state => state.selectedQuestions
}

const mutations = {
  setDatabase (state, payload) {
    state.database = payload
  },

  setQuestions (state, payload) {
    state.questions = payload
  },

  changeQuestionsNumber(state, { rank, value }) {
    state.noOfQuestions[rank] = value
  },

  // Add after localhost:3000/question post
  selectQuestion (state, question) {
    state.selectedQuestions[question.rank].push(question);
    state.questions = state.questions.filter(q  => q !== question)
  },

  deselectQuestion (state, question) {
    state.questions.push(question)
    const { rank } = question
    state.selectedQuestions[rank] = state.selectedQuestions[rank].filter(q  => q !== question)
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
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
