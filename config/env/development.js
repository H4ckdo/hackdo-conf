const ip = require('ip')
const local = require('../local.js');
module.exports = {
  PORT: 3009,
  HOST: 'localhost'/*ip.address()*/,
  URI: local.URI,
  MODEL_START: 'safe',
  FIXTURES: true,
  SECRET_PUSH_KEY: local.SECRET_PUSH_KEY
}
