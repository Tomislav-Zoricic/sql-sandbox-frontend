'use strict';

const database = require('./shared/database');

database.initialize()
  .then(() => console.log('Database initialized'))
  .catch(err => console.log('Error occurred', err));
