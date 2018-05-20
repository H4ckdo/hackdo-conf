const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  auth: {
    type: String
  },
  p256dh: {
    type: String
  }
})

module.exports = mongoose.model('Users', UsersSchema);
