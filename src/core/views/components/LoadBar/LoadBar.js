import React from "react";

class LoadBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { display = true } = this.props;
    return (
      <div className={` load-bar ${display ? "appear" : "disappear"}`}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    );
  }
};

export default LoadBar;
