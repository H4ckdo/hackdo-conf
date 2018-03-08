const React = require('react');
const { Route } = require('react-router');
const InjectChildComponent = require('./Inject.js');
let routes = require('anchors/pages.json');

class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return routes.map((route, index) =>
      <Route key={index} {...route } component={this.props[route.component]} />
    )
  }
}

module.exports = InjectChildComponent(Routes, routes.map(route => `./${route.component}.js`));