import React from "react";
import TwIcon from "@images/tw-icon.png";
import FbIcon from "@images/fb-icon.png";
import { Container } from "./Styles";

class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Container>
        <footer className="footer-container">
          <div className="footer-container__contact">
            <h2 className="footer-container__contact__title">Contacto</h2>
            <p className="footer-container__contact__copy">
              Síguenos en la redes sociales
              <span className="footer-container__contact__copy__ol__item">
                <a
                  href="https://www.facebook.com/groups/1462262297359495/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={FbIcon} />
                </a>
              </span>
              <span className="footer-container__contact__copy__ol__item">
                <a
                  href="https://twitter.com/H4ckdo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={TwIcon} />
                </a>
              </span>
              <br />o escríbenos un email a <b>h4ckdo@gmail.com</b>
            </p>
          </div>
        </footer>
      </Container>
    );
  }
}

export default Footer;
