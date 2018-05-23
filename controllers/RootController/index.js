const webpush = require('web-push');
const environment = process.env.NODE_ENV;
const { SECRET_PUSH_KEY } = process.env.NODE_ENV === "production" ? require('../../config/env/production.js') : require('../../config/env/development.js');
const publicServerKey = "BPlXiFG6NINNh-j7Tqhcgd2xMXYDM9_r1Wuuhbe4KB3TrCwaXQjXsdnCD_iOlh6tGF8Hyz86TMtzNxL2DJpA-Mc"
const path = require('path');

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  publicServerKey,
  SECRET_PUSH_KEY
)


/**
 * @class RootController
 * @param  {type} req {description}
 * @param  {type} res {description}
 * @return {type} {description}
 */
class RootController {
  sw(req, res) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    debugger;
    console.log("ENTRAAAA");
    res.sendFile(path.resolve(__dirname, '../RootController/../../client/sw.js'));
  }

  main(req, res) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.render('index', { environment, publicServerKey })
  }

  async update(req, res) {
    let subscription = req.body;
    let { keys, endpoint = '' } = subscription;
    let { auth = '', p256dh = '' } = keys;
    let existSubscription = await surePromise(
      Users.findOne({ p256dh })
    )
    if (existSubscription.ok && existSubscription.result)  {
      let { ok, error, result } = await surePromise(
        Promise.all([
          Users.remove({ p256dh }),
          Notifications.create({ auth, p256dh, endpoint })
        ])
      )
      if (error) console.log('error ', error);
    }
    if (existSubscription.error) console.log('error ', error);
    res.json({ ok: true });
  }

  async suscribe(req, res) {
    let subscription = req.body;
    debugger;
    const notification = JSON.stringify({
      title: 'Notificaciones Activadas',
      body: 'Recibiras notificaciones del evento pronto :D'
    });
    let { keys, endpoint = '' } = subscription;
    let { auth = '', p256dh = '' } = keys;
    let { ok, error, result } = await surePromise(
      Notifications.create({ auth, p256dh, endpoint })
    )
    debugger;
    if (ok) {
      let notificationResult = await surePromise(
        webpush.sendNotification(subscription, notification)
      )
      debugger;
      if (notificationResult.ok) return res.json(notificationResult.result);
      debugger;
      res.json(notificationResult.error);
    } else {
      debugger;
      res.json(error);
    }
  }
}

module.exports = RootController;

