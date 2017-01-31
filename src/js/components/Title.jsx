import React from 'react';
import '../../scss/components/Title.scss';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dashboard_header">
        <div className="row text-center">
          <h1 className="dashboard_title">
            <div className="line-top line-narrow"></div>{this.props.data}<div className="line-bottom line-narrow"></div>
          </h1>
        </div>
      </div>
    )
  }
};
