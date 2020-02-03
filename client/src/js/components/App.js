const React = require("react");
const ReactDOM = require("react-dom");
const InjectChildComponent = require("./Inject.js");
var serviceWorker;

class App extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  subscribe() {
    Notification.requestPermission().then(result => {
      if (result === "granted") {
        const options = {
          userVisibleOnly: true,
          applicationServerKey: this.buildApplicationServerKey()
        };
        navigator.serviceWorker.ready.then(serviceWorkerRegistration => {
          serviceWorkerRegistration.pushManager
            .subscribe(options)
            .then(subscription => {
              console.log("endpoint ", subscription.endpoint);
              console.log("options ", subscription.options);
              this.sendSubscriptionToServer(subscription);
            });
        });
      }
    });
  }

  buildApplicationServerKey() {
    const base64 = window.publicServerKey;
    const rfc4648 = base64.replace(/-/g, "+").replace(/_/g, "/");
    const characters = atob(rfc4648)
      .split("")
      .map(character => character.charCodeAt(0));
    return new Uint8Array(characters);
  }

  async sendSubscriptionToServer(subscription, skip = false) {
    if (skip) return;
    try {
      const rawResponse = await fetch("/suscribe", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(subscription.toJSON())
      });
      const content = await rawResponse.json();
      console.log(content);
    } catch (error) {
      console.log("error ", error);
    }
  }

  async updateNotification(subscription) {
    if (localStorage.getItem("updated")) return;
    try {
      const rawResponse = await fetch("/update", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(subscription.toJSON())
      });
      const response = await rawResponse.json();
      if (response && response.ok) {
        localStorage.setItem("updated", true);
      }
    } catch (error) {
      console.log("error ", error);
    }
  }

  tryPushNotification() {
    navigator.serviceWorker.ready.then(serviceWorkerRegistration => {
      serviceWorkerRegistration.pushManager
        .getSubscription()
        .then(subscription => {
          // Do we already have a push message subscription?
          if (subscription) {
            console.log("endpoint ", subscription.toJSON());
            this.updateNotification(subscription);
            //this.sendSubscriptionToServer(subscription, true);
          } else {
            this.subscribe();
          }
        });
    });
  }

  componentDidMount() {
    if ("serviceWoker" in navigator) {
      navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for (let registration of registrations) {
          registration.unregister();
        }
      });
    }
    /*
    let self = this;
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(function (registration) {
       // self.tryPushNotification();
        if (registration.installing) {
          serviceWorker = registration.installing;
          console.log('installing');
          self.setState({ loading: true });
        } else if (registration.waiting) {
          serviceWorker = registration.waiting;
          self.setState({ loading: true });
          console.log('waiting');
        } else if (registration.active) {
          serviceWorker = registration.active;
          console.log('active');
          //setTimeout(() => self.setState({ loading: false }), 500);
        }

        if (serviceWorker) {
          console.log('current state ', serviceWorker.state);
          if (serviceWorker.state === 'activated') setTimeout(() => self.setState({ loading: false }), 1000);
          serviceWorker.addEventListener('statechange', function (e) {
            console.log('current state ', serviceWorker.state);
            if(e.target.state === 'activated') {
              console.log('activated')
              self.setState({ loading: false });
            }
            if (e.target.state === 'installing') {
              console.log('installing')
              self.setState({ loading: true });
            }
            if (e.target.state === 'redundant') {
              console.log('new sw replace old sw');
              self.setState({ loading: true });
            }
          });
        }

      }).catch(function (err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
        self.setState({ loading: false });
      });

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log("NUEVO SERVICE WORKER LISTO PARA TOMAR EL CONTROL")
        setTimeout(() => window.location.reload(), 500);
      });
    } else {
      self.setState({ loading: false });
    }
    */
  }

  render() {
    const {
      Footer,
      LoadBar,
      data,
      PopUp,
      Header,
      SectionDate,
      SectionAbout,
      SectionSpeakers,
      SectionAgenda,
      SectionVenue,
      SectionSponsors,
      SectionTeam
    } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <LoadBar display={loading} />
        <Header />
        <SectionDate />
        <SectionAbout />
        <SectionSpeakers />
        <SectionAgenda />
        <SectionVenue />
        <SectionSponsors />
        <SectionTeam />
        <Footer />
      </div>
    );
  }
}

module.exports = InjectChildComponent(App, [
  "./PopUp.js",
  "./Header.js",
  "./SectionDate.js",
  "./SectionAbout.js",
  "./SectionSpeakers.js",
  "./SectionAgenda.js",
  "./SectionVenue.js",
  "./SectionSponsors.js",
  "./Footer.js",
  "./SectionTeam.js",
  "./LoadBar.js"
]);
