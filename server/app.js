'use strict'

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const httpError = require('http-errors')
const { INTERNAL_SERVER_ERROR, NOT_FOUND } = require('http-status-codes')

const router = require('./router')
const { createError } = require('./shared/error/helpers')

const app = express()
app.use(cors({ origin: process.env.CORS_ALLOWED_ORIGINS }))
app.use(bodyParser.json({ limit: '50mb' }))

// Mount main router
app.use('/api/v1', router)

// Handle non-existing routes
app.use((req, res, next) => {
  next(httpError(NOT_FOUND, 'Access to non-existing route'))
})

// Global error handler
app.use((err, req, res, next) => {
  if (!err.status || err.status === INTERNAL_SERVER_ERROR) {
    return res.status(INTERNAL_SERVER_ERROR).end()
  }

  const { status, message } = err
  res.status(status).json({ error: { status, message } })
})

module.exports = app
