'use strict';

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
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
  });

  User.associate = function (models) {
    User.hasMany(models.Exam, {
      foreignKey: 'professorId'
    });
    User.belongsToMany(models.Exam, {
      through: models.StudentExam,
      foreignKey: 'studentId'
    });
  };

  return User;
};
