const React = require('react');
const InjectChildComponent = require('./Inject.js');
const { Link } = require('react-router-dom');

class SectionDate extends React.Component {
  constructor() {
    super();
  }

  goToRegister() {
    window.open("https://goo.gl/forms/BPEVsVOTguclB2yn1");
  }

  render() {
    return (
      <div className="background-section">
       <div className="background-section__date ">
        <span className="do-title appear ">
            JUNIO 8, 9 y 10
            <button onClick={this.goToRegister.bind(this)} className="background-section__date-btn-register">Inscribirse</button>
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
