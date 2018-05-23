const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationsSchema = new Schema({
  auth: {
    type: String
  },
  p256dh: {
    type: String
  },
  endpoint: {
    type: String
  },
  expirationTime: {
    type: String
  }
})

module.exports = mongoose.model('Notifications', NotificationsSchema);
