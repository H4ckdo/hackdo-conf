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

var Button = function (_React$Component) {
  (0, _inherits3.default)(Button, _React$Component);

  function Button(props) {
    (0, _classCallCheck3.default)(this, Button);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call(this, props));

    _this.state = {
      data: _this.props.data,
      type: _this.props.type,
      style: _this.props.style,
      disabled: _this.props.disabled || false
    };
    return _this;
  } //end constructor

  (0, _createClass3.default)(Button, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.lift) this.props.lift(this);
    } //end componentDidMount

  }, {
    key: 'templateLoader',
    value: function templateLoader() {
      return React.createElement('div', { className: 'container-loader' });
    } //end templateLoader

  }, {
    key: 'templateCancel',
    value: function templateCancel() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          null,
          this.state.data
        ),
        React.createElement(
          'i',
          { className: 'material-icons' },
          '\uE888'
        )
      );
    } //end templateCancel

  }, {
    key: 'templateConfirm',
    value: function templateConfirm() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          null,
          this.state.data
        ),
        React.createElement(
          'i',
          { className: 'material-icons' },
          '\uE86C'
        )
      );
    } //end templateConfirm

  }, {
    key: 'templateLoadMore',
    value: function templateLoadMore() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          null,
          this.state.data || "load more"
        ),
        React.createElement(
          'i',
          { className: 'material-icons' },
          '\uE8B6'
        )
      );
    } //end templateLoadMore


  }, {
    key: 'btn',
    value: function btn() {
      var icon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      return React.createElement(
        'div',
        { className: icon ? "" : "noButton" },
        icon,
        React.createElement(
          'span',
          null,
          this.state.data
        )
      );
    } //end btnAdd

  }, {
    key: 'templateSearch',
    value: function templateSearch() {
      return React.createElement(
        'div',
        { className: 'show-inline' },
        React.createElement(
          'i',
          { className: 'material-icons' },
          '\uE8B6'
        )
      );
    } //end templateSearch

  }, {
    key: 'templateSend',
    value: function templateSend() {
      return React.createElement(
        'div',
        { className: 'show-inline' },
        React.createElement(
          'i',
          { className: 'material-icons' },
          '\uE163'
        )
      );
    } //end templateSend

  }, {
    key: 'templateReset',
    value: function templateReset() {
      return React.createElement(
        'div',
        { className: 'show-inline' },
        React.createElement(
          'span',
          null,
          this.state.data
        ),
        React.createElement(
          'i',
          { className: 'material-icons' },
          '\uE042'
        )
      );
    }
  }, {
    key: 'templateCustom',
    value: function templateCustom() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      return React.createElement(
        'div',
        { className: 'show-inline' },
        React.createElement(
          'span',
          null,
          this.state.data
        ),
        data
      );
    } //end templateCustom

  }, {
    key: 'render',
    value: function render() {
      var style = this.state.style;
      var button = void 0;
      if (style === "btn-load") button = this.templateLoader();
      if (style === "btn-loadmore") button = this.templateLoadMore();
      if (style === "btn-cancel") button = this.templateCancel();
      if (style === "btn-confirm") button = this.templateConfirm();
      if (style === "btn-search") button = this.templateSearch();
      if (style === "btn-send") button = this.templateSend();
      if (style === "btn-reset") button = this.templateReset();
      if (style === "btn-custom") button = this.templateCustom(this.props.icon);

      if (!button) button = this.btn(this.props.icon); //default


      return React.createElement(
        'div',
        { className: 'show-inline wrap-btn' },
        React.createElement(
          'button',
          { className: 'btn ' + style, disabled: this.state.disabled, type: this.state.type, onClick: this.props.onClick },
          button
        )
      );
    }
  }]);
  return Button;
}(React.Component);

module.exports = InjectChildComponent(Button, []);