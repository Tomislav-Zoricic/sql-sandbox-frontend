'use strict'

module.exports = function (sequelize, DataTypes) {
  const Answer = sequelize.define('answer', {
    givenQuery: {
      type: DataTypes.STRING,
      field: 'given_query'
    },
    correct: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  })

  Answer.associate = function (models) {
    Answer.belongsTo(models.User, {
      as: 'student',
      foreignKey: { name: 'studentId', field: 'student_id' }
    })
    Answer.belongsTo(models.ExamTaken)
    Answer.belongsTo(models.Question)
  }

  return Answer
}
