const React = require('react');
const { Link } = require('react-router-dom');
const InjectChildComponent = require('./Inject.js');

class Agenda extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrap-agenda-section">
        <section className="agenda-section">
          <ol>
            <span>16 DE JUNIO</span>  
            <li>
              <span>Introduccion</span>  
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              </p>
            </li>
          </ol>
        </section>
      </div>
    )
  }
}

module.exports = InjectChildComponent(Agenda, []);
