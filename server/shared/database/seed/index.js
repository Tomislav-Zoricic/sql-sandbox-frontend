'use strict'

const Promise = require('bluebird')
const pick = require('lodash.pick')

const userData = require('./users.json').data
const dbConnectionData = require('./dbConnections.json').data
const examData = require('./exams.json').data
const questionData = require('./questions.json').data

const DIFFICULTY = ['EASY', 'MEDIUM', 'HARD']

function insertAnswers(Answer, examsTaken) {
  return Promise.map(examsTaken, examTaken => {
    return Promise.join(examTaken.getStudent(), examTaken.getQuestions(),
      (student, questions) => {
        return Promise.map(questions, question => {
          return Answer.create({
            givenQuery: question.correctQuery, correct: true
          })
            .then(answer => answer.setStudent(student))
            .then(answer => answer.setExam_taken(examTaken))
            .then(answer => answer.setQuestion(question))
            .then(() => examTaken.update({ score: 100 }))
        })
      })
  })
}

function insertTakenExams(ExamTaken, exams, students) {
  const result = []

  exams.forEach(exam => {
    students.forEach(student => {
      result.push(
        ExamTaken.create()
          .then(examTaken => examTaken.setExam(exam))
          .then(examTaken => examTaken.setStudent(student))
          .then(examTaken => {
            return exam.getQuestions()
              .then(questions => examTaken.setQuestions(questions))
              .then(() => examTaken)
          })
      )
    })
  })

  return Promise.all(result)
}

function insertQuestions(Question, exams) {
  let examsLen = exams.length

  return Promise.map(questionData, (record, index) => {
    return Question.create(record)
      .then(question => {
        let exam = exams[index % examsLen]
        return question.addExam(exam, {
          through: { difficulty: DIFFICULTY[index] }
        })
          .then(() => exam.getDb_connection())
          .then(dbConn => question.setDb_connection(dbConn))
          .catch(() => question.destroy({ force: true }))
      })
  })
}

function insertExams(Exam, professors, dbConnections) {
  let profLen = professors.length
  let dbConLen = dbConnections.length

  return Promise.map(examData, (record, index) => {
    return Exam.create(record)
      .then(exam => exam.setProfessor(professors[index % profLen]))
      .then(exam => exam.setDb_connection(dbConnections[index % dbConLen]))
  })
}

function initializeModel(Model, records) {
  return Promise.map(records, record => Model.create(record))
}

function populateDatabase(db) {
  const { User, DbConnection, Exam, Question, ExamTaken, Answer } = db
  const users = initializeModel(User, userData)
  const dbConnections = initializeModel(DbConnection, dbConnectionData)

  return Promise.join(users, dbConnections, (users, dbConnections) => {
    let professors = users.filter(record => record.role === 'PROFESSOR')
    let students = users.filter(record => record.role === 'STUDENT')
    return insertExams(Exam, professors, dbConnections)
      .then(exams => { return { students, exams } })
  })
    .then(result => {
      return insertQuestions(Question, result.exams)
        .then(() => pick(result, ['students', 'exams']))
    })
    .then(result => insertTakenExams(ExamTaken, result.exams, result.students))
    .then(examsTaken => insertAnswers(Answer, examsTaken))
}

module.exports = db => populateDatabase(db)
