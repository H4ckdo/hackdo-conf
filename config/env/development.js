const ip = require('ip')

module.exports = {
  PORT: 3009,
  HOST: ip.address(),
  URI: 'mongodb://localhost/hackdo-web',
  MODEL_START: 'safe',
  FIXTURES: true
}
