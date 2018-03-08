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

var _require = require('react-redux'),
    connect = _require.connect;

var InjectChildComponent = require('./Inject.js');

var _require2 = require('react-router-dom'),
    Link = _require2.Link;

var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'header',
        { className: 'header-container' },
        React.createElement(
          'div',
          { className: 'header-content' },
          React.createElement('div', { className: 'wrap-logo' }),
          React.createElement(
            'div',
            { className: 'wrap-options' },
            React.createElement(
              'div',
              { className: 'wrap-slogan' },
              React.createElement(
                'h1',
                { className: 'title' },
                'HACKD\xD3'
              ),
              React.createElement(
                'h2',
                { className: 'subtitle' },
                'CONF ',
                React.createElement(
                  'span',
                  { className: 'year' },
                  '2018'
                )
              )
            ),
            React.createElement(
              'nav',
              null,
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  { className: 'option-selected' },
                  'Speakers'
                ),
                React.createElement(
                  'li',
                  null,
                  'Programacion'
                ),
                React.createElement(
                  'li',
                  null,
                  'Lugar de encuentro'
                ),
                React.createElement(
                  'li',
                  null,
                  'Patrocionadores'
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Header;
}(React.Component);

module.exports = InjectChildComponent(Header, []);