const React = require('react');
import Speaker1 from '../../images/speaker_1.jpg';
import Speaker2 from '../../images/speaker_2.jpg';
import Speaker3 from '../../images/speaker_3.jpg';
import Speaker4 from '../../images/speaker_4.jpg';
import Speaker5 from '../../images/speaker_5.jpg';
import Speaker6 from '../../images/speaker_6.jpg';

const InjectChildComponent = require('./Inject.js');
class SectionSpeakers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speakers: [
        {
          image: Speaker1,
          name: 'Julián Duque',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Developer and Educator - Engineer at <a target="_blank" href="https://twitter.com/NodeSource">@NodeSource</a> - Co-Organizer at <a target="_blank" href='https://twitter.com/Suncoastjs'>@Suncoastjs</a> <a href='https://twitter.com/MedellinJS'>@MedellinJS</a> <a href='https://twitter.com/jsconfco'>@JSConfCo</a> {'{Medellín, St. Petersburg, FL}'} - Satán es la Cumbia
            </p>
          ),
          link: 'https://twitter.com/julian_duque',
          nickname: '@julian_duque'
        },
        {
          image: Speaker2,
          name: 'David Castillo',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              I’m David Castillo, a Software Developer/ Systems Engineer based in Medellin, Colombia.
              I write code, and run the Medellin DevOps Meetup. I like to photograph stuff from time to time.
            </p>
          ),
          link: 'https://twitter.com/castillobgr',
          nickname: '@castillobgr'
        },
        {
          image: Speaker3,
          name: 'Romel Pérez',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Software engineering autodidact. Enthusiast, JavaScript dev, Sci-Fi and nature fan. Making the world a better place through lines of code.
            </p>
          ),
          link: 'https://twitter.com/romelperez07',
          nickname: '@romelperez07'
        },
        {
          image: Speaker4,
          name: 'Oscar Rendon',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Cycling, programming, communities, math/ai enthusiast
            </p>
          ),
          link: 'https://twitter.com/orendon',
          nickname: '@orendon'
        },
        {
          image: Speaker5,
          name: 'Giovanny Gongora',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Support Engineer at <a target="_blank" href="https://twitter.com/NodeSource">@NodeSource</a>. I spend time coding, giving talks at events and doing random stuff. Formerly <a target="_blank" href='https://twitter.com/mozilla'>@Mozilla</a>.
            </p>
          ),
          link: 'https://twitter.com/Gioyik',
          nickname: '@Gioyik'
        },
        {
          image: Speaker6,
          name: 'Giovanny Beltran',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Making games <a target="_blank" href='https://twitter.com/juegos_indies'>@juegos_indies</a> - <a target="_blank" href='https://twitter.com/bogotajs'>@bogotajs</a> organizer mira mi canal: <a target="_blank" href=' http://goo.gl/IDLO8C'>Youtube</a> y mi <a target="_blank" href='http://agar3s.games'>pagina web</a>.
            </p>
          ),
          link: 'https://twitter.com/agar3s',
          nickname: '@agar3s'
        }
      ]
    }
  }

  proposal() {
    window.location.href = "https://goo.gl/forms/60LHY4IjvvTDyumH2";
  }

  render() {
    let { speakers} = this.state;
    return (
      <div className="wrap-section-speakers">
      <section className="section-speakers">
        <h1 className="section-speakers__title">
            Speakers
            <div className="lower-bar"></div>
        </h1>
         <article className="section-speakers__content">
            <p className="section-speakers__content__copy">Envia tu propuesta de conferencia <span className="btn-speaker" onClick={ this.proposal.bind(this) }>Aqui</span></p>
            <ol className="section-speakers__content__list">
              {
                speakers.map(({name, image, link, nickname, bio}, index) => {
                  return (
                    <li className="section-speakers__content__list__item" key={index}>
                        <div className="section-speakers__content__list__item__image" style={
                          { 'backgroundImage': `url(${image})` }
                         }></div>
                        <span className="section-speakers__content__list__item__name">
                          { name }
                        </span>
                        { bio }
                        <a className="twiter-link" target="_blank" href={link} target="_blank">{nickname}</a>
                    </li>
                  )
                })
              }

            </ol>
         </article>
      </section>
     </div>
    )
  }
}

module.exports = InjectChildComponent(SectionSpeakers, []);
