'use strict';

module.exports = function (sequelize, DataTypes) {
  const Exam = sequelize.define('exam', {
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true, len: [5, 20] }
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  });

  Exam.associate = function (models) {
    Exam.belongsTo(models.User, {
      foreignKey: 'professorId'
    });
    Exam.belongsToMany(models.User, {
      through: models.StudentExam,
      foreignKey: 'examId'
    });
    Exam.belongsTo(models.Database);
    Exam.belongsToMany(models.Question, {
      through: models.ExamQuestion
    });
  };

  return Exam;
};
