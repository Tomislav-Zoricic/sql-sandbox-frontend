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
      validate: { isEmail: true },
      unique: { msg: 'This email address is already in use.' }
    },
    password: {
      type: DataTypes.STRING,
      validate: { notEmpty: true, len: [5, 20] }
    },
    role: {
      type: DataTypes.ENUM('PROFESSOR', 'STUDENT')
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  });
};
