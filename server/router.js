'use strict'

const express = require('express')
const userRouter = require('./user')
const dbConnectionRouter = require('./db-connection')

const router = express.Router()
router.use('/', userRouter)
router.use('/', dbConnectionRouter)

module.exports = router
