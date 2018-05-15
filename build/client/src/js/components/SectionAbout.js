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
var InjectChildComponent = require('./Inject.js');

var _require = require('react-router-dom'),
    Link = _require.Link;

var SectionAbout = function (_React$Component) {
  (0, _inherits3.default)(SectionAbout, _React$Component);

  function SectionAbout() {
    (0, _classCallCheck3.default)(this, SectionAbout);
    return (0, _possibleConstructorReturn3.default)(this, (SectionAbout.__proto__ || (0, _getPrototypeOf2.default)(SectionAbout)).call(this));
  }

  (0, _createClass3.default)(SectionAbout, [{
    key: 'render',
    value: function render() {
      var Gallery = this.props.Gallery;

      return React.createElement(
        'div',
        { className: 'wrap-about' },
        React.createElement(
          'section',
          { className: 'section-about' },
          React.createElement(
            'article',
            { className: 'section-about__article' },
            React.createElement(
              'h1',
              { className: 'section-about__article__title' },
              'Acerca del evento',
              React.createElement('div', { className: 'lower-bar' })
            ),
            React.createElement(
              'p',
              { className: 'section-about__article__copy' },
              React.createElement(
                'b',
                null,
                'Hackd\xF3 Conf'
              ),
              ', es el evento ',
              React.createElement(
                'b',
                null,
                'gratuito'
              ),
              ' anual llevado a cabo por la ',
              React.createElement(
                'b',
                null,
                'Hackd\xF3 Foundation'
              ),
              ' y ',
              React.createElement(
                'b',
                null,
                'Partners'
              ),
              ', que re\xFAne a entusiasta emprendedores y desarrolladores durante tres d\xEDas en la ciudad de Quibd\xF3.',
              React.createElement('br', null),
              React.createElement('br', null),
              'M\xE1s de 2 a\xF1os impactando el ecosistema de base tecnol\xF3gica del Choc\xF3, llegando a m\xE1s de ',
              React.createElement(
                'b',
                null,
                '200 personas'
              ),
              ' con ',
              React.createElement(
                'b',
                null,
                '22 charlas'
              ),
              ' impartidas, ',
              React.createElement(
                'b',
                null,
                '17 talleres sobre 4 lenguajes de programaci\xF3n'
              ),
              ' adem\xE1s de charlas sobre el Internet de las cosas y ',
              React.createElement(
                'b',
                null,
                'programaci\xF3n de hardware'
              ),
              '.'
            )
          ),
          React.createElement(
            'article',
            { className: 'section-about__gallery' },
            React.createElement(Gallery, null)
          )
        )
      );
    }
  }]);
  return SectionAbout;
}(React.Component);

module.exports = InjectChildComponent(SectionAbout, ['./Gallery.js']);