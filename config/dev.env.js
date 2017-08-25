var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  URL: 'http://localhost:3000',
  STATUS_OK: 200
})
