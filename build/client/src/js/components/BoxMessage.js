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

var BoxMessage = function (_React$Component) {
  (0, _inherits3.default)(BoxMessage, _React$Component);

  function BoxMessage() {
    (0, _classCallCheck3.default)(this, BoxMessage);
    return (0, _possibleConstructorReturn3.default)(this, (BoxMessage.__proto__ || (0, _getPrototypeOf2.default)(BoxMessage)).call(this));
  }

  (0, _createClass3.default)(BoxMessage, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'box-message-container' },
        React.createElement(
          'div',
          { className: 'box-message__header row' },
          React.createElement(
            'div',
            { className: 'columns large-1 wrap-header-image' },
            React.createElement('div', { className: 'box-message__header__image user-online' })
          ),
          React.createElement(
            'div',
            { className: 'columns large-11 wrap-message-name-text' },
            React.createElement(
              'span',
              { className: 'box-message__header__name' },
              'Esneyder Amin Palacios Mena'
            ),
            React.createElement(
              'li',
              { className: 'wrap-message-list' },
              React.createElement(
                'p',
                { className: 'box-message-body__text' },
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.'
              ),
              React.createElement(
                'div',
                { className: 'box-message__view_state viewed' },
                React.createElement(
                  'span',
                  { className: 'box-message__view_state__message' },
                  'Visto'
                ),
                React.createElement(
                  'i',
                  { className: 'box-message__view_state__icon material-icons' },
                  '\uE877'
                )
              ),
              React.createElement(
                'small',
                { className: 'box-message__date' },
                'Domingo a las 7pm'
              )
            ),
            React.createElement(
              'li',
              { className: 'wrap-message-list' },
              React.createElement(
                'p',
                { className: 'box-message-body__text' },
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.'
              ),
              React.createElement(
                'div',
                { className: 'box-message__view_state viewed' },
                React.createElement(
                  'span',
                  { className: 'box-message__view_state__message' },
                  'Visto'
                ),
                React.createElement(
                  'i',
                  { className: 'box-message__view_state__icon material-icons' },
                  '\uE877'
                )
              ),
              React.createElement(
                'small',
                { className: 'box-message__date' },
                'Domingo a las 7pm'
              )
            )
          )
        )
      );
    }
  }]);
  return BoxMessage;
}(React.Component);

module.exports = InjectChildComponent(BoxMessage, []);