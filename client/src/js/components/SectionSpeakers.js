const React = require('react');
const { Link } = require('react-router-dom');
const InjectChildComponent = require('./Inject.js');

class SectionSpeakers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section-speakers">
        <h1 className="section-speakers__title">
            Speakers
            <div className="lower-bar"></div>
        </h1>
         <div className="section-speakers__content">
            <ol className="section-speakers__content__list">
                <li className="section-speakers__content__list__item">
                    <div className="section-speakers__content__list__item__image"></div>
                    <span className="section-speakers__content__list__item__name">Nombre del speakers</span>
                    <a className="" href="#" target="_blank">@Twiter</a>
                </li>    

                <li className="section-speakers__content__list__item">
                    <div className="section-speakers__content__list__item__image"></div>
                    <span className="section-speakers__content__list__item__name">Nombre del speakers</span>
                    <a className="" href="#" target="_blank">@Twiter</a>
                </li>    

                <li className="section-speakers__content__list__item">
                    <div className="section-speakers__content__list__item__image"></div>
                    <span className="section-speakers__content__list__item__name">Nombre del speakers</span>
                    <a className="" href="#" target="_blank">@Twiter</a>
                </li>    

            </ol>
         </div>   
      </section>
    )
  }
}

module.exports = InjectChildComponent(SectionSpeakers, []);
