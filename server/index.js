'use strict'

const database = require('./shared/database')
const app = require('./app')

const port = process.env.SERVER_PORT

database.initialize()
  .then(() => console.log('Database initialized'))
  .then(() => app.listen(port))
  .then(() => console.log(`Server listening on port ${port}`))
  .catch(err => console.log('Error occurred', err))
