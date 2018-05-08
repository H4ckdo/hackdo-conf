const React = require('react');
const InjectChildComponent = require('./Inject.js');
import Sponsor1 from '../../images/sponsor_1.jpg';
import Sponsor2 from '../../images/sponsor_2.jpg';
import Sponsor3 from '../../images/sponsor_3.png';
import Sponsor4 from '../../images/sponsor_4.jpg';
import Sponsor5 from '../../images/sponsor_5.png';
import Sponsor6 from '../../images/sponsor_6.jpg';
import Sponsor7 from '../../images/sponsor_7.png';
import Sponsor8 from '../../images/sponsor_8.jpg';

class SectionSponsors extends React.Component {
  constructor() {
    super();
  }

  join() {
    //window.location.href = 'https://goo.gl/forms/fABJGuh1bqm3Ua5g2';
    window.open("https://goo.gl/forms/fABJGuh1bqm3Ua5g2");
  }

  render() {
    return (
      <div className="wrap-sponsors">
        <section className="section-sponsors">
          <article className="section-sponsors__article">
              <h1 className="section-sponsors__article__title">
                Patrocinadores
                <div className="lower-bar"></div>
              </h1>
              <p className="section-sponsors__article__copy">
                Gracias a estos patrocinadores la <b>Hackdó Conf</b> es posible, ayúdanos y conviértete en un patrocinador tu también
                <button className="section-sponsors__article__copy__join" onClick={this.join.bind()}>Unirse</button>
              </p>
          </article>
          <article className="section-sponsors__article__list">
            <h2 className="section-sponsors__article__list__gold__title">Gold</h2>
            <ol className="section-sponsors__article__list__gold">
              <li className="section-sponsors__article__list__gold__item">
                <a href="https://nodesource.com" target="_blank">
                  <img className="section-sponsors__article__list__gold__img" src={`${Sponsor1}`}/>
                </a>
              </li>
              <li className="section-sponsors__article__list__gold__item">
                <a href="http://www.samitic.com/" target="_blank">
                  <img className="section-sponsors__article__list__gold__img" src={`${Sponsor2}`}/>
                </a>
              </li>

              <li className="section-sponsors__article__list__gold__item">
                <a href="https://s4n.co/" target="_blank">
                  <img className="section-sponsors__article__list__gold__img" src={`${Sponsor3}`} />
                </a>
              </li>

              <li className="section-sponsors__article__list__gold__item">
                <a href="#" target="_blank">
                  <img className="section-sponsors__article__list__gold__img" src={`${Sponsor8}`} />
                </a>
              </li>

              <li className="section-sponsors__article__list__gold__item">
                <a href="http://www.comfachoco.com.co/" target="_blank">
                  <img className="section-sponsors__article__list__gold__img" src={`${Sponsor5}`} />
                </a>
              </li>

              <li className="section-sponsors__article__list__gold__item">
                <a href="https://twitter.com/colombia_dev" target="_blank">
                  <img className="section-sponsors__article__list__gold__img" src={`${Sponsor6}`} />
                </a>
              </li>

            </ol>

            <h2 className="section-sponsors__article__list__silver__title">Silver</h2>
            <ol className="section-sponsors__article__list__silver">
              <li className="section-sponsors__article__list__silver__item">
                <a href="http://enamoratedelchoco.co/" target="_blank">
                  <img className="section-sponsors__article__list__silver__img" src={`${Sponsor4}`}/>
                </a>
              </li>

              <li className="section-sponsors__article__list__silver__item">
                <a href="http://www.camarachoco.org.co/" target="_blank">
                  <img className="section-sponsors__article__list__silver__img" src={`${Sponsor7}`} />
                </a>
              </li>

            </ol>

          </article>

        </section>
       </div>
    )
  }
}

module.exports = InjectChildComponent(SectionSponsors, []);
