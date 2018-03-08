const React = require('react');
const { connect } = require('react-redux');
const InjectChildComponent = require('./Inject.js');
const { Link } = require('react-router-dom');

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {    
    return (
      <header className="header-container">
        <div className="header-content">  
          <div className="wrap-logo"></div> 
          <div className="wrap-options">
            <div className="wrap-slogan">
              <h1 className="title">HACKDÓ</h1>
              <h2 className="subtitle">CONF <span className="year">2018</span></h2>
            </div>
            <nav>
              <ul>
                <li className="option-selected">Speakers</li>
                <li>Programacion</li>
                <li>Lugar de encuentro</li>
                <li>Patrocionadores</li>
              </ul>
            </nav>
          </div>
        </div> 
      </header>
    )
  }
}

module.exports = InjectChildComponent(Header, []);
