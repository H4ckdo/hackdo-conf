import React from 'react';
import '../../scss/components/InputDate.scss';

export default class InputDate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="search-by_date">
        <i className="material-icons">&#xE916;</i>
        <input type="date" className="input_start_at"/>
      </div>
    )
  }
};
