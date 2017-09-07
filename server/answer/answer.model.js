'use strict';

module.exports = function (sequelize, DataTypes) {
  const Answer = sequelize.define('answer', {
    givenQuery: {
      type: DataTypes.STRING
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  });

  Answer.associate = function (models) {
    Answer.belongsTo(models.StudentExam);
    Answer.belongsTo(models.ExamQuestion);
  };

  return Answer;
};
