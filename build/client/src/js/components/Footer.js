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

var Footer = function (_React$Component) {
  (0, _inherits3.default)(Footer, _React$Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);
    return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).call(this));
  }

  (0, _createClass3.default)(Footer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'footer',
        { className: 'footer-container' },
        React.createElement(
          'div',
          { className: 'footer-container__contact' },
          React.createElement(
            'h2',
            { className: 'footer-container__contact__title' },
            'Contacto'
          ),
          React.createElement(
            'p',
            { className: 'footer-container__contact__copy' },
            'S\xEDguenos en la redes sociales',
            React.createElement(
              'span',
              { className: 'footer-container__contact__copy__ol__item' },
              React.createElement(
                'a',
                { href: 'https://www.facebook.com/groups/1462262297359495/', target: '_blank' },
                React.createElement('img', { src: '/assets/images/fb-icon.png' })
              )
            ),
            React.createElement(
              'span',
              { className: 'footer-container__contact__copy__ol__item' },
              React.createElement(
                'a',
                { href: 'https://twitter.com/H4ckdo', target: '_blank' },
                React.createElement('img', { src: '/assets/images/tw-icon.png' })
              )
            ),
            React.createElement('br', null),
            'o escr\xEDbenos un email a ',
            React.createElement(
              'b',
              null,
              'h4ckdo@gmail.com'
            )
          )
        )
      );
    }
  }]);
  return Footer;
}(React.Component);

module.exports = InjectChildComponent(Footer, []);