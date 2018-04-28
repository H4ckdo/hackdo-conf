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

var _member_ = require('../../images/member_1.jpeg');

var _member_2 = _interopRequireDefault(_member_);

var _member_3 = require('../../images/member_2.jpeg');

var _member_4 = _interopRequireDefault(_member_3);

var _member_5 = require('../../images/member_3.jpeg');

var _member_6 = _interopRequireDefault(_member_5);

var _member_7 = require('../../images/member_4.jpeg');

var _member_8 = _interopRequireDefault(_member_7);

var _member_9 = require('../../images/member_5.jpg');

var _member_10 = _interopRequireDefault(_member_9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var InjectChildComponent = require('./Inject.js');

var SectionTeam = function (_React$Component) {
  (0, _inherits3.default)(SectionTeam, _React$Component);

  function SectionTeam() {
    (0, _classCallCheck3.default)(this, SectionTeam);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SectionTeam.__proto__ || (0, _getPrototypeOf2.default)(SectionTeam)).call(this));

    _this.state = {
      data: [{
        title: 'Esneyder Amin Palacios Mena',
        image: '' + _member_2.default,
        copy: React.createElement(
          'p',
          { className: 'section-team__article__members__wrap-items__copy' },
          '22 years old \uD83D\uDC76\uD83D\uDC76\uD83D\uDC76, Javascript full stack developer, member and contributor at',
          React.createElement(
            'a',
            { href: 'https://twitter.com/H4ckdo', target: '_blank' },
            '@H4ckdo'
          ),
          '   ',
          React.createElement(
            'a',
            { href: 'https://twitter.com/quibdojs' },
            '@quibdojs'
          )
        )
      }, {
        title: 'Miguel Casas Perea \u30C4',
        image: '' + _member_4.default,
        copy: React.createElement(
          'p',
          { className: 'section-team__article__members__wrap-items__copy' },
          React.createElement(
            'b',
            null,
            'DEVELOPER POR PASION'
          ),
          React.createElement('br', null),
          'Maker, Emprendedor, Programador en startup ',
          React.createElement(
            'a',
            { href: 'http://medpike.com/', target: '_blank' },
            'Medpike.com'
          ),
          '. Ganador Medellin te reta 2014. Miembro de la Comunidad Quibdojs, fundador Choc\xF3-libre, desarrollador web'
        )
      }, {
        title: 'D\xE9kar',
        image: '' + _member_6.default,
        copy: React.createElement(
          'p',
          { className: 'section-team__article__members__wrap-items__copy' },
          'Ingeniero Teleinform\xE1tico. Estudiante de M\xE1ster en BigData Co-Autor proy. Sembrando Seguridad TIC. Amante al Ethical Hacking y Legislaci\xF3n inform\xE1tica'
        )
      }, {
        title: 'Yerlin Matu',
        image: '' + _member_8.default,
        copy: React.createElement(
          'p',
          { className: 'section-team__article__members__wrap-items__copy' },
          '\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDCBB I\'m a cool software developer, Multitalented, self-taught and passionate about technology, graphic arts and free knowledge.'
        )
      }, {
        title: 'Fredy E',
        image: '' + _member_10.default,
        copy: React.createElement(
          'p',
          { className: 'section-team__article__members__wrap-items__copy' },
          'Founder of ',
          React.createElement(
            'a',
            { href: 'http://www.hackdo.co/' },
            '@H4ckdo'
          ),
          '  + ',
          React.createElement(
            'a',
            { href: 'https://twitter.com/QuibdoJs' },
            '@Quibdojs'
          ),
          ' Javascript full stack developer. I write about programming, art, Traditional Animation and Watercolor'
        )
      }]
    };
    return _this;
  }

  (0, _createClass3.default)(SectionTeam, [{
    key: 'render',
    value: function render() {
      var data = this.state.data;

      return React.createElement(
        'div',
        { className: 'wrap-team' },
        React.createElement(
          'section',
          { className: 'section-team' },
          React.createElement(
            'article',
            { className: 'section-team__article' },
            React.createElement(
              'h1',
              { className: 'section-team__article__title' },
              'Equipo Hackd\xF3',
              React.createElement('div', { className: 'lower-bar' })
            ),
            React.createElement(
              'p',
              { className: 'section-team__article__copy' },
              'Un grupo emprendedor conformado por estudiantes y profesionales.'
            ),
            React.createElement(
              'div',
              { className: 'section-team__article__members' },
              React.createElement(
                'ol',
                { className: 'section-team__article__members__wrap-items' },
                data.map(function (info, index) {
                  return React.createElement(
                    'li',
                    { className: 'section-team__article__members__wrap-items__item', key: index },
                    React.createElement('div', { style: { 'backgroundImage': 'url(' + info.image + ')' }, className: 'section-team__article__members__wrap-items__image' }),
                    React.createElement(
                      'span',
                      { className: 'section-team__article__members__wrap-items__title' },
                      info.title,
                      React.createElement('div', { className: 'lower-bar' })
                    ),
                    info.copy
                  );
                })
              )
            )
          )
        )
      );
    }
  }]);
  return SectionTeam;
}(React.Component);

module.exports = InjectChildComponent(SectionTeam, []);