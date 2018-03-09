const React = require('react');
const InjectChildComponent = require('./Inject.js');
const { Link } = require('react-router-dom');

class Section extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="background-section">
       <span className="background-section__date">QUIBDÓ-CHOCÓ / MAYO 16-18 DEL 2018</span>
      </div>
    )
  }
}

module.exports = InjectChildComponent(Section, []);
