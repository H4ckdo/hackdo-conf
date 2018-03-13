const React = require('react');
const { Link } = require('react-router-dom');
const InjectChildComponent = require('./Inject.js');

class SectionSpeakers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrap-section-speakers">
      <section className="section-speakers">
        <h1 className="section-speakers__title">
            Speakers
            <div className="lower-bar"></div>
        </h1>
         <article className="section-speakers__content">
            <ol className="section-speakers__content__list">
                <li className="section-speakers__content__list__item">
                    <div className="section-speakers__content__list__item__image"></div>
                    <span className="section-speakers__content__list__item__name">Nombre del speakers</span>
                    <p className="section-speakers__content__list__item__copy">
                      Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    </p>
                    <a className="" href="#" target="_blank">@Twiter</a>
                </li>    

                <li className="section-speakers__content__list__item">
                    <div className="section-speakers__content__list__item__image"></div>
                    <span className="section-speakers__content__list__item__name">Nombre del speakers</span>
                    <p className="section-speakers__content__list__item__copy">
                      Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    </p>
                    <a className="" href="#" target="_blank">@Twiter</a>
                </li>    

                <li className="section-speakers__content__list__item">
                    <div className="section-speakers__content__list__item__image"></div>
                    <span className="section-speakers__content__list__item__name">Nombre del speakers</span>
                    <p className="section-speakers__content__list__item__copy">
                      Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    </p>
                    <a className="" href="#" target="_blank">@Twiter</a>
                </li>    

            </ol>
         </article>   
      </section>
     </div>
    )
  }
}

module.exports = InjectChildComponent(SectionSpeakers, []);
