import React from 'react';
import '../../scss/components/Title.scss';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let style = "";
    if(this.props.narrow) style = "line-narrow";
    if(this.props.left) style = "line-left";
    if(this.props.right) style = "line-right";
    if(this.props.clean) style = "clean";

    return (
      <div className={"title-container "+style}>
        <div className="row">
          <h1 className="title">
            <div className="line-top"></div>{this.props.data}<div className="line-bottom "></div>
          </h1>
        </div>
      </div>
    )
  }
};
