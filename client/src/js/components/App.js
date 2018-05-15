const React = require('react');
const ReactDOM = require('react-dom');
const InjectChildComponent = require('./Inject.js');
var serviceWorker;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function (registration) {
    if (registration.installing) {
      serviceWorker = registration.installing;
      //console.log('installing');
    } else if (registration.waiting) {
      serviceWorker = registration.waiting;
      //console.log('waiting');
    } else if (registration.active) {
      serviceWorker = registration.active;
      //console.log('active');
    }
  }).catch(function (err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    //console.log("NUEVO SERVICE WORKER LISTO PARA TOMAR EL CONTROL")
    window.location.reload();
  });
}


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
