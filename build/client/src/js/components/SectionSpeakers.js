'use strict';

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _speaker_ = require('../../images/speaker_1.jpg');

var _speaker_2 = _interopRequireDefault(_speaker_);

var _speaker_3 = require('../../images/speaker_2.jpg');

var _speaker_4 = _interopRequireDefault(_speaker_3);

var _speaker_5 = require('../../images/speaker_3.jpg');

var _speaker_6 = _interopRequireDefault(_speaker_5);

var _speaker_7 = require('../../images/speaker_4.jpg');

var _speaker_8 = _interopRequireDefault(_speaker_7);

var _speaker_9 = require('../../images/speaker_5.jpg');

var _speaker_10 = _interopRequireDefault(_speaker_9);

var _speaker_11 = require('../../images/speaker_6.jpg');

var _speaker_12 = _interopRequireDefault(_speaker_11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');


var InjectChildComponent = require('./Inject.js');

var SectionSpeakers = function (_React$Component) {
  (0, _inherits3.default)(SectionSpeakers, _React$Component);

  function SectionSpeakers(props) {
    (0, _classCallCheck3.default)(this, SectionSpeakers);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SectionSpeakers.__proto__ || (0, _getPrototypeOf2.default)(SectionSpeakers)).call(this, props));

    _this.state = {
      speakers: [{
        image: _speaker_2.default,
        name: 'Julián Duque',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'Developer and Educator - Engineer at ',
          React.createElement(
            'a',
            { target: '_blank', href: 'https://twitter.com/NodeSource' },
            '@NodeSource'
          ),
          ' - Co-Organizer at ',
          React.createElement(
            'a',
            { target: '_blank', href: 'https://twitter.com/Suncoastjs' },
            '@Suncoastjs'
          ),
          ' ',
          React.createElement(
            'a',
            { href: 'https://twitter.com/MedellinJS' },
            '@MedellinJS'
          ),
          ' ',
          React.createElement(
            'a',
            { href: 'https://twitter.com/jsconfco' },
            '@JSConfCo'
          ),
          ' ',
          '{Medellín, St. Petersburg, FL}',
          ' - Sat\xE1n es la Cumbia'
        ),
        link: 'https://twitter.com/julian_duque',
        nickname: '@julian_duque'
      }, {
        image: _speaker_4.default,
        name: 'David Castillo',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'I\u2019m David Castillo, a Software Developer/ Systems Engineer based in Medellin, Colombia. I write code, and run the Medellin DevOps Meetup. I like to photograph stuff from time to time.'
        ),
        link: 'https://twitter.com/castillobgr',
        nickname: '@castillobgr'
      }, {
        image: _speaker_6.default,
        name: 'Fredy E',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'Founder of ',
          React.createElement(
            'a',
            { target: '_blank', href: 'https://twitter.com/H4ckdo' },
            '@H4ckdo'
          ),
          ' + ',
          React.createElement(
            'a',
            { target: '_blank', href: 'https://twitter.com/QuibdoJs' },
            '@Quibdojs'
          ),
          ' Javascript full stack developer. I write about programming, art, Traditional Animation and Watercolor'
        ),
        link: 'https://twitter.com/xfry',
        nickname: '@xfry'
      }, {
        image: _speaker_8.default,
        name: 'Oscar Rendon',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'Cycling, programming, communities, math/ai enthusiast'
        ),
        link: 'https://twitter.com/orendon',
        nickname: '@orendon'
      }, {
        image: _speaker_10.default,
        name: 'Giovanny Gongora',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'Support Engineer at ',
          React.createElement(
            'a',
            { target: '_blank', href: 'https://twitter.com/NodeSource' },
            '@NodeSource'
          ),
          '. I spend time coding, giving talks at events and doing random stuff. Formerly ',
          React.createElement(
            'a',
            { target: '_blank', href: 'https://twitter.com/mozilla' },
            '@Mozilla'
          ),
          '.'
        ),
        link: 'https://twitter.com/Gioyik',
        nickname: '@Gioyik'
      }, {
        image: _speaker_12.default,
        name: 'Giovanny Beltran',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'Making games ',
          React.createElement(
            'a',
            { target: '_blank', href: 'https://twitter.com/juegos_indies' },
            '@juegos_indies'
          ),
          ' - ',
          React.createElement(
            'a',
            { target: '_blank', href: 'https://twitter.com/bogotajs' },
            '@bogotajs'
          ),
          ' organizer mira mi canal: ',
          React.createElement(
            'a',
            { target: '_blank', href: ' http://goo.gl/IDLO8C' },
            'Youtube'
          ),
          ' y mi ',
          React.createElement(
            'a',
            { target: '_blank', href: 'http://agar3s.games' },
            'pagina web'
          ),
          '.'
        ),
        link: 'https://twitter.com/agar3s',
        nickname: '@agar3s'
      }]
    };
    return _this;
  }

  (0, _createClass3.default)(SectionSpeakers, [{
    key: 'render',
    value: function render() {
      var speakers = this.state.speakers;

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
              'p',
              { className: 'section-speakers__content__copy' },
              'Envia tu propuesta de conferencia ',
              React.createElement(
                'span',
                { className: 'btn-speaker' },
                'Aqui'
              )
            ),
            React.createElement(
              'ol',
              { className: 'section-speakers__content__list' },
              speakers.map(function (_ref, index) {
                var name = _ref.name,
                    image = _ref.image,
                    link = _ref.link,
                    nickname = _ref.nickname,
                    bio = _ref.bio;

                return React.createElement(
                  'li',
                  { className: 'section-speakers__content__list__item', key: index },
                  React.createElement('div', { className: 'section-speakers__content__list__item__image', style: { 'backgroundImage': 'url(' + image + ')' } }),
                  React.createElement(
                    'span',
                    { className: 'section-speakers__content__list__item__name' },
                    name
                  ),
                  bio,
                  React.createElement(
                    'a',
                    (0, _defineProperty3.default)({ className: 'twiter-link', target: '_blank', href: link }, 'target', '_blank'),
                    nickname
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);
  return SectionSpeakers;
}(React.Component);

module.exports = InjectChildComponent(SectionSpeakers, []);