'use strict'

module.exports = function (sequelize, DataTypes) {
  const Exam = sequelize.define('exam', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: 'The specified exam name is already in use.' },
      validate: { notEmpty: true }
    },
    academicYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'academic_year'
    },
    duration: {
      type: DataTypes.INTEGER,  // in mins
      allowNull: false
    },
    easyPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'easy_points'
    },
    mediumPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'medium_points'
    },
    hardPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'hard_points'
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  })

  Exam.associate = function (models) {
    Exam.belongsTo(models.User, {
      as: 'professor',
      foreignKey: { name: 'professorId', field: 'professor_id' }
    })
    Exam.hasMany(models.ExamTaken, {
      foreignKey: { unique: 'ux_exam_taken' }
    })
    Exam.belongsTo(models.DbConnection)
    Exam.belongsToMany(models.Question, {
      through: models.ExamQuestion
    })
  }

  return Exam
}
