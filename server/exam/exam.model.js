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
      allowNull: false,
      field: 'start_time'
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'end_time'
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  });

  Exam.associate = function (models) {
    Exam.belongsTo(models.User, {
      foreignKey: { name: 'professorId', field: 'professor_id' }
    });
    Exam.belongsToMany(models.User, {
      through: models.StudentExam,
      foreignKey: { name: 'examId', field: 'exam_id' }
    });
    Exam.belongsTo(models.Database);
    Exam.belongsToMany(models.Question, {
      through: models.ExamQuestion
    });
    Exam.hasMany(models.Answer);
  };

  return Exam;
};
