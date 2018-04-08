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

var _sponsor_ = require('../../images/sponsor_1.jpg');

var _sponsor_2 = _interopRequireDefault(_sponsor_);

var _sponsor_3 = require('../../images/sponsor_2.jpg');

var _sponsor_4 = _interopRequireDefault(_sponsor_3);

var _sponsor_5 = require('../../images/sponsor_3.png');

var _sponsor_6 = _interopRequireDefault(_sponsor_5);

var _sponsor_7 = require('../../images/sponsor_4.jpg');

var _sponsor_8 = _interopRequireDefault(_sponsor_7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var InjectChildComponent = require('./Inject.js');

var SectionSponsors = function (_React$Component) {
  (0, _inherits3.default)(SectionSponsors, _React$Component);

  function SectionSponsors() {
    (0, _classCallCheck3.default)(this, SectionSponsors);
    return (0, _possibleConstructorReturn3.default)(this, (SectionSponsors.__proto__ || (0, _getPrototypeOf2.default)(SectionSponsors)).call(this));
  }

  (0, _createClass3.default)(SectionSponsors, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'wrap-sponsors' },
        React.createElement(
          'section',
          { className: 'section-sponsors' },
          React.createElement(
            'article',
            { className: 'section-sponsors__article' },
            React.createElement(
              'h1',
              { className: 'section-sponsors__article__title' },
              'Patrocinadores',
              React.createElement('div', { className: 'lower-bar' })
            ),
            React.createElement(
              'p',
              { className: 'section-sponsors__article__copy' },
              'Gracias a estos patrocinadores la ',
              React.createElement(
                'b',
                null,
                'Hackd\xF3 conf'
              ),
              ' es posible, ayudanos y convi\xE9rtete en un patrocinador tu tambien',
              React.createElement(
                'button',
                { className: 'section-sponsors__article__copy__join' },
                'Unirse'
              )
            )
          ),
          React.createElement(
            'article',
            { className: 'section-sponsors__article__list' },
            React.createElement(
              'h2',
              { className: 'section-sponsors__article__list__gold__title' },
              'Gold'
            ),
            React.createElement(
              'ol',
              { className: 'section-sponsors__article__list__gold' },
              React.createElement(
                'li',
                { className: 'section-sponsors__article__list__gold__item' },
                React.createElement(
                  'a',
                  { href: 'https://nodesource.com', target: '_blank' },
                  React.createElement('img', { className: 'section-sponsors__article__list__gold__img', src: '' + _sponsor_2.default })
                )
              ),
              React.createElement(
                'li',
                { className: 'section-sponsors__article__list__gold__item' },
                React.createElement(
                  'a',
                  { href: 'http://www.samitic.com/', target: '_blank' },
                  React.createElement('img', { className: 'section-sponsors__article__list__gold__img', src: '' + _sponsor_4.default })
                )
              ),
              React.createElement(
                'li',
                { className: 'section-sponsors__article__list__gold__item' },
                React.createElement(
                  'a',
                  { href: 'https://s4n.co/', target: '_blank' },
                  React.createElement('img', { className: 'section-sponsors__article__list__gold__img', src: '' + _sponsor_6.default })
                )
              )
            ),
            React.createElement(
              'h2',
              { className: 'section-sponsors__article__list__silver__title' },
              'Silver'
            ),
            React.createElement(
              'ol',
              { className: 'section-sponsors__article__list__silver' },
              React.createElement(
                'li',
                { className: 'section-sponsors__article__list__silver__item' },
                React.createElement(
                  'a',
                  { href: 'http://enamoratedelchoco.co/', target: '_blank' },
                  React.createElement('img', { className: 'section-sponsors__article__list__silver__img', src: '' + _sponsor_8.default })
                )
              )
            )
          )
        )
      );
    }
  }]);
  return SectionSponsors;
}(React.Component);

module.exports = InjectChildComponent(SectionSponsors, []);