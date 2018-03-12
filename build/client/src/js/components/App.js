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

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var ReactDOM = require('react-dom');

var _require = require('react-redux'),
    connect = _require.connect;

var InjectChildComponent = require('./Inject.js');

var _require2 = require('react-router-dom'),
    Link = _require2.Link;

var App = (_dec = connect(function (store) {
  var Users = store.Users.data;
  //console.log('store ', store);
  return { Users: Users };
}), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));
    // console.log('props ', this.props)
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          PopUp = _props.PopUp,
          Header = _props.Header,
          SectionDate = _props.SectionDate,
          SectionAbout = _props.SectionAbout,
          SectionSpeakers = _props.SectionSpeakers;

      return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(SectionDate, null),
        React.createElement(SectionAbout, null),
        React.createElement(SectionSpeakers, null)
      );
    }
  }]);
  return App;
}(React.Component)) || _class);


module.exports = InjectChildComponent(App, ['./PopUp.js', './Header.js', './SectionDate.js', './SectionAbout.js', './SectionSpeakers.js']);