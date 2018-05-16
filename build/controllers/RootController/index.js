'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webpush = require('web-push');

var _ref = process.env.NODE_ENV === "production" ? require('../../../config/env/production.js') : require('../../../config/env/development.js'),
    SECRET_PUSH_KEY = _ref.SECRET_PUSH_KEY;

webpush.setVapidDetails('mailto:example@yourdomain.org', "BPlXiFG6NINNh-j7Tqhcgd2xMXYDM9_r1Wuuhbe4KB3TrCwaXQjXsdnCD_iOlh6tGF8Hyz86TMtzNxL2DJpA-Mc", SECRET_PUSH_KEY);

/**
 * @class RootController
 * @param  {type} req {description}
 * @param  {type} res {description}
 * @return {type} {description}
 */

var RootController = AttachMethods(_class = function () {
  function RootController() {
    (0, _classCallCheck3.default)(this, RootController);
  }

  (0, _createClass3.default)(RootController, [{
    key: 'suscribe',
    value: function suscribe(req, res) {
      var subscription = req.body;
      debugger;
      var notification = (0, _stringify2.default)({
        title: 'Notificacion de prueba',
        body: 'Test'
      });

      webpush.sendNotification(subscription, notification).then(function (data) {
        return res.json(data);
      }).catch(function (error) {
        return res.json(error);
      });
    }
  }]);
  return RootController;
}()) || _class;

module.exports = RootController;
//# sourceMappingURL=index.js.map