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

var _speaker_13 = require('../../images/speaker_7.jpg');

var _speaker_14 = _interopRequireDefault(_speaker_13);

var _speaker_15 = require('../../images/speaker_8.jpg');

var _speaker_16 = _interopRequireDefault(_speaker_15);

var _speaker_17 = require('../../images/speaker_9.jpg');

var _speaker_18 = _interopRequireDefault(_speaker_17);

var _speaker_19 = require('../../images/speaker_10.jpg');

var _speaker_20 = _interopRequireDefault(_speaker_19);

var _speaker_21 = require('../../images/speaker_11.jpg');

var _speaker_22 = _interopRequireDefault(_speaker_21);

var _speaker_23 = require('../../images/speaker_12.jpg');

var _speaker_24 = _interopRequireDefault(_speaker_23);

var _speaker_25 = require('../../images/speaker_13.jpg');

var _speaker_26 = _interopRequireDefault(_speaker_25);

var _speaker_27 = require('../../images/speaker_14.jpg');

var _speaker_28 = _interopRequireDefault(_speaker_27);

var _speaker_29 = require('../../images/speaker_15.jpeg');

var _speaker_30 = _interopRequireDefault(_speaker_29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');


var InjectChildComponent = require('./Inject.js');

var SectionSpeakers = function (_React$Component) {
  (0, _inherits3.default)(SectionSpeakers, _React$Component);

  function SectionSpeakers(props) {
    (0, _classCallCheck3.default)(this, SectionSpeakers);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SectionSpeakers.__proto__ || (0, _getPrototypeOf2.default)(SectionSpeakers)).call(this, props));

    _this.state = {
      taps: 0,
      speakers: [{
        image: _speaker_30.default,
        name: 'Alejandra Giraldo',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'Desarrolladora Web Backend y Frontend Angular, Node.js en Endava.'
        ),
        link: '',
        nickname: ''
      }, {
        image: _speaker_26.default,
        name: 'Valeria Garcia Gonzalez',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'Soy una dise\xF1adora e ilustradora de La Guajira, Colombia. Estudi\xE9 Dise\xF1o Gr\xE1fico en la Universidad Pontificia Bolivariana.'
        ),
        link: 'https://twitter.com/_painpony',
        nickname: '@_painpony'
      }, {
        image: _speaker_16.default,
        name: 'Laura Camacho Vásquez',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'Ingeniera de desarrollo en ',
          React.createElement(
            'b',
            null,
            'Seven4N'
          )
        ),
        link: '',
        nickname: ''
      }, {
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
        name: 'Juan David Castillo Betancur',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'Desarrollador de Software en Medellin, Colombia. Escribo c\xF3digo y tomo fotos de vez en cuando.'
        ),
        link: 'https://twitter.com/castillobgr',
        nickname: '@castillobgr'
      }, {
        image: _speaker_18.default,
        name: 'Yuji Kiriki',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'Certified\u2122 Buzzword\xA9 Surfer\xAE. Living life async. Team homeopathy expert. Charlatan del SW. "Millennial Leader". My blog about SW: ',
          React.createElement(
            'a',
            { target: '_blank', href: 'https://yujikiriki.github.io/' },
            'yujikiriki.com '
          )
        ),
        link: 'https://twitter.com/ykiriki?lang=es',
        nickname: '@ykiriki'
      }, {
        image: _speaker_6.default,
        name: 'Romel Pérez',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'Software engineering autodidact. Enthusiast, JavaScript dev, Sci-Fi and nature fan. Making the world a better place through lines of code.'
        ),
        link: 'https://twitter.com/romelperez07',
        nickname: '@romelperez07'
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
      }, {
        image: _speaker_14.default,
        name: 'Harlen giraldo ortega',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'Desarrollador de front-end en ',
          React.createElement(
            'b',
            null,
            'Seven4N'
          ),
          ', organizador de ',
          React.createElement(
            'a',
            { target: '_blank', href: 'http://angularmedellin.com/' },
            'angular Medellin'
          )
        ),
        link: '',
        nickname: ''
      },
      /*
      {
        image: Speaker6,
        name: 'Juan Pablo Correa Rendón',
        bio: (
          <p className="section-speakers__content__list__item__copy">
           </p>
        ),
        link: '',
        nickname: '@agar3s'
      },
      */
      {
        image: _speaker_20.default,
        name: 'Rafael Socarras',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'Co-Fundador y CTO de ',
          React.createElement(
            'a',
            { target: '_blank', href: 'https://twitter.com/MensajerosUrban' },
            '@MensajerosUrban'
          ),
          ' y ',
          React.createElement(
            'a',
            { href: '' },
            '@Pleizt'
          ),
          ' Miembro Junta directiva Andi del Futuro, so\xF1ador, emprendedor serial, cambiando el mundo desde el emprendimiento'
        ),
        link: 'https://twitter.com/rafaelsocarras',
        nickname: '@rafaelsocarras'
      }, {
        image: _speaker_22.default,
        name: 'Jota Rodriguez',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'Founder INNOVAATICS, Do In Bits, eduBits, Docente catedratico universidad Tecnol\xF3gica del Choc\xF3 Diego Luis C\xF3rdoba',
          React.createElement('br', null),
          'Funder & CEO in D\xF3 In Bits.'
        ),
        link: 'https://doinbits.com.co/',
        nickname: 'doinbits'
      }, {
        image: _speaker_24.default,
        name: 'Jarlinton Moreno Zea',
        id: 'frezeer',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'Master\'s Degree student at ICMC-USP, with focus on Machine Learning and Data Sciences in Complex Networks. passionate about statistical learning and an aspirant to become a fullstack Javascript developer.'
        ),
        link: 'https://twitter.com/jarlinton_zea',
        nickname: '@jarlinton_zea'
      }, {
        image: _speaker_28.default,
        name: 'Santiago Bernal',
        bio: React.createElement(
          'p',
          { className: 'section-speakers__content__list__item__copy' },
          'Software Engineer, Teacher, Translator : InfoSec, AR/VR, Drones, iOT, Soccer, Productivity'
        ),
        link: 'https://twitter.com/santiaguf',
        nickname: '@aumentada'
      }]
    };
    return _this;
  }

  (0, _createClass3.default)(SectionSpeakers, [{
    key: 'proposal',
    value: function proposal() {
      //window.location.href = "https://goo.gl/forms/60LHY4IjvvTDyumH2";
      window.open("https://goo.gl/forms/60LHY4IjvvTDyumH2");
    }
  }, {
    key: 'insecto',
    value: function insecto() {
      var _this2 = this;

      var taps = this.state.taps + 1;
      this.setState({ taps: taps }, function () {
        if (_this2.state.taps === 5) {
          var audio = document.getElementById('freezer');
          audio.play();
        }
        if (_this2.state.taps > 5) _this2.setState({ taps: 0 });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var speakers = this.state.speakers;

      return React.createElement(
        'div',
        { className: 'wrap-section-speakers' },
        React.createElement('audio', { src: '/assets/freezer.mp3', id: 'freezer' }),
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
              'Estos son nuestros speakers \u2B50'
            ),
            React.createElement(
              'ol',
              { className: 'section-speakers__content__list' },
              speakers.map(function (_ref, index) {
                var name = _ref.name,
                    image = _ref.image,
                    link = _ref.link,
                    nickname = _ref.nickname,
                    bio = _ref.bio,
                    _ref$id = _ref.id,
                    id = _ref$id === undefined ? '' : _ref$id;

                return React.createElement(
                  'li',
                  { className: 'section-speakers__content__list__item', key: index },
                  React.createElement('div', { onClick: id === 'frezeer' ? _this3.insecto.bind(_this3) : null, className: 'section-speakers__content__list__item__image', style: { 'backgroundImage': 'url(' + image + ')' } }),
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