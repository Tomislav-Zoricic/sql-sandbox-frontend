'use strict'

const { User } = require('../shared/database')

function list(req, res) {
  const attributes = ['firstName', 'lastName', 'email', 'role']
  return User
    .findAll({ attributes })
    .then(users => res.json({ data: users }))
}

module.exports = {
  list
}
