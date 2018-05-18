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
              'div',
              { className: 'section-agenda__wrap_dates' },
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
                      '1:00 PM'
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
                      '2:30 PM'
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
                    ' - ',
                    React.createElement(
                      'span',
                      null,
                      'Como crear emprendimiento de base tecnologica en colombia.'
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
                      '3:00 PM'
                    ),
                    ' - Charla'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    React.createElement(
                      'b',
                      null,
                      'Santiago Bernal'
                    ),
                    ' - Buscando en el internet de las cosas con shodan.'
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
                      '4:00 PM'
                    ),
                    ' - Pausa activa \uD83C\uDF55'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    'Refrigerios.'
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
                      'Romel P\xE9rez'
                    ),
                    ' - Como iniciar tu carrera en la programacion con ',
                    React.createElement(
                      'b',
                      null,
                      'Open Source'
                    ),
                    '.'
                  )
                )
              ),
              React.createElement(
                'ol',
                { className: 'section-agenda__list' },
                React.createElement(
                  'h2',
                  { className: 'section-agenda__list__title' },
                  '9 De junio'
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
                      '8:00 AM'
                    ),
                    ' - Charla'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    React.createElement(
                      'b',
                      null,
                      'Yuji Kiriki'
                    ),
                    ' - Habilidades relevantes de un desarrollador de software.'
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
                      '8:30 AM'
                    ),
                    ' - Charla'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    React.createElement(
                      'b',
                      null,
                      'Jarlinton Moreno Zea'
                    ),
                    ' - Machine learning y complex network.'
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
                      '9:00 AM'
                    ),
                    ' - Charla'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    React.createElement(
                      'b',
                      null,
                      'Giovanny Beltran '
                    ),
                    ' - TBD'
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
                      '9:30 PM'
                    ),
                    ' - Pausa activa \uD83C\uDF55'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    'Refrigerios.'
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
                      '9:45 AM'
                    ),
                    ' - Charla'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    React.createElement(
                      'b',
                      null,
                      'Valeria Garcia Gonzalez'
                    ),
                    ' - Como dise\xF1ar y desarrollar interfaces pensando en patrones y componentes.'
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
                      '10:15 AM'
                    ),
                    ' - Charla'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    React.createElement(
                      'b',
                      null,
                      'Giovanny Gongora'
                    ),
                    ' - TBD'
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
                      '11:15 AM'
                    ),
                    ' - Charla'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    React.createElement(
                      'b',
                      null,
                      'Julian Duque'
                    ),
                    ' - C\xF3mo contribuir a Node.js y Open Source'
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
                      '1:00 PM'
                    ),
                    ' - Charla'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    React.createElement(
                      'b',
                      null,
                      'Alejandra Giraldo'
                    ),
                    ' - Asynchronous Javascript, Promesas & Observables.'
                  )
                )
              ),
              React.createElement(
                'ol',
                { className: 'section-agenda__list' },
                React.createElement(
                  'h2',
                  { className: 'section-agenda__list__title' },
                  '10 De junio'
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
                      '9:00 AM'
                    ),
                    ' - Taller'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    React.createElement(
                      'b',
                      null,
                      'Juli\xE1n Duque'
                    ),
                    ' - Construyendo el backend de una una aplicaci\xF3n web con ',
                    React.createElement(
                      'b',
                      null,
                      'Node.js'
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
                      '9:00 AM'
                    ),
                    ' - Taller'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    React.createElement(
                      'b',
                      null,
                      'Juan Pablo Correa Rend\xF3n'
                    ),
                    ' - Como construir un API REST en Scala con ',
                    React.createElement(
                      'b',
                      null,
                      'Akka HTTP'
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
                      '10:00 AM'
                    ),
                    ' - Taller'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    React.createElement(
                      'b',
                      null,
                      'Laura Camacho V\xE1squez'
                    ),
                    ' - L\xF3gica matem\xE1tica mediante el uso de un lenguaje declarativo ',
                    React.createElement(
                      'b',
                      null,
                      '(Prolog)'
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
                      '10:00 AM'
                    ),
                    ' - Taller'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    React.createElement(
                      'b',
                      null,
                      'Alejandra Giraldo'
                    ),
                    ' - Construyendo el frontend de una aplicaci\xF3n web con ',
                    React.createElement(
                      'b',
                      null,
                      'Angular'
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
                      '11:00 AM'
                    ),
                    ' - Taller'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    React.createElement(
                      'b',
                      null,
                      'Valeria Garcia Gonzalez'
                    ),
                    ' - Como dise\xF1ar y desarrollar interfaces pensando en patrones y componentes.'
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
                      '11:00 AM'
                    ),
                    ' - Taller'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    React.createElement(
                      'b',
                      null,
                      'Harlen giraldo ortega'
                    ),
                    ' - Uso de las progresive web apps.'
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
                      '2:00 PM'
                    ),
                    ' - Taller'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    React.createElement(
                      'b',
                      null,
                      'Juan David Castillo Betancur'
                    ),
                    ' - Haciendo c\xF3digo mas expresivo, seguro y mantenible con programacion funcional.'
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
                    ' - Taller'
                  ),
                  React.createElement(
                    'p',
                    { className: 'section-agenda__list__item__copy' },
                    React.createElement(
                      'b',
                      null,
                      'David Castillo'
                    ),
                    ' - Que es Docker y para que sirve.'
                  )
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