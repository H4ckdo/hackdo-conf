const React = require('react');
const InjectChildComponent = require('./Inject.js');

class SectionVenue extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let mapElement = document.getElementById('venue-map');
    mapElement.innerHTML = `
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.178073462174!2d-76.66347725008087!3d5.687387995857421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e488f6da62de11d%3A0xb545d85aecc1e7a0!2sComfachoco!5e0!3m2!1ses-419!2sco!4v1525045034031"
      frameborder="0" style="border:0" allowfullscreen></iframe>
    `
  }

  render() {
    return (
      <div className="wrap-venue">
        <section className="section-venue">
          <article className="section-venue__article wrap-venue-map" id="venue-map"></article>

          <article className="section-venue__article">
              <h1 className="section-venue__article__title">
                Lugar de encuentro
                <div className="lower-bar"></div>
              </h1>

              <p className="section-venue__article__copy">
                Hotel <b>Comfachocó</b> ubicado en la ciudad de Quibdó a solo 5 minutos del aeropuerto el Caraño de la ciudad de Quibdó.
                    <b> Calle. 23 #5-1, Quibdó, Chocó</b>
              </p>
          </article>
        </section>
       </div>
    )
  }
}

module.exports = InjectChildComponent(SectionVenue, []);
