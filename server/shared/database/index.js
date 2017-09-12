'use strict';

const reduce = require('lodash/reduce');
const forEach = require('lodash/foreach');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_URI);

let models = {
  Answer: '../../answer/answer.model',
  Database: '../../database/database.model',
  Exam: '../../exam/exam.model',
  ExamQuestion: '../../exam-question/examQuestion.model',
  Question: '../../question/question.model',
  StudentExam: '../../student-exam/studentExam.model',
  User: '../../user/user.model'
};

models = reduce(models, (dict, path, name) => {
  dict[name] = sequelize.import(path);
  return dict;
}, {});

forEach(models, model => {
  if (model.associate) model.associate(models);
});

const db = Object.assign({
  Sequelize,
  sequelize,
  initialize() { return sequelize.sync({ force: true }); }
}, models);

module.exports = db;
