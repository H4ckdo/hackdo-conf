const React = require('react');
const { Link } = require('react-router-dom');
const InjectChildComponent = require('./Inject.js');

class SectionSpeakers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speakers: [
        {
          image: 'https://pbs.twimg.com/profile_images/973370095585120256/9STMOBrn_400x400.jpg',
          name: 'Julián Duque',
          bio: 'Developer and Educator - Engineer at @NodeSource - Co-Organizer at @Suncoastjs @MedellinJS @JSConfCo {Medellín, St. Petersburg, FL} - Satán es la Cumbia',
          link: 'https://twitter.com/julian_duque',
          nickname: '@julian_duque'
        },
        {
          image: 'https://pbs.twimg.com/profile_images/959616357615702016/AxcYu77t_400x400.jpg',
          name: 'Romel Pérez',
          bio: 'Software engineering autodidact. Enthusiast, JavaScript dev, Sci-Fi and nature fan. Making the world a better place through lines of code.',
          link: 'https://twitter.com/romelperez07',
          nickname: '@romelperez07'          
        },
        {
          image: 'https://pbs.twimg.com/profile_images/920878828645421057/jlmgoUDb_400x400.jpg',
          name: 'Fredy E',
          bio: 'Founder of @H4ckdo  + @Quibdojs Javascript full stack developer. I write about programming, art, Traditional Animation and Watercolor',
          link: 'https://twitter.com/xfry',
          nickname: '@xfry'          
        },
        {
          image: 'https://pbs.twimg.com/profile_images/840689870637006849/EXs4Tq2m_400x400.jpg',
          name: 'Oscar Rendon',
          bio: 'Cycling, programming, communities, math/ai enthusiast',
          link: 'https://twitter.com/orendon',
          nickname: '@orendon'          
        },
        {
          image: 'https://pbs.twimg.com/profile_images/809138513530654720/VgvOSRQT_400x400.jpg',
          name: 'Giovanny Gongora',
          bio: 'Support Engineer at @NodeSource. I spend time coding, giving talks at events and doing random stuff. Formerly @Mozilla.',
          link: 'https://twitter.com/Gioyik',
          nickname: '@Gioyik'          
        },
        {
          image: 'https://pbs.twimg.com/profile_images/975354262720077824/GFdVch8l_400x400.jpg',
          name: 'Giovanny Beltran',
          bio: 'Making games @juegos_indies - @bogotajs organizer mira mi canal: http://goo.gl/IDLO8C  http://agar3s.games ',
          link: 'https://twitter.com/agar3s',
          nickname: '@agar3s'                    
        }
      ]
    }
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
            <p className="section-speakers__content__copy">Envia tu propuesta de conferencia <span className="btn-speaker">Aqui</span></p>
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
                        <p className="section-speakers__content__list__item__copy">
                          { `${bio}` }
                        </p>
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
