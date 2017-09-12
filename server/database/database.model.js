'use strict'

module.exports = function (sequelize, DataTypes) {
  const Database = sequelize.define('db_connection', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: 'The specified database name is already in use.' },
      validate: { notEmpty: true }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true, len: [5, 20] }
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  })

  Database.associate = function (models) {
    Database.hasMany(models.Exam)
    Database.hasMany(models.Question, {
      foreignKey: { unique: 'ux_question' }
    })
  }

  return Database
}
