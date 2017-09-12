'use strict';

module.exports = function (sequelize, DataTypes) {
  const Answer = sequelize.define('answer', {
    givenQuery: {
      type: DataTypes.STRING,
      field: 'given_query'
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  });

  Answer.associate = function (models) {
    Answer.belongsTo(models.User);
    Answer.belongsTo(models.Exam);
    Answer.belongsTo(models.Question);
  };

  return Answer;
};
