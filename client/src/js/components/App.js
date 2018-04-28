const React = require('react');
const ReactDOM = require('react-dom');
const InjectChildComponent = require('./Inject.js');

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { Footer, data, PopUp, Header, SectionDate, SectionAbout, SectionSpeakers, SectionAgenda, SectionVenue, SectionSponsors, SectionTeam } = this.props;
    return (
      <div>
        <Header/>
        <SectionDate/>
        <SectionAbout/>
        <SectionSpeakers/>
        <SectionAgenda/>
        <SectionVenue/>
        <SectionTeam/>
        <SectionSponsors/>
        <Footer/>
      </div>
    )
  }
}

module.exports = InjectChildComponent(App, [
  './PopUp.js',
  './Header.js',
  './SectionDate.js',
  './SectionAbout.js',
  './SectionSpeakers.js',
  './SectionAgenda.js',
  './SectionVenue.js',
  './SectionSponsors.js',
  './Footer.js',
  './SectionTeam.js'
]);
