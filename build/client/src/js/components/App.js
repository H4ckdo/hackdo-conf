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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var ReactDOM = require('react-dom');
var InjectChildComponent = require('./Inject.js');
/*
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function (registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function (err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
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