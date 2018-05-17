'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var sendSubscriptionToServer = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(subscription) {
    var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var rawResponse, content;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!skip) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return');

          case 2:
            _context.next = 4;
            return fetch('/suscribe', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: (0, _stringify2.default)(subscription.toJSON())
            });

          case 4:
            rawResponse = _context.sent;
            _context.next = 7;
            return rawResponse.json();

          case 7:
            content = _context.sent;

            console.log(content);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function sendSubscriptionToServer(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var ReactDOM = require('react-dom');
var InjectChildComponent = require('./Inject.js');
var serviceWorker;

function buildApplicationServerKey() {
  var base64 = window.publicServerKey;
  var rfc4648 = base64.replace(/-/g, '+').replace(/_/g, '/');
  var characters = atob(rfc4648).split('').map(function (character) {
    return character.charCodeAt(0);
  });
  return new Uint8Array(characters);
}

function subscribe() {
  Notification.requestPermission().then(function (result) {
    if (result === 'granted') {
      var options = {
        userVisibleOnly: true,
        applicationServerKey: buildApplicationServerKey()
      };
      navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
        serviceWorkerRegistration.pushManager.subscribe(options).then(function (subscription) {
          console.log('subscription ', subscription);
          sendSubscriptionToServer(subscription);
        });
      });
    }
  });
}

window.subscribe = subscribe;

function tryPushNotification() {
  navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.getSubscription().then(function (subscription) {
      // Do we already have a push message subscription?
      console.log('subscription ', subscription);
      if (subscription) {
        sendSubscriptionToServer(subscription, true);
      } else {
        subscribe();
      }
    });
  });
}
/*
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function (registration) {
    tryPushNotification();

    if (registration.installing) {
      serviceWorker = registration.installing;
      //console.log('installing');
    } else if (registration.waiting) {
      serviceWorker = registration.waiting;
      //console.log('waiting');
    } else if (registration.active) {
      serviceWorker = registration.active;
      //console.log('active');
    }
  }).catch(function (err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    //console.log("NUEVO SERVICE WORKER LISTO PARA TOMAR EL CONTROL")
    window.location.reload();
  });
}
*/

var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Footer = _props.Footer,
          data = _props.data,
          PopUp = _props.PopUp,
          Header = _props.Header,
          SectionDate = _props.SectionDate,
          SectionAbout = _props.SectionAbout,
          SectionSpeakers = _props.SectionSpeakers,
          SectionAgenda = _props.SectionAgenda,
          SectionVenue = _props.SectionVenue,
          SectionSponsors = _props.SectionSponsors,
          SectionTeam = _props.SectionTeam;

      return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(SectionDate, null),
        React.createElement(SectionAbout, null),
        React.createElement(SectionSpeakers, null),
        React.createElement(SectionAgenda, null),
        React.createElement(SectionVenue, null),
        React.createElement(SectionSponsors, null),
        React.createElement(SectionTeam, null),
        React.createElement(Footer, null)
      );
    }
  }]);
  return App;
}(React.Component);

module.exports = InjectChildComponent(App, ['./PopUp.js', './Header.js', './SectionDate.js', './SectionAbout.js', './SectionSpeakers.js', './SectionAgenda.js', './SectionVenue.js', './SectionSponsors.js', './Footer.js', './SectionTeam.js']);