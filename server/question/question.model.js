'use strict';

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
      unique: 'ux_question',
      validate: { notEmpty: true }
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  });

  Question.associate = function (models) {
    Question.belongsTo(models.Database);
    Question.belongsToMany(models.Exam, {
      through: models.ExamQuestion
    });
  };

  return Question;
};
