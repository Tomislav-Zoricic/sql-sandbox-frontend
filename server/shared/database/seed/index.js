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
    return examTaken.getStudent().then(student => {
      return examTaken.getQuestions().then(questions => {
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

function insertQuestions(Question, exams, dbConnections) {
  const result = []
  let examsLen = exams.length

  questionData.forEach((record, index) => {
    result.push(
      Question.create(record)
        .then(question => {
          let exam = exams[index % examsLen]
          return question.addExam(exam, {
            through: { difficulty: DIFFICULTY[index] }
          })
            .then(() => exam.getDb_connection())
            .then(dbConn => question.setDb_connection(dbConn))
            .catch(() => question.destroy({ force: true }))
        })
    )
  })

  return Promise.all(result)
}

function insertExams(Exam, professors, dbConnections) {
  const result = []
  let profLen = professors.length
  let dbConLen = dbConnections.length

  examData.forEach((record, index) => {
    result.push(
      Exam.create(record)
        .then(exam => exam.setProfessor(professors[index % profLen]))
        .then(exam => exam.setDb_connection(dbConnections[index % dbConLen]))
    )
  })

  return Promise.all(result)
}

function initializeModel(Model, records) {
  const result = []
  records.forEach(record => result.push(Model.create(record)))
  return Promise.all(result)
}

function populateDatabase(db) {
  const { User, DbConnection, Exam, Question, ExamTaken, Answer } = db
  const users = initializeModel(User, userData)
  const dbConnections = initializeModel(DbConnection, dbConnectionData)

  return Promise.join(users, dbConnections, (users, dbConnections) => {
    let professors = users.filter(record => record.role === 'PROFESSOR')
    let students = users.filter(record => record.role === 'STUDENT')
    return insertExams(Exam, professors, dbConnections)
      .then(exams => { return { students, exams, dbConnections } })
  })
    .then(result => {
      return insertQuestions(Question, result.exams, result.dbConnections)
        .then(() => pick(result, ['students', 'exams']))
    })
    .then(result => insertTakenExams(ExamTaken, result.exams, result.students))
    .then(examsTaken => insertAnswers(Answer, examsTaken))
}

module.exports = db => populateDatabase(db)
