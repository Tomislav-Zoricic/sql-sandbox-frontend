'use strict'

const express = require('express')
const router = express.Router()
const ctrl = require('./user.controller')

router.get('/users', ctrl.list)

module.exports = router
