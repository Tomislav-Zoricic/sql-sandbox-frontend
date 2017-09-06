const databases = require('./databases.js')
const questions = require('./questions.js')
const students = require('./students.js')
const exams = require('./exams.js')

// Export has to be a function.
module.exports = () => {
  return { databases, questions, students, exams }
}
