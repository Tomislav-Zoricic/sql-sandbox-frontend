'use strict'

const express = require('express')
const router = express.Router()
const ctrl = require('./dbConnection.controller')

router
  .route('/db-connections')
  .get(ctrl.list)
  .post(ctrl.create)

router
  .route('/db-connections/:id')
  .patch(ctrl.patch)
  .delete(ctrl.remove)

module.exports = router
