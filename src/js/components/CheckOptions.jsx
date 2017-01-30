import React from 'react';

export default class CheckOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked: this.props.checked};
    this.props.giveChilds(this);
  }

  getOptions() {
    let name = this.props.name;
    if(!name) return;
    return (
      <div className={`check-options ${name}` } >
        <input type="radio" className="hide" name='checkOption' id={name} checked={this.state.checked} onChange={this.props.onChange.bind(this)} />
        <label htmlFor={name}>
          <i className={`material-icons ${this.state.checked ? '': 'hide'}` }>&#xE837;</i>
          <i className={`material-icons ${this.state.checked ? 'hide': ''}`}>&#xE836;</i>
         <span> {name}</span>
        </label>
      </div>
     )
  }

  render() {
    return this.getOptions();
  }
};
