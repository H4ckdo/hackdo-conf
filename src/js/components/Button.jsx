import React from 'react';
import '../../scss/components/Button.scss';


export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.data = this.props.data;
    this.state.type = this.props.type;
    this.state.style = this.props.style;
    this.state.icon = this.props.icon;
  }

  render() {
    return (
      <div>
        <button className={"btn "+this.state.style} type={this.state.type}>
          <span>{this.state.data}</span>
          <i className="material-icons">&#xE853;</i>
        </button>
      </div>
    )
  }

};
