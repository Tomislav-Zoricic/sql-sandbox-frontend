'use strict'

const httpErrors = require('http-errors')
const { BAD_REQUEST } = require('http-status-codes')

function passToErrorHandler(err, next) {
  if (!err.status) err.status = BAD_REQUEST
  return next(err)
}

function createError(code, message) {
  return Promise.reject(httpErrors(code, message))
}

module.exports = {
  passToErrorHandler,
  createError
}
