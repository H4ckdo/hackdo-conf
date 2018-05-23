const React = require('react');
const ReactDOM = require('react-dom');
const InjectChildComponent = require('./Inject.js');
var serviceWorker;

function buildApplicationServerKey() {
  const base64 = window.publicServerKey;
  const rfc4648 = base64.replace(/-/g, '+').replace(/_/g, '/');
  const characters = atob(rfc4648).split('').map(character => character.charCodeAt(0));
  return new Uint8Array(characters);
}

function subscribe() {
  Notification.requestPermission().then((result) => {
    if (result === 'granted') {
      const options = {
        userVisibleOnly: true,
        applicationServerKey: buildApplicationServerKey(),
      };
      navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
        serviceWorkerRegistration.pushManager.subscribe(options)
          .then((subscription) => {
            console.log('endpoint ', subscription.endpoint);
            console.log('options ', subscription.options);

            sendSubscriptionToServer(subscription);
          });
      });
    }
  });
}

window.subscribe = subscribe;

async function sendSubscriptionToServer(subscription, skip = false) {
  if(skip) return;
  try {
    const rawResponse = await fetch('/suscribe', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(subscription.toJSON())
    });
    const content = await rawResponse.json();
    console.log(content);
  } catch(error) {
    console.log('error ', error);
  }
}

async function updateNotification(subscription) {
  if (localStorage.getItem('updated')) return;
  try {
    const rawResponse = await fetch('/update', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(subscription.toJSON())
    });
    const response = await rawResponse.json();
    if (response && response.ok) {
      localStorage.setItem('updated', true);
    }
  } catch (error) {
    console.log('error ', error);
  }
}

function tryPushNotification() {
  navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
    serviceWorkerRegistration.pushManager.getSubscription().then((subscription) => {
        // Do we already have a push message subscription?
        if (subscription) {
          console.log('endpoint ', subscription.toJSON());
          updateNotification(subscription);
          //sendSubscriptionToServer(subscription, true);
        } else {
          subscribe();
        }
      });
  });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function (registration) {
    tryPushNotification();

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
    console.log("NUEVO SERVICE WORKER LISTO PARA TOMAR EL CONTROL")
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
