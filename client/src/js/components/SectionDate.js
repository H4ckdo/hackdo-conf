const React = require('react');
const InjectChildComponent = require('./Inject.js');
const { Link } = require('react-router-dom');

class SectionDate extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="background-section">
       <div className="background-section__date ">
        <span className="do-title appear ">
            JUNIO 9 y 10
            {/*<div className="lower-bar"></div>*/}
        </span>
        {
          /*
         <small className="do-date">
            JUNIO 16-18 DEL 2018
            <div className="lower-bar"></div>
          </small>
          */
        }
        </div>
      </div>
    )
  }
}

module.exports = InjectChildComponent(SectionDate, []);
