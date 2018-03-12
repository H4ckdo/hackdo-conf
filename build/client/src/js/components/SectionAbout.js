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
              'FUNDACI\xD3N HACKD\xD3',
              React.createElement('div', { className: 'lower-bar' })
            ),
            React.createElement(
              'p',
              { className: 'section-about__article__copy' },
              'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
            )
          ),
          React.createElement(
            'article',
            { className: 'section-about__article' },
            React.createElement('div', { className: 'section-about__article-image' })
          )
        )
      );
    }
  }]);
  return SectionAbout;
}(React.Component);

module.exports = InjectChildComponent(SectionAbout, []);