import React from 'react';
import '../../scss/components/Footer.scss';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <footer className="footer">
        <div className="row large-10">
          <div className="columns large-8">
            <h4 className="hackdo-title">HACKDO FOUNDATION</h4>
            <p className="hackdo-copy">
              Creando el futuro del ecosistema de emprendimiento y tecnología del Chocó con ❤.
            </p>
          </div>

          <div className="columns large-4 wrap-hackdo-contact">
            <h4>Contacto</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Github</a></li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
};
