'use strict'

module.exports = function (sequelize, DataTypes) {
  const DbConnection = sequelize.define('db_connection', {
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
    },
    host: {
      type: DataTypes.STRING,
      defaultValue: process.env.SERVER_HOST
    },
    port: {
      type: DataTypes.INTEGER,
      defaultValue: 3306  // default MySQL port
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  })

  DbConnection.associate = function (models) {
    DbConnection.hasMany(models.Exam)
    DbConnection.hasMany(models.Question, {
      foreignKey: { unique: 'ux_question' }
    })
  }

  return DbConnection
}
