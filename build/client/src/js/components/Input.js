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

var Input = function (_React$Component) {
  (0, _inherits3.default)(Input, _React$Component);

  function Input(props) {
    (0, _classCallCheck3.default)(this, Input);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this, props));

    _this.state = {
      error: false,
      warning: false,
      msgStyle: "valid",
      valid: false,
      title: _this.props.title,
      type: _this.props.type,
      defaultMessage: _this.props.defaultMessage,
      defaultValue: _this.props.defaultValue,
      id: _this.props.id,
      value: "",
      disabled: _this.props.disabled || false
    };
    return _this;
  }

  (0, _createClass3.default)(Input, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.lift) this.props.lift(this);
      var defaultValue = this.state.defaultValue;
      if (defaultValue) this.bindValue(this)({
        target: { value: defaultValue }
      });
    }
  }, {
    key: 'bindValue',
    value: function bindValue(self) {
      return function (e) {
        var canditate = e.target.value;
        self.setState({ value: canditate }, function () {
          if (canditate.length === 0) return self.showWarning(self.props.whenEmpty);
          var isValid = self.validate(canditate);
          if (isValid) {
            self.setValid.bind(self)(canditate);
            if (self.props.onValid) self.props.onValid(self, canditate);
          } else {
            self.showError();
            if (self.props.onInvalid) self.props.onInvalid(self, canditate);
          }
        });
      };
    }
  }, {
    key: 'setValid',
    value: function setValid(canditate) {
      this.hideMsg();
      this.setState({
        value: canditate,
        valid: true,
        defaultMessage: this.props.defaultMessage
      });
    }
  }, {
    key: 'validate',
    value: function validate() {
      var canditate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      var min = this.props.validateMin;
      var max = this.props.validateMax;
      if (min && !max) {
        //in case with just minimum
        return this.props.pattern(canditate) && canditate.length >= min;
      } else if (!min && max) {
        //in case with just maximum
        return this.props.pattern(canditate) && canditate.length <= max;
      } else if (min && max) {
        //in case of both
        return this.props.pattern(canditate) && canditate.length >= min && canditate.length <= max;
      } else {
        //in case no min no max
        return this.props.pattern(canditate);
      }
    }
  }, {
    key: 'hideMsg',
    value: function hideMsg(cb) {
      var newState = { error: false, warning: false, msgStyle: 'valid' };
      if (cb) {
        this.setState(newState, cb);
      } else {
        this.setState(newState);
      }
    }
  }, {
    key: 'showError',
    value: function showError(cb) {
      var newState = { defaultMessage: '', error: true, warning: false, msgStyle: 'invalid', valid: false };
      if (cb) {
        this.setState(newState, cb);
      } else {
        this.setState(newState);
      }
    }
  }, {
    key: 'showWarning',
    value: function showWarning(empty) {
      this.setState({ defaultMessage: '', error: false, warning: true, msgStyle: 'empty', valid: false });
      if (empty) return empty(this);
    }
  }, {
    key: 'inputText',
    value: function inputText(_ref) {
      var msgWarning = _ref.msgWarning,
          msgError = _ref.msgError,
          _ref$defaultMessage = _ref.defaultMessage,
          defaultMessage = _ref$defaultMessage === undefined ? "" : _ref$defaultMessage;

      var hideDefault = defaultMessage.length ? "show" : "hide";
      var action = void 0;
      if (this.state.valid) {
        if (this.props.validMessage) {
          action = this.props.validMessage(this.state.value);
        } else {
          action = " ";
        }
      } else {
        action = defaultMessage;
      }

      return React.createElement(
        'div',
        { className: 'field' },
        React.createElement('input', { disabled: this.state.disabled, value: this.state.value, type: this.state.type, name: this.props.name, id: this.props.id, autoComplete: this.props.autoComplete === true ? "on" : "off", className: "field-input " + this.state.msgStyle, title: this.props.title, placeholder: this.props.placeholder, onChange: this.bindValue(this) }),
        React.createElement(
          'small',
          { className: 'input-msg default ' + hideDefault },
          action
        ),
        React.createElement(
          'small',
          { className: 'input-msg error ' + msgError },
          this.props.errorMessage || 'Debes llenar este campo correctamente.'
        ),
        React.createElement(
          'small',
          { className: 'input-msg warning ' + msgWarning },
          this.props.warningMessage || 'Este campo no debe quedar vacio.'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var isDate = this.props.type === "date";
      var msgError = !this.state.error ? "hide" : "";
      var msgWarning = !this.state.warning ? "hide" : "";
      var pushMsg = this.state.icon === false ? "" : "push-msg";
      var defaultMessage = this.state.defaultMessage;
      return React.createElement(
        'div',
        { className: 'show-inline wrap-input' },
        this.inputText({ msgWarning: msgWarning, msgError: msgError, pushMsg: pushMsg, defaultMessage: defaultMessage })
      );
    }
  }]);
  return Input;
}(React.Component);

module.exports = InjectChildComponent(Input, []);