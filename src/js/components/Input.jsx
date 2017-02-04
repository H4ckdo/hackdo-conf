import React from 'react';
import '../../scss/components/Input.scss';

export default class InputLocation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      param: this.props.param,
      error: false,
      warning: false,
      msgStyle: 'valid',
      valid: false,
      value: this.dateFormatISO(this.props.value || null),
      icon: this.props.icon
    };
    console.log(this.props)
    this.props.lift(this);
  }

  bindValue(self) {
    return function (e) {
      let canditate = e.target.value;
      if(canditate.length === 0) return self.showWarning();
      let isValid = self.validate(canditate);
      if(isValid) {
        self.hideMsg();
        self.setState({value: canditate, valid: true})
      } else {
        self.showError();
      }
    };
  }

  validate(canditate = "") {
    return this.props.pattern(canditate) && canditate.length > 3 && canditate.length < 25;
  }

  hideMsg() {
    this.setState({error: false, warning: false, msgStyle: 'valid'})
  }

  showError() {
    this.setState({error: true, warning: false, msgStyle: 'invalid', valid: false})
  }

  showWarning() {
    this.setState({error: false, warning: true, msgStyle: 'empty', valid: false})
  }

  dateFormatISO(date) {
    if(!date) return '';
    return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
  }

  updateDate(e) {
    let value = e.target.value;
    this.setState({value, valid: true});
  }

  render() {
    let isDate = this.props.type === "date" ? "" : "hide";
    let icon =  this.state.icon === false ? "hide": "";
    let isTextOrPassword = this.props.type === "text" || this.props.type === "password" ? "" : "hide";
    let msgError = !this.state.error ? "hide" : "";
    let msgWarning = !this.state.warning ? "hide" : "";
    let pushMsg = this.state.icon === false ? "":"push-msg";

    return (
      <div>
        <div className={"search-by_date "+isDate}>
          <i className={"material-icons "+icon}>&#xE916;</i>
          <input type="date" className="input_start_at" value={this.state.value || ''} onChange={this.updateDate.bind(this)}/>
        </div>

        <div className={"search-by "+isTextOrPassword}>
          <button type="submit" className={"btn-search "+icon}>
            <i className="material-icons">&#xE8B6;</i>
          </button>
          <input type={this.props.type} autoComplete={this.props.autoComplete} className={"input-search "+(this.state.msgStyle )} title={this.props.title} placeholder={this.props.placeholder} onChange={this.bindValue(this)} />
          <small className={"input-msg error "+msgError+" "+pushMsg} >Campo invalido</small>
          <small className={"input-msg warning "+msgWarning+" "+pushMsg}>Campo vacio</small>
        </div>
      </div>
    )
  }
};
