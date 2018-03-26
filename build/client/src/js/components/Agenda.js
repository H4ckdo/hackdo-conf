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

var _require = require('react-router-dom'),
    Link = _require.Link;

var InjectChildComponent = require('./Inject.js');

var Agenda = function (_React$Component) {
  (0, _inherits3.default)(Agenda, _React$Component);

  function Agenda(props) {
    (0, _classCallCheck3.default)(this, Agenda);
    return (0, _possibleConstructorReturn3.default)(this, (Agenda.__proto__ || (0, _getPrototypeOf2.default)(Agenda)).call(this, props));
  }

  (0, _createClass3.default)(Agenda, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'wrap-agenda-section' },
        React.createElement(
          'section',
          { className: 'agenda-section' },
          React.createElement(
            'ol',
            null,
            React.createElement(
              'span',
              null,
              '16 DE JUNIO'
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'span',
                null,
                'Introduccion'
              ),
              React.createElement(
                'p',
                null,
                'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
              )
            )
          )
        )
      );
    }
  }]);
  return Agenda;
}(React.Component);

module.exports = InjectChildComponent(Agenda, []);