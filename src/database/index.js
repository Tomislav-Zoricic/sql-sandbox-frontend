const databases = require('./databases.js')
const questions = require('./questions.js')
const students = require('./students.js')
const tests = require('./tests.js')
const test = require('./test.js')

// Export has to be a function.
module.exports = () => {
  return { databases, questions, students, test, tests }
}
