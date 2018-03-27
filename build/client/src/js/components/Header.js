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

var _require = require('react-redux'),
    connect = _require.connect;

var InjectChildComponent = require('./Inject.js');

var _require2 = require('react-router-dom'),
    Link = _require2.Link;

var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this));

    _this.state = {
      isMenuOpen: false,
      color: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Header, [{
    key: 'scrollBy',
    value: function scrollBy(distance, duration) {
      var initialY = document.body.scrollTop;
      var y = initialY + distance;
      var baseY = (initialY + y) * 0.5;
      var difference = initialY - baseY;
      var startTime = performance.now();
      function step() {
        var normalizedTime = (performance.now() - startTime) / duration;
        if (normalizedTime > 1) normalizedTime = 1;

        window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
        if (normalizedTime < 1) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }
  }, {
    key: 'onScroll',
    value: function onScroll(background, HeaderContainer, e) {
      var calc = background.offsetHeight - HeaderContainer.offsetHeight;
      //console.log(window.scrollY, calc);
      if (window.scrollY >= calc) {
        this.setState({ color: 'header-black' });
      } else {
        this.setState({ color: '' });
      }
    }
  }, {
    key: 'goDown',
    value: function goDown(id) {
      if (typeof window !== 'undefined') {
        var element = document.querySelector(id);
        var rect = element.getBoundingClientRect();
        this.scrollBy(element.offsetTop - 143, 1000);
        console.log(element.offsetTop, rect.right, rect.bottom, rect.left);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var background = document.getElementsByClassName('background-section')[0];
      var HeaderContainer = document.getElementById('HeaderContainer');
      window.addEventListener("scroll", this.onScroll.bind(this, background, HeaderContainer));
      window.addEventListener('resize', function (e) {
        if (visualViewport.width > 768) {
          if (_this2.state.isMenuOpen) _this2.setState({ isMenuOpen: false });
        }
      });
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      var isMenuOpen = this.state.isMenuOpen;

      this.setState({ isMenuOpen: !isMenuOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          color = _state.color,
          isMenuOpen = _state.isMenuOpen;

      return React.createElement(
        'header',
        { className: 'header-container ' + color, id: 'HeaderContainer' },
        React.createElement(
          'div',
          { className: 'header-content' },
          React.createElement(
            'div',
            { className: 'toggle-options', onClick: this.toggleMenu.bind(this) },
            React.createElement('img', {
              width: '28px',
              height: '28px',
              src: isMenuOpen ? "/assets/images/menu-close.png" : "/assets/images/menu-options.png" })
          ),
          React.createElement('div', { className: 'wrap-logo' }),
          React.createElement(
            'div',
            { className: 'wrap-options' },
            React.createElement(
              'div',
              { className: 'wrap-slogan' },
              React.createElement(
                'h1',
                { className: 'title' },
                'HACKD\xD3'
              ),
              React.createElement(
                'h2',
                { className: 'subtitle' },
                'CONF ',
                React.createElement(
                  'span',
                  { className: 'year' },
                  '2018'
                )
              )
            ),
            React.createElement(
              'nav',
              { className: 'col-nav ' + (this.state.isMenuOpen ? 'show' : 'hide') },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  { onClick: this.goDown.bind(this, '.wrap-section-speakers') },
                  'Speakers'
                ),
                React.createElement(
                  'li',
                  { onClick: this.goDown.bind(this, '.wrap-section-agenda') },
                  'Agenda'
                ),
                React.createElement(
                  'li',
                  { onClick: this.goDown.bind(this, '.wrap-venue') },
                  'Lugar de encuentro'
                ),
                React.createElement(
                  'li',
                  { onClick: this.goDown.bind(this, '.wrap-sponsors') },
                  'Patrocionadores'
                )
              )
            ),
            React.createElement(
              'nav',
              { className: 'row-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  { onClick: this.goDown.bind(this, '.wrap-section-speakers') },
                  'Speakers'
                ),
                React.createElement(
                  'li',
                  { onClick: this.goDown.bind(this, '.wrap-section-agenda') },
                  'Agenda'
                ),
                React.createElement(
                  'li',
                  { onClick: this.goDown.bind(this, '.wrap-venue') },
                  'Lugar de encuentro'
                ),
                React.createElement(
                  'li',
                  { onClick: this.goDown.bind(this, '.wrap-sponsors') },
                  'Patrocionadores'
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Header;
}(React.Component);

module.exports = InjectChildComponent(Header, []);