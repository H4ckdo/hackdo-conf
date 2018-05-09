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

var _sponsor_9 = require('../../images/sponsor_5.jpg');

var _sponsor_10 = _interopRequireDefault(_sponsor_9);

var _sponsor_11 = require('../../images/sponsor_6.jpg');

var _sponsor_12 = _interopRequireDefault(_sponsor_11);

var _sponsor_13 = require('../../images/sponsor_7.png');

var _sponsor_14 = _interopRequireDefault(_sponsor_13);

var _sponsor_15 = require('../../images/sponsor_8.jpg');

var _sponsor_16 = _interopRequireDefault(_sponsor_15);

var _sponsor_17 = require('../../images/sponsor_9.jpg');

var _sponsor_18 = _interopRequireDefault(_sponsor_17);

var _sponsor_19 = require('../../images/sponsor_10.jpg');

var _sponsor_20 = _interopRequireDefault(_sponsor_19);

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
    key: 'join',
    value: function join() {
      //window.location.href = 'https://goo.gl/forms/fABJGuh1bqm3Ua5g2';
      window.open("https://goo.gl/forms/fABJGuh1bqm3Ua5g2");
    }
  }, {
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
                'Hackd\xF3 Conf'
              ),
              ' es posible, ay\xFAdanos y convi\xE9rtete en un patrocinador tu tambi\xE9n',
              React.createElement(
                'button',
                { className: 'section-sponsors__article__copy__join', onClick: this.join.bind() },
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
              ),
              React.createElement(
                'li',
                { className: 'section-sponsors__article__list__gold__item' },
                React.createElement(
                  'a',
                  { href: '#', target: '_blank' },
                  React.createElement('img', { className: 'section-sponsors__article__list__gold__img', src: '' + _sponsor_16.default })
                )
              ),
              React.createElement(
                'li',
                { className: 'section-sponsors__article__list__gold__item' },
                React.createElement(
                  'a',
                  { href: 'http://www.comfachoco.com.co/', target: '_blank' },
                  React.createElement('img', { className: 'section-sponsors__article__list__gold__img', src: '' + _sponsor_10.default })
                )
              ),
              React.createElement(
                'li',
                { className: 'section-sponsors__article__list__gold__item' },
                React.createElement(
                  'a',
                  { href: 'https://twitter.com/colombia_dev', target: '_blank' },
                  React.createElement('img', { className: 'section-sponsors__article__list__gold__img', src: '' + _sponsor_12.default })
                )
              ),
              React.createElement(
                'li',
                { className: 'section-sponsors__article__list__gold__item' },
                React.createElement(
                  'a',
                  { href: 'http://www.comfachoco.com.co/', target: '_blank' },
                  React.createElement('img', { className: 'section-sponsors__article__list__gold__img', src: '' + _sponsor_18.default })
                )
              ),
              React.createElement(
                'li',
                { className: 'section-sponsors__article__list__gold__item' },
                React.createElement(
                  'a',
                  { href: 'http://www.comfachoco.com.co/', target: '_blank' },
                  React.createElement('img', { className: 'section-sponsors__article__list__gold__img', src: '' + _sponsor_20.default })
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
              ),
              React.createElement(
                'li',
                { className: 'section-sponsors__article__list__silver__item' },
                React.createElement(
                  'a',
                  { href: 'http://www.camarachoco.org.co/', target: '_blank' },
                  React.createElement('img', { className: 'section-sponsors__article__list__silver__img', src: '' + _sponsor_14.default })
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