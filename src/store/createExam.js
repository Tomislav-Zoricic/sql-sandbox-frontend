import moment from 'moment'

const NO_OF_QUESTIONS_DEFAULT = 1
const EXAM_NAME_DEFAULT = 'Default exam name'
const DATE_DEFAULT = moment().format("YYYY-MM-DD")
const DURATION_DEFAULT = 60
const DEFAULT_DATABASE = { name: 'Default Database Name'}

const DEFAULT_RANK_VALUE_EASY = 1
const DEFAULT_RANK_VALUE_MEDIUM = 3
const DEFAULT_RANK_VALUE_HARD = 5

const state = {
  name: EXAM_NAME_DEFAULT,
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
  },
  rankValues: {
    'easy': DEFAULT_RANK_VALUE_EASY,
    'medium': DEFAULT_RANK_VALUE_MEDIUM,
    'hard': DEFAULT_RANK_VALUE_HARD
  }
}

const getters = {
  name: state => state.name,
  date: state => state.date,
  duration: state => state.duration,
  database: state => state.database,
  questions: state => state.questions,
  noOfQuestions: state => state.noOfQuestions,
  rankValues: state => state.rankValues,
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

  changeRankValue(state, { rank, value }) {
    state.rankValues[rank] = value
  },

  // Add after localhost:3000/question post
  selectQuestion (state, question) {
    state.selectedQuestions[question.rank].push(question)
    state.questions = state.questions.filter(q  => q !== question)
  },

  deselectQuestion (state, question) {
    state.questions.push(question)
    const { rank } = question
    state.selectedQuestions[rank] = state.selectedQuestions[rank].filter(q  => q !== question)
  },

  addDatabase (state, payload) {
    state.databases.push(payload)
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
