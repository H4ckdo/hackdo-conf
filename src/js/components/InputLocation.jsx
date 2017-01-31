import React from 'react';
import '../../scss/components/InputLocation.scss';

export default class InputLocation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      param: 'location',
      error: false,
      warning: false,
      msgStyle: 'valid',
      valid: false,
      value: ''
    };
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

  render() {
    return (
      <div className="search-by_location">
        <button type="submit" className="btn-search_location"><i className="material-icons">&#xE8B6;</i> </button>
        <input type="text"  autoComplete={true} className={"input-search_location "+(this.state.msgStyle )} title={this.props.title} placeholder={this.props.placeholder} onChange={this.bindValue(this)} />
        <small className={"input-msg error "+ (!this.state.error ? 'hide' : '')} >Campo invalido</small>
        <small className={"input-msg warning "+ (!this.state.warning ? 'hide' : '')} >Campo vacio</small>
      </div>
    )
  }
};
