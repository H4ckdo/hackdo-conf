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

var SectionSpeakers = function (_React$Component) {
  (0, _inherits3.default)(SectionSpeakers, _React$Component);

  function SectionSpeakers(props) {
    (0, _classCallCheck3.default)(this, SectionSpeakers);
    return (0, _possibleConstructorReturn3.default)(this, (SectionSpeakers.__proto__ || (0, _getPrototypeOf2.default)(SectionSpeakers)).call(this, props));
  }

  (0, _createClass3.default)(SectionSpeakers, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'wrap-section-speakers' },
        React.createElement(
          'section',
          { className: 'section-speakers' },
          React.createElement(
            'h1',
            { className: 'section-speakers__title' },
            'Speakers',
            React.createElement('div', { className: 'lower-bar' })
          ),
          React.createElement(
            'article',
            { className: 'section-speakers__content' },
            React.createElement(
              'ol',
              { className: 'section-speakers__content__list' },
              React.createElement(
                'li',
                { className: 'section-speakers__content__list__item' },
                React.createElement('div', { className: 'section-speakers__content__list__item__image' }),
                React.createElement(
                  'span',
                  { className: 'section-speakers__content__list__item__name' },
                  'Nombre del speakers'
                ),
                React.createElement(
                  'p',
                  { className: 'section-speakers__content__list__item__copy' },
                  'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
                ),
                React.createElement(
                  'a',
                  { className: '', href: '#', target: '_blank' },
                  '@Twiter'
                )
              ),
              React.createElement(
                'li',
                { className: 'section-speakers__content__list__item' },
                React.createElement('div', { className: 'section-speakers__content__list__item__image' }),
                React.createElement(
                  'span',
                  { className: 'section-speakers__content__list__item__name' },
                  'Nombre del speakers'
                ),
                React.createElement(
                  'p',
                  { className: 'section-speakers__content__list__item__copy' },
                  'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
                ),
                React.createElement(
                  'a',
                  { className: '', href: '#', target: '_blank' },
                  '@Twiter'
                )
              ),
              React.createElement(
                'li',
                { className: 'section-speakers__content__list__item' },
                React.createElement('div', { className: 'section-speakers__content__list__item__image' }),
                React.createElement(
                  'span',
                  { className: 'section-speakers__content__list__item__name' },
                  'Nombre del speakers'
                ),
                React.createElement(
                  'p',
                  { className: 'section-speakers__content__list__item__copy' },
                  'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
                ),
                React.createElement(
                  'a',
                  { className: '', href: '#', target: '_blank' },
                  '@Twiter'
                )
              )
            )
          )
        )
      );
    }
  }]);
  return SectionSpeakers;
}(React.Component);

module.exports = InjectChildComponent(SectionSpeakers, []);