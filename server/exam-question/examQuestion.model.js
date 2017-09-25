'use strict'

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('exam_question', {
    difficulty: {
      type: DataTypes.ENUM('EASY', 'MEDIUM', 'HARD'),
      defaultValue: 'EASY'
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  })
}
