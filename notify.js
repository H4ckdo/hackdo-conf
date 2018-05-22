const webpush = require('web-push');
const { SECRET_PUSH_KEY } = require('./config/local.js');
const publicServerKey = "BPlXiFG6NINNh-j7Tqhcgd2xMXYDM9_r1Wuuhbe4KB3TrCwaXQjXsdnCD_iOlh6tGF8Hyz86TMtzNxL2DJpA-Mc"

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  publicServerKey,
  SECRET_PUSH_KEY
)

const subscription = {
  endpoint: "https://fcm.googleapis.com/fcm/send/diXkZCPuZU8:APA91bG0rJsI5cGwqd8BCVlghCoYNSMvMZfuiiBuZkXPW2jO4JhKqdldOMcvVF2zWUH6Ax-qsXOXkzgAhwPJsqnm7FXbCPe57rKHAg2Oc0F3palSX2XKflAtOxuN-Ii2pDNEMH39gRCI",
  "expirationTime": null,
  "keys": {
    "p256dh": "BJoEE2_xU1MpOA7IrZUaw_X2t6yDNUr6m-1NhQiVF2LCO9Sgrk-ZZKQ0Mf9cyX3W2O9v-8PMQ5wGUM2fEdum6UM=",
    "auth": "ttLCVG55I8Wi33gS9ORYKA=="
  }
}

const notification = JSON.stringify({
  title: 'Notificacion de prueba',
  body: 'Test'
});

webpush.sendNotification(subscription, notification)
  .then(done => {
      console.log('done ', done);
  })
  .catch(error => {
    console.log('error ', error);
  })
