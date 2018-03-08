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
        <h2>2-3 SEPT, 2016  MEDELLÍN, COLOMBIA</h2>
      </div>
    )
  }
}

module.exports = InjectChildComponent(Section, []);
