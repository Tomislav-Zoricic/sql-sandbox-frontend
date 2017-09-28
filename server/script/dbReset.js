'use strict'

const db = require('../shared/database')

db.sequelize.sync({ force: true })
  .then(() => {
    console.log('DB successfully reset')
    process.exit(0)
  })
  .catch(err => console.log('Error occurred', err))
