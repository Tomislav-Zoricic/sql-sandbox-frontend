'use strict';

module.exports = function (sequelize, DataTypes) {
  const StudentExam = sequelize.define('student_exam', {
    result: {
      type: DataTypes.FLOAT
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  });

  StudentExam.associate = function (models) {
    StudentExam.hasMany(models.Answer);
  };

  return StudentExam;
};
