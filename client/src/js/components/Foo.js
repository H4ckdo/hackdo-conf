const React = require('react');
const { Link } = require('react-router-dom');
const InjectChildComponent = require('./Inject.js');

class Foo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to={'/'}>GO TO MAIN</Link>
      </div>
    )
  }
}

module.exports = InjectChildComponent(Foo, []);
