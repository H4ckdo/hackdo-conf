const React = require('react');
const ReactDOM = require('react-dom');
const { connect } = require('react-redux');
const InjectChildComponent = require('./Inject.js');
const { Link } = require('react-router-dom');

@connect((store) => {
  let Users = store.Users.data;
  //console.log('store ', store);
  return { Users }
})
class App extends React.Component {
  constructor() {
    super();
    // console.log('props ', this.props)
  }

  render() {
    const { data, PopUp, Header, SectionDate, SectionAbout } = this.props;
    return (
      <div>
        <Header/>
        <SectionDate/>
        <SectionAbout/>
      </div>
    )
  }
}

module.exports = InjectChildComponent(App, [
  './PopUp.js', 
  './Header.js', 
  './SectionDate.js',
  './SectionAbout.js'
]);
