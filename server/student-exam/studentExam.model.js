'use strict'

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('student_exam', {
    result: {
      type: DataTypes.FLOAT
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  })
}
