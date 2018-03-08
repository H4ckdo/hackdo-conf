'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _require = require('react-router'),
    Route = _require.Route;

var InjectChildComponent = require('./Inject.js');
var routes = require('../../../../../config/anchors/pages.json');

var Routes = function (_React$Component) {
  (0, _inherits3.default)(Routes, _React$Component);

  function Routes(props) {
    (0, _classCallCheck3.default)(this, Routes);
    return (0, _possibleConstructorReturn3.default)(this, (Routes.__proto__ || (0, _getPrototypeOf2.default)(Routes)).call(this, props));
  }

  (0, _createClass3.default)(Routes, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return routes.map(function (route, index) {
        return React.createElement(Route, (0, _extends3.default)({ key: index }, route, { component: _this2.props[route.component] }));
      });
    }
  }]);
  return Routes;
}(React.Component);

module.exports = InjectChildComponent(Routes, routes.map(function (route) {
  return './' + route.component + '.js';
}));