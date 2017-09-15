'use strict'

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('exam_taken_question', {}, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  })
}
