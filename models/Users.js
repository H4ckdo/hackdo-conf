const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { validWord } = require('../client/shared/validator.js');

const UsersSchema = new Schema({
  fullname: {
    type: String,
    validate: [validWord]
  },
  email: {
    type: String,
    validate: [validWord],
    unique: true
  }
})

module.exports = mongoose.model('Users', UsersSchema);
