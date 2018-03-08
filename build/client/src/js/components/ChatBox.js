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
var Input = require('./Input.js');
var Button = require('./Button.js');
var BoxMessage = require('./BoxMessage.js');

var _require = require('../utils/validators.js'),
    dummyValidator = _require.dummyValidator;

var InjectChildComponent = require('./Inject.js');

var ChatBox = function (_React$Component) {
  (0, _inherits3.default)(ChatBox, _React$Component);

  function ChatBox() {
    (0, _classCallCheck3.default)(this, ChatBox);
    return (0, _possibleConstructorReturn3.default)(this, (ChatBox.__proto__ || (0, _getPrototypeOf2.default)(ChatBox)).call(this));
  }

  (0, _createClass3.default)(ChatBox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$placeholder = _props.placeholder,
          placeholder = _props$placeholder === undefined ? 'Escribe un mensaje' : _props$placeholder,
          onSendMessage = _props.onSendMessage;

      return React.createElement(
        'div',
        { className: 'chat-box-container' },
        React.createElement(
          'div',
          { className: 'columns large-12' },
          React.createElement(BoxMessage, null),
          React.createElement(BoxMessage, null)
        ),
        React.createElement(
          'div',
          { className: 'columns large-11' },
          React.createElement(Input, {
            type: 'text',
            placeholder: placeholder,
            pattern: dummyValidator
          })
        ),
        React.createElement(
          'div',
          { className: 'columns large-1 pull-send-button' },
          React.createElement(Button, {
            style: "btn-send",
            type: "submit",
            onClick: onSendMessage.bind(this)
          })
        )
      );
    }
  }]);
  return ChatBox;
}(React.Component);

module.exports = InjectChildComponent(ChatBox, []);