'use strict'

module.exports = function(sequelize, DataTypes) {
  const Question = sequelize.define('question', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'ux_question',
      validate: { notEmpty: true }
    },
    correctQuery: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'correct_query',
      validate: { notEmpty: true }
    },
    difficulty: {
      type: DataTypes.ENUM('EASY', 'MEDIUM', 'HARD'),
      defaultValue: 'EASY'
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  })

  Question.associate = function (models) {
    Question.belongsTo(models.DbConnection, {
      foreignKey: { unique: 'ux_question' }
    })
    Question.belongsToMany(models.Exam, {
      through: models.ExamQuestion
    })
    Question.belongsToMany(models.ExamTaken, {
      through: models.ExamTakenQuestion
    })
    Question.hasMany(models.Answer)
  }

  return Question
}
