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
            <div className="section-agenda__wrap_dates">
              <ol className="section-agenda__list">
                <h2 className="section-agenda__list__title">8 De junio</h2>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>1:00 PM</b> - Registro 🖊️
                </span>
                  <p className="section-agenda__list__item__copy">
                    Registro de los asistentes.
                </p>
                </li>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>2:30 PM</b> - Charla
                  <br />
                  </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Rafael Socarras</b> - <span>Como crear emprendimiento de base tecnologica en colombia.</span>
                  </p>
                </li>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>3:00 PM</b> - Charla
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Santiago Bernal</b> - Buscando en el internet de las cosas con shodan.
                </p>
                </li>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>3:30 PM</b> - Charla
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Oscar Rendon</b> - Entendiendo machine learning.
                </p>
                </li>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>4:00 PM</b> - Pausa activa 🍕
                </span>
                  <p className="section-agenda__list__item__copy">
                    Refrigerios.
                </p>
                </li>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>4:30 PM</b> - Charla
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Jota Rodriguez</b> - Realidad aumentada.
                </p>
                </li>


                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>5:00 PM</b> - Charla
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Romel Pérez</b> - Como iniciar tu carrera en la programacion con <b>Open Source</b>.
                </p>
                </li>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>5:30 PM</b> - Charla
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Juan David Castillo Betancur</b> - Haciendo código mas expresivo, seguro y mantenible con programacion funcional.
                </p>
                </li>

              </ol>

              <ol className="section-agenda__list">
                <h2 className="section-agenda__list__title">9 De junio</h2>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>8:00 AM</b> - Charla
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Yuji Kiriki</b> - Habilidades relevantes de un desarrollador de software.
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
                    <b>9:00 AM</b> - Charla
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Giovanny Beltran </b> - TBD
                </p>
                </li>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>9:30 AM</b> - Pausa activa 🍕
                </span>
                  <p className="section-agenda__list__item__copy">
                    Refrigerios.
                </p>
                </li>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>9:45 AM</b> - Charla
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Valeria Garcia Gonzalez</b> - Como diseñar y desarrollar interfaces pensando en patrones y componentes.
                </p>
                </li>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>10:15 AM</b> - Charla
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Giovanny Gongora</b> - TBD
                </p>
                </li>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>11:15 AM</b> - Charla
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Julian Duque</b> - Cómo contribuir a Node.js y Open Source
                </p>
                </li>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>1:00 PM</b> - Charla
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Alejandra Giraldo</b> - Asynchronous Javascript, Promesas & Observables.
                </p>
                </li>

              </ol>

              <ol className="section-agenda__list">
                <h2 className="section-agenda__list__title">10 De junio</h2>
                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>9:00 AM</b> - Taller
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Julián Duque</b> - Construyendo el backend de una una aplicación web con <b>Node.js</b>.
                </p>
                </li>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>9:00 AM</b> - Taller
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Juan Pablo Correa Rendón</b> - Como construir un API REST en Scala con <b>Akka HTTP</b>.
                </p>
                </li>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>10:00 AM</b> - Taller
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Laura Camacho Vásquez</b> - Lógica matemática mediante el uso de un lenguaje declarativo <b>(Prolog)</b>.
                </p>
                </li>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>10:00 AM</b> - Taller
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Alejandra Giraldo</b> - Construyendo el frontend de una aplicación web con <b>Angular</b>.
                </p>
                </li>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>11:00 AM</b> - Taller
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Harlen giraldo ortega</b> - Uso de las progresive web apps.
                </p>
                </li>

                <li className="section-agenda__list__item">
                  <span className="section-agenda__list__item__title" >
                    <b>1:00 PM</b> - Taller
                </span>
                  <p className="section-agenda__list__item__copy">
                    <b>Juan David Castillo Betancur</b> - ¿ Que es docker y para que sirve?
                </p>
                </li>

              </ol>
            </div>
          </article>
        </section>
      </div>
    )
  }
}

module.exports = InjectChildComponent(Agenda, []);
