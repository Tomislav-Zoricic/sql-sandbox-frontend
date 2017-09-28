'use strict'

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: 'This email address is already in use.' },
      validate: { isEmail: true }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true, len: [5, 20] }
    },
    role: {
      type: DataTypes.ENUM('PROFESSOR', 'STUDENT'),
      defaultValue: 'PROFESSOR'
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  })

  User.associate = function (models) {
    User.hasMany(models.Exam, {
      foreignKey: { name: 'professorId', field: 'professor_id' }
    })
    User.hasMany(models.ExamTaken, {
      foreignKey: {
        name: 'studentId',
        field: 'student_id',
        unique: 'ux_exam_taken'
      }
    })
    User.hasMany(models.Answer, {
      foreignKey: { name: 'studentId', field: 'student_id' }
    })
  }

  return User
}
