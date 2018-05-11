const React = require('react');
const ReactDOM = require('react-dom');
const InjectChildComponent = require('./Inject.js');
/*
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function (registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function (err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}
*/

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
        <SectionSponsors/>
        <SectionTeam/>
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
