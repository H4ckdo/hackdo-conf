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
              <h2 className="section-agenda__list__title">16 De junio</h2>  

              <li className="section-agenda__list__item">              
                <span className="section-agenda__list__item__title" >
                  <b>10 AM</b> Introduccion
                 </span>  
                <p className="section-agenda__list__item__copy">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                  Tercer piso salon <b>9A</b>
                </p>
              </li>

              <li className="section-agenda__list__item">              
                <span className="section-agenda__list__item__title" >
                  <b>2 PM</b> Introduccion a javascript
                </span>  
                <p className="section-agenda__list__item__copy">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
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


            <ol className="section-agenda__list">
              <h2 className="section-agenda__list__title">17 De junio</h2>  

              <li className="section-agenda__list__item">              
                <span className="section-agenda__list__item__title" >
                  <b>10 AM</b> Introduccion
                 </span>  
                <p className="section-agenda__list__item__copy">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                  Tercer piso salon <b>9A</b>
                </p>
              </li>

              <li className="section-agenda__list__item">              
                <span className="section-agenda__list__item__title" >
                  <b>2 PM</b> Introduccion a javascript
                </span>  
                <p className="section-agenda__list__item__copy">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
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

            <ol className="section-agenda__list">
              <h2 className="section-agenda__list__title">18 De junio</h2>  

              <li className="section-agenda__list__item">              
                <span className="section-agenda__list__item__title" >
                  <b>10 AM</b> Introduccion
                 </span>  
                <p className="section-agenda__list__item__copy">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                  Tercer piso salon <b>9A</b>
                </p>
              </li>

              <li className="section-agenda__list__item">              
                <span className="section-agenda__list__item__title" >
                  <b>2 PM</b> Introduccion a javascript
                </span>  
                <p className="section-agenda__list__item__copy">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
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


          </article>
        </section>
      </div>
    )
  }
}

module.exports = InjectChildComponent(Agenda, []);
