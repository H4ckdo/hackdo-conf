const React = require('react');
const { Link } = require('react-router-dom');
const InjectChildComponent = require('./Inject.js');

class Agenda extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrap-section-agenda">
        <section className="section-agenda">
          <article>
            <h1 className="section-agenda__title">
                Agenda
                <div className="lower-bar"></div>
             </h1>
            <ol className="section-agenda__list">
              <h2 className="section-agenda__list__title">8 De junio</h2>

              <li className="section-agenda__list__item">
                <span className="section-agenda__list__item__title" >
                  <b>2:00 PM</b> - Registro 🖊️
                 </span>
                 <p className="section-agenda__list__item__copy">
                   Registro de los asistentes.
                </p>
              </li>

              <li className="section-agenda__list__item">
                <span className="section-agenda__list__item__title" >
                  <b>3:00 PM</b> - Charla
                  <br/>                  
                 </span>
                <p className="section-agenda__list__item__copy">
                   <b>Rafael Socarras</b> - Expone <span>como crear emprendimiento de base tecnologica en colombia.</span>  
                </p>
              </li>

              <li className="section-agenda__list__item">
                <span className="section-agenda__list__item__title" >
                <b>3:30 PM</b> - Charla
                </span>
                <p className="section-agenda__list__item__copy">
                  <b>Romel Pérez</b> - Expone como iniciar tu carrera en programacion con <b>Open Source</b>.
                </p>
              </li>

              <li className="section-agenda__list__item">
                <span className="section-agenda__list__item__title" >
                  <b>4:00 PM</b> - Charla
                </span>
                <p className="section-agenda__list__item__copy">
                  <b>Oscar Rendon</b> - Entendiendo machine learning.
                </p>
              </li>

              <li className="section-agenda__list__item">
                <span className="section-agenda__list__item__title" >
                  <b>4:30 PM</b> - Pausa activa 🍕
                </span>
                <p className="section-agenda__list__item__copy">
                  Refrigerios
                </p>
              </li>

              <li className="section-agenda__list__item">
                <span className="section-agenda__list__item__title" >
                  <b>5:00 PM</b> - Charla
                </span>
                <p className="section-agenda__list__item__copy">
                  <b>Jota Rodriguez</b> - Realidad aumentada.
                </p>
              </li>

            </ol>

          {
            /*
            <ol className="section-agenda__list">
              <h2 className="section-agenda__list__title">9 De junio</h2>

              <li className="section-agenda__list__item">
                <span className="section-agenda__list__item__title" >
                  <b>8:00 AM</b> - Charla
                </span>
                <p className="section-agenda__list__item__copy">
                  <b>Yuji Kiriki</b> - Expone cuales son las habilidades relevantes de un desarrollador de software.
                </p>
              </li>

              <li className="section-agenda__list__item">
                <span className="section-agenda__list__item__title" >
                  <b>8:30 AM</b> - Charla
                 </span>
                <p className="section-agenda__list__item__copy">
                  <b>Jarlinton Moreno Zea</b> - Machine learning y complex network.  
                </p>
              </li>

              <li className="section-agenda__list__item">
                <span className="section-agenda__list__item__title" >
                  <b>4 PM</b> Video juegos
                </span>
                <p className="section-agenda__list__item__copy">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                </p>
              </li>
            </ol>           
            */
          }
          </article>
        </section>
      </div>
    )
  }
}

module.exports = InjectChildComponent(Agenda, []);
