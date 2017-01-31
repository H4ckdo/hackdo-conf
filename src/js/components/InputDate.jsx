import React from 'react';
import '../../scss/components/InputDate.scss';

export default class InputDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      param: 'startAt',
      valid: false,
      value: this.dateFormatISO(this.props.value || null)
    };
    this.props.lift(this);
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
    return (
      <div className="search-by_date">
        <i className="material-icons">&#xE916;</i>
        <input type="date" className="input_start_at" value={this.state.value} onChange={this.updateDate.bind(this)}/>
      </div>
    )
  }
};
