'use strict'

const db = require('../shared/database')
const seed = require('../shared/database/seed')

db.sequelize.sync({ force: true })
  .then(() => seed(db))
  .then(() => {
    console.log('DB successfully seeded')
    process.exit()
  })
  .catch((err) => console.log('Error occurred', err))
