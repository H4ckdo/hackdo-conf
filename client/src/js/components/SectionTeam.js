const React = require('react');
const InjectChildComponent = require('./Inject.js');
import member_1 from '../../images/member_1.jpeg';
import member_2 from '../../images/member_2.jpeg';
import member_3 from '../../images/member_3.jpeg';
import member_4 from '../../images/member_4.jpeg';
import member_5 from '../../images/member_5.jpg';
import member_6 from '../../images/member_6.jpg';
import hero1 from '../../images/hero_1.jpg';
import hero2 from '../../images/speaker_1.jpg';

class SectionTeam extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: `Esneyder Amin Palacios Mena`,
          image: `${member_1}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              22 years old 👶👶👶, Javascript full stack developer, member and contributor at
                  <a href="https://twitter.com/H4ckdo" target="_blank"> @H4ckdo</a>   <a href="https://twitter.com/quibdojs">@quibdojs</a>
            </p>
          )
        },
        {
          title: `Miguel Casas Perea ツ`,
          image: `${member_2}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              <b>DEVELOPER POR PASION</b>
              <br/>
              #Researcher | #Engineer | #SoftwareDeveloper | #HackerPorPasion
            </p>
          )
        },
        {
          title: `Dékar`,
          image: `${member_3}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Ingeniero Teleinformático. Estudiante de Máster en BigData Co-Autor proy. Sembrando Seguridad TIC. Amante al Ethical Hacking y Legislación informática
            </p>
          )
        },
        {
          title: `Yerlin Matu`,
          image: `${member_4}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              👨🏾‍💻 I'm a cool software developer, Multitalented, self-taught and passionate about technology, graphic arts and free knowledge.
            </p>
          )
        },
        {
          title: `Fredy E`,
          image: `${member_5}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Founder of <a href="http://www.hackdo.co/">@H4ckdo</a>  + <a href="https://twitter.com/QuibdoJs">@Quibdojs</a> Javascript full stack developer. I write about programming, art, Traditional Animation and Watercolor
            </p>
          )
        },
        {
          title: `Luis Fernando Moreno`,
          image: `${member_6}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              #Researcher | #Engineer | #SoftwareDeveloper | #Teacher | <a href="http://fdomoreno.co/" target="_blank">fdomoreno.com</a>
            </p>
          )
        }
      ],
      heroes: [
        {
          title: `Juan Pablo Buriticá`,
          image: `${hero1}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
                VP of Eng | Dir of HC/Metal | IT intern
                <a href="https://twitter.com/splice" target="_blank"> @splice</a>
                - I build distributed eng teams and Latinamerican dev communities
                <br/>
                <a href="https://twitter.com/colombia_dev" target="_blank">@colombia_dev</a>
                <br/>
                <a href="https://twitter.com/jsconfco" target="_blank">@jsconfco</a>
                <br/>
                <a href="https://twitter.com/quecharla" target="_blank">@quecharla</a>
                <br/>
                <a href="https://twitter.com/bogotaJS" target="_blank">@bogotaJS</a>
            </p>
          )
        },
        {
          title: `Julián Duque`,
          image: `${hero2}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
               Developer and Educator - Engineer at <a target="_blank" href="https://twitter.com/NodeSource">@NodeSource</a> - Co-Organizer at <a target="_blank" href='https://twitter.com/Suncoastjs'>@Suncoastjs</a> <a href='https://twitter.com/MedellinJS'>@MedellinJS</a> <a href='https://twitter.com/jsconfco'>@JSConfCo</a> {'{Medellín, St. Petersburg, FL}'} - Satán es la Cumbia
            </p>
          )
        }
      ]
    }
  }
  render() {
    let { data, heroes } = this.state;
    return (
      <div className="wrap-team">
        <section className="section-team">
          <article className="section-team__article">
            <h1 className="section-team__article__title">
              Equipo Hackdó
              <div className="lower-bar"></div>
            </h1>
            <p className="section-team__article__copy">
              Un grupo emprendedor conformado por estudiantes y profesionales.
            </p>
            <div className="section-team__article__members">
              <ol className="section-team__article__members__wrap-items">
                {
                  data.map((info, index) => {
                    return (
                      <li className="section-team__article__members__wrap-items__item" key={index}>
                        <div style={
                          { 'backgroundImage': `url(${info.image})` }
                        } className="section-team__article__members__wrap-items__image"></div>
                        <span className="section-team__article__members__wrap-items__title">
                          {info.title}
                          <div className="lower-bar"></div>
                        </span>
                        {info.copy}
                      </li>
                    )
                  })
                }
              </ol>
            </div>

            <h2 className="section-team__article__title">
              Agradecimientos especiales
              <div className="lower-bar"></div>
            </h2>
            <p className="section-team__article__copy">
              Gracias a el apoyo y el amor de estos héroes sin capa el evento va en grande 💖
            </p>
            <div className="section-team__article__members">
              <ol className="section-team__article__members__wrap-items">
                {
                  heroes.map((info, index) => {
                    return (
                      <li className="section-team__article__members__wrap-items__item" key={index}>
                        <div style={
                          { 'backgroundImage': `url(${info.image})` }
                        } className="section-team__article__members__wrap-items__image"></div>
                        <span className="section-team__article__members__wrap-items__title">
                          {info.title}
                          <div className="lower-bar"></div>
                        </span>
                        {info.copy}
                      </li>
                    )
                  })
                }
              </ol>
            </div>
          </article>
        </section>
      </div>
    )
  }
}

module.exports = InjectChildComponent(SectionTeam, []);
