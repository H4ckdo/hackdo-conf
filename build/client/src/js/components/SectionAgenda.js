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
        { className: 'wrap-section-agenda' },
        React.createElement(
          'section',
          { className: 'section-agenda' },
          React.createElement(
            'article',
            null,
            React.createElement(
              'h1',
              { className: 'section-agenda__title' },
              'Agenda',
              React.createElement('div', { className: 'lower-bar' })
            ),
            React.createElement(
              'ol',
              { className: 'section-agenda__list' },
              React.createElement(
                'h2',
                { className: 'section-agenda__list__title' },
                '8 De junio'
              ),
              React.createElement(
                'li',
                { className: 'section-agenda__list__item' },
                React.createElement(
                  'span',
                  { className: 'section-agenda__list__item__title' },
                  React.createElement(
                    'b',
                    null,
                    '2:00 PM'
                  ),
                  ' - Registro \uD83D\uDD8A\uFE0F'
                ),
                React.createElement(
                  'p',
                  { className: 'section-agenda__list__item__copy' },
                  'Registro de los asistentes.'
                )
              ),
              React.createElement(
                'li',
                { className: 'section-agenda__list__item' },
                React.createElement(
                  'span',
                  { className: 'section-agenda__list__item__title' },
                  React.createElement(
                    'b',
                    null,
                    '3:00 PM'
                  ),
                  ' - Charla',
                  React.createElement('br', null)
                ),
                React.createElement(
                  'p',
                  { className: 'section-agenda__list__item__copy' },
                  React.createElement(
                    'b',
                    null,
                    'Rafael Socarras'
                  ),
                  ' - Expone ',
                  React.createElement(
                    'span',
                    null,
                    'como crear emprendimiento de base tecnologica en colombia.'
                  )
                )
              ),
              React.createElement(
                'li',
                { className: 'section-agenda__list__item' },
                React.createElement(
                  'span',
                  { className: 'section-agenda__list__item__title' },
                  React.createElement(
                    'b',
                    null,
                    '3:30 PM'
                  ),
                  ' - Charla'
                ),
                React.createElement(
                  'p',
                  { className: 'section-agenda__list__item__copy' },
                  React.createElement(
                    'b',
                    null,
                    'Romel P\xE9rez'
                  ),
                  ' - Expone como iniciar tu carrera en programacion con ',
                  React.createElement(
                    'b',
                    null,
                    'Open Source'
                  ),
                  '.'
                )
              ),
              React.createElement(
                'li',
                { className: 'section-agenda__list__item' },
                React.createElement(
                  'span',
                  { className: 'section-agenda__list__item__title' },
                  React.createElement(
                    'b',
                    null,
                    '4:00 PM'
                  ),
                  ' - Charla'
                ),
                React.createElement(
                  'p',
                  { className: 'section-agenda__list__item__copy' },
                  React.createElement(
                    'b',
                    null,
                    'Oscar Rendon'
                  ),
                  ' - Entendiendo machine learning.'
                )
              ),
              React.createElement(
                'li',
                { className: 'section-agenda__list__item' },
                React.createElement(
                  'span',
                  { className: 'section-agenda__list__item__title' },
                  React.createElement(
                    'b',
                    null,
                    '4:30 PM'
                  ),
                  ' - Pausa activa \uD83C\uDF55'
                ),
                React.createElement(
                  'p',
                  { className: 'section-agenda__list__item__copy' },
                  'Refrigerios'
                )
              ),
              React.createElement(
                'li',
                { className: 'section-agenda__list__item' },
                React.createElement(
                  'span',
                  { className: 'section-agenda__list__item__title' },
                  React.createElement(
                    'b',
                    null,
                    '5:00 PM'
                  ),
                  ' - Charla'
                ),
                React.createElement(
                  'p',
                  { className: 'section-agenda__list__item__copy' },
                  React.createElement(
                    'b',
                    null,
                    'Jota Rodriguez'
                  ),
                  ' - Realidad aumentada.'
                )
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