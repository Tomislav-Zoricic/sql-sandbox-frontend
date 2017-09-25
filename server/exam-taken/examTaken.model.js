'use strict'

module.exports = function (sequelize, DataTypes) {
  const ExamTaken = sequelize.define('exam_taken', {
    score: {
      type: DataTypes.FLOAT
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  })

  ExamTaken.associate = function (models) {
    ExamTaken.belongsTo(models.Exam, {
      foreignKey: { unique: 'ux_exam_taken' }
    })
    ExamTaken.belongsTo(models.User, {
      as: 'student',
      foreignKey: {
        name: 'studentId',
        field: 'student_id',
        unique: 'ux_exam_taken'
      }
    })
    ExamTaken.hasMany(models.Answer)
    ExamTaken.belongsToMany(models.Question, {
      through: models.ExamTakenQuestion
    })
  }

  return ExamTaken
}
