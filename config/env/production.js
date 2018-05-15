const ip = require('ip')
module.exports = {
  PORT: process.env.PORT,
  HOST: 'localhost',
  URI: 'mongodb://localhost/hackdo-web',
  FIXTURES: false,
  SECRET_PUSH_KEY: process.env.SECRET_PUSH_KEY
}
