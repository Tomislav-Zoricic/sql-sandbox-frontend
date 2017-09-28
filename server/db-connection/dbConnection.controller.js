'use strict'

const { NOT_FOUND, NO_CONTENT } = require('http-status-codes')
const { DbConnection } = require('../shared/database')
const { createError, passToErrorHandler } = require('../shared/error/helpers')

const NOT_FOUND_MSG = 'DB connection not found'

function list(req, res) {
  const attributes = ['id', 'name', 'host', 'port']
  return DbConnection
    .findAll({ attributes })
    .then(dbConnections => res.json({ data: dbConnections }))
}

function create({ body }, res, next) {
  return DbConnection
    .create(body)
    .then(dbConnection => res.json({ data: dbConnection }))
    .catch(err => passToErrorHandler(err, next))
}

function patch({ body, params }, res, next) {
  return DbConnection
    .findById(params.id)
    .then(dbConnection => dbConnection || createError(NOT_FOUND, NOT_FOUND_MSG))
    .then(dbConnection => dbConnection.update(body))
    .then(dbConnection => res.json({ data: dbConnection }))
    .catch(err => passToErrorHandler(err, next))
}

function remove({ params }, res, next) {
  return DbConnection
    .findById(params.id)
    .then(dbConnection => dbConnection || createError(NOT_FOUND, NOT_FOUND_MSG))
    .then(dbConnection => dbConnection.destroy())
    .then(dbConnection => res.status(NO_CONTENT).send())
    .catch(err => passToErrorHandler(err, next))
}

module.exports = {
  list,
  create,
  patch,
  remove
}
