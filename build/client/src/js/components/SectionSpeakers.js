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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');

var _require = require('react-router-dom'),
    Link = _require.Link;

var InjectChildComponent = require('./Inject.js');

var SectionSpeakers = function (_React$Component) {
  (0, _inherits3.default)(SectionSpeakers, _React$Component);

  function SectionSpeakers(props) {
    (0, _classCallCheck3.default)(this, SectionSpeakers);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SectionSpeakers.__proto__ || (0, _getPrototypeOf2.default)(SectionSpeakers)).call(this, props));

    _this.state = {
      speakers: [{
        image: 'https://pbs.twimg.com/profile_images/973370095585120256/9STMOBrn_400x400.jpg',
        name: 'Julián Duque',
        bio: 'Developer and Educator - Engineer at @NodeSource - Co-Organizer at @Suncoastjs @MedellinJS @JSConfCo {Medellín, St. Petersburg, FL} - Satán es la Cumbia',
        link: 'https://twitter.com/julian_duque',
        nickname: '@julian_duque'
      }, {
        image: 'https://pbs.twimg.com/profile_images/959616357615702016/AxcYu77t_400x400.jpg',
        name: 'Romel Pérez',
        bio: 'Software engineering autodidact. Enthusiast, JavaScript dev, Sci-Fi and nature fan. Making the world a better place through lines of code.',
        link: 'https://twitter.com/romelperez07',
        nickname: '@romelperez07'
      }, {
        image: 'https://pbs.twimg.com/profile_images/920878828645421057/jlmgoUDb_400x400.jpg',
        name: 'Fredy E',
        bio: 'Founder of @H4ckdo  + @Quibdojs Javascript full stack developer. I write about programming, art, Traditional Animation and Watercolor',
        link: 'https://twitter.com/xfry',
        nickname: '@xfry'
      }, {
        image: 'https://pbs.twimg.com/profile_images/840689870637006849/EXs4Tq2m_400x400.jpg',
        name: 'Oscar Rendon',
        bio: 'Cycling, programming, communities, math/ai enthusiast',
        link: 'https://twitter.com/orendon',
        nickname: '@orendon'
      }, {
        image: 'https://pbs.twimg.com/profile_images/809138513530654720/VgvOSRQT_400x400.jpg',
        name: 'Giovanny Gongora',
        bio: 'Support Engineer at @NodeSource. I spend time coding, giving talks at events and doing random stuff. Formerly @Mozilla.',
        link: 'https://twitter.com/Gioyik',
        nickname: '@Gioyik'
      }, {
        image: 'https://pbs.twimg.com/profile_images/975354262720077824/GFdVch8l_400x400.jpg',
        name: 'Giovanny Beltran',
        bio: 'Making games @juegos_indies - @bogotajs organizer mira mi canal: http://goo.gl/IDLO8C  http://agar3s.games ',
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
                  React.createElement(
                    'p',
                    { className: 'section-speakers__content__list__item__copy' },
                    '' + bio
                  ),
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