const React = require('react');
const InjectChildComponent = require('./Inject.js');
const { Link } = require('react-router-dom');

class SectionAbout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="wrap-about">
        <section className="section-about">
          <article className="section-about__article">
              <h1 className="section-about__article__title">
                Acerca del evento
                <div className="lower-bar"></div>
              </h1>

              <p className="section-about__article__copy">
                Hackdó Conf, es el evento anual llevado a cabo por la Hackdó Foundation y Partners, que reúne a entusiasta emprendedores y desarrolladores durante dos días en la ciudad de Quibdó.
                <br/>
                Más de 2 años impactando el ecosistema de base tecnológica del Chocó,
                llegando a más de <b>200 personas</b> con <b>22 charlas</b> impartidas, <b>17 talleres sobre 4 lenguajes de programacióna</b> además de charlas sobre el internet de las cosas y <b>programación de hardware</b>.
              </p>
          </article>

          <article className="section-about__article wrap-about-image">
            <div className="section-about__article-image"></div>
          </article>


        </section>
       </div>
    )
  }
}

module.exports = InjectChildComponent(SectionAbout, []);
