import moment from 'moment'

const NO_OF_QUESTIONS_DEFAULT = 1
const EXAM_NAME_DEFAULT = 'Default exam name'
const DATE_DEFAULT = moment().format("YYYY-MM-DD")
const DURATION_DEFAULT = 60
const DEFAULT_DATABASE = { name: 'Default Database Name'}

const state = {
  name: EXAM_NAME_DEFAULT,
  date: DATE_DEFAULT,
  duration: DURATION_DEFAULT,
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
