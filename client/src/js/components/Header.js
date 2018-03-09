const React = require('react');
const { connect } = require('react-redux');
const InjectChildComponent = require('./Inject.js');
const { Link } = require('react-router-dom');

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu() {
    let { isMenuOpen } = this.state;
    this.setState({isMenuOpen: !isMenuOpen});
  }

  render() {    
    return (
      <header className="header-container">
        <div className="header-content">  
          <div className="toggle-options" onClick={this.toggleMenu.bind(this)}>
            <i className="material-icons">reorder</i>
          </div>
          <div className="wrap-logo"></div> 
          <div className="wrap-options">
            <div className="wrap-slogan">
              <h1 className="title">HACKDÓ</h1>
              <h2 className="subtitle">CONF <span className="year">2018</span></h2>
            </div>
            <nav className={`col-nav ${this.state.isMenuOpen ? 'show' : 'hide' }`}>              
              <ul>
                <li> 
                  <Link to='/'>Speakers </Link>
                 </li>
                <li>
                 <Link to='/'>Programacion</Link>
                </li>
                <li>
                  <Link to='/'>Lugar de encuentro</Link>
                </li>
                <li>
                  <Link to='/'>Patrocionadores</Link>
                </li>
              </ul>
            </nav>
            <nav className="row-nav">
              <ul>
                <li>Speakers</li>
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
