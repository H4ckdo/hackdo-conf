const webpush = require('web-push');
const { SECRET_PUSH_KEY } = require('./config/local.js');
const publicServerKey = "BPlXiFG6NINNh-j7Tqhcgd2xMXYDM9_r1Wuuhbe4KB3TrCwaXQjXsdnCD_iOlh6tGF8Hyz86TMtzNxL2DJpA-Mc"
const setDependencies = require('./config/globals.js');

const notification = JSON.stringify({
  title: 'Hola',
  body: `La inteligencia artificial es uno de nuestros temas claves y @jarlinton_zea nos hablará acerca de Aprendizaje Máquina y Redes Complejas!!`
});

const errorStarting = (error) => {
  console.log('Unable to bootstrap the app ', error);
}

const bootstrap = async (params) => {
  const connection = require('./config/connection.js');
  let { ok, result, error } = await connection();
  if (ok) {
    let subcribers = await Notifications.find({
      endpoint: { $exists: true },
      auth: { $exists: true },
      p256dh: { $exists: true }
    })
    if (subcribers && subcribers.length) {
      webpush.setVapidDetails(
        'mailto:example@yourdomain.org',
        publicServerKey,
        SECRET_PUSH_KEY
      )
      let amountNotified = 0;
      for(let i = 0; i < subcribers.length; i++) {
        let subcriber = subcribers[i];
        let { endpoint = '', p256dh = '', auth = '' } = subcriber;
        const subscription = {
          expirationTime: null,
          endpoint,
          keys: { p256dh, auth }
        }
        try {
          let submitNotification = await webpush.sendNotification(subscription, notification);
          if (submitNotification.statusCode == 201 || submitNotification.statusCode == 200) amountNotified++;
          console.log('submitNotification ', submitNotification.statusCode);
        } catch(error) {
          errorStarting(error);
        }
      }
      console.log('amountNotified: ', amountNotified)
      process.exit(0);
    } else {
      //console.log(subcribers)
    }
  }
}

setDependencies()
  .then(bootstrap)
  .catch(errorStarting)


/*
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

{
  endpoint: { $exists: true },
  auth: { $exists: true },
  p256dh: { $exists: true }
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
*/
