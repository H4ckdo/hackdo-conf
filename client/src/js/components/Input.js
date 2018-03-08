const React = require('react');
const InjectChildComponent = require('./Inject.js');

 class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      warning: false,
      msgStyle: "valid",
      valid: false,
      title: this.props.title,
      type: this.props.type,
      defaultMessage: this.props.defaultMessage,
      defaultValue: this.props.defaultValue,
      id: this.props.id,
      value: "",
      disabled: this.props.disabled || false
    };
  }

  componentDidMount() {
    if (this.props.lift) this.props.lift(this);
    let defaultValue = this.state.defaultValue;
    if (defaultValue) this.bindValue(this)({
      target: { value: defaultValue }
    })
  }

  bindValue(self) {
    return function (e) {
      let canditate = e.target.value;
      self.setState({ value: canditate }, function () {
        if (canditate.length === 0) return self.showWarning(self.props.whenEmpty);
        let isValid = self.validate(canditate);
        if (isValid) {
          self.setValid.bind(self)(canditate);
          if (self.props.onValid) self.props.onValid(self, canditate);
        } else {
          self.showError();
          if (self.props.onInvalid) self.props.onInvalid(self, canditate);
        }
      })
    }
  }

  setValid(canditate) {
    this.hideMsg();
    this.setState({
      value: canditate,
      valid: true,
      defaultMessage: this.props.defaultMessage
    })
  }

  validate(canditate = "") {
    let min = this.props.validateMin;
    let max = this.props.validateMax
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

  hideMsg(cb) {
    let newState = { error: false, warning: false, msgStyle: 'valid' };
    if (cb) {
      this.setState(newState, cb);
    } else {
      this.setState(newState);
    }
  }

  showError(cb) {
    let newState = { defaultMessage: '', error: true, warning: false, msgStyle: 'invalid', valid: false };
    if (cb) {
      this.setState(newState, cb);
    } else {
      this.setState(newState);
    }
  }

  showWarning(empty) {
    this.setState({ defaultMessage: '', error: false, warning: true, msgStyle: 'empty', valid: false });
    if (empty) return empty(this);
  }

  inputText({ msgWarning, msgError, defaultMessage = "" }) {
    let hideDefault = defaultMessage.length ? "show" : "hide";
    let action;
    if (this.state.valid) {
      if (this.props.validMessage) {
        action = this.props.validMessage(this.state.value);
      } else {
        action = " ";
      }
    } else {
      action = defaultMessage;
    }

    return (
      <div className="field">
        <input disabled={this.state.disabled} value={this.state.value} type={this.state.type} name={this.props.name} id={this.props.id} autoComplete={this.props.autoComplete === true ? "on" : "off"} className={"field-input " + (this.state.msgStyle)} title={this.props.title} placeholder={this.props.placeholder} onChange={this.bindValue(this)} />
        <small className={`input-msg default ${hideDefault}`}>{action}</small>
        <small className={`input-msg error ${msgError}`}>{this.props.errorMessage || 'Debes llenar este campo correctamente.'}</small>
        <small className={`input-msg warning ${msgWarning}`}>{this.props.warningMessage || 'Este campo no debe quedar vacio.'}</small>
      </div>
    )
  }

  render() {
    let isDate = this.props.type === "date";
    let msgError = !this.state.error ? "hide" : "";
    let msgWarning = !this.state.warning ? "hide" : "";
    let pushMsg = this.state.icon === false ? "" : "push-msg";
    let defaultMessage = this.state.defaultMessage;
    return (
      <div className="show-inline wrap-input">
        {
          this.inputText({ msgWarning, msgError, pushMsg, defaultMessage })
        }
      </div>
    )
  }
}

 module.exports = InjectChildComponent(Input, []);