const React = require('react');
const { connect } = require('react-redux');
const InjectChildComponent = require('./Inject.js');

class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <footer className="footer-container">
        <div className="footer-container__contact">
          <h2 className="footer-container__contact__title">
           Contacto
          </h2>
          <p className="footer-container__contact__copy">
            Síguenos en la redes sociales
             <span className="footer-container__contact__copy__ol__item">
              <a href="https://www.facebook.com/groups/1462262297359495/" target="_blank">
                <img src="/assets/images/fb-icon.png"/>
              </a>
            </span>

            <span className="footer-container__contact__copy__ol__item">
              <a href="https://twitter.com/H4ckdo" target="_blank">
                <img src="/assets/images/tw-icon.png"/>
              </a>
            </span>
            <br/>
            o escríbenos un email a <b>h4ckdo@gmail.com</b>
          </p>
        </div>
      </footer>
    )
  }
}

module.exports = InjectChildComponent(Footer, []);
