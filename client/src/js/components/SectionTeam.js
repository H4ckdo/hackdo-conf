const React = require('react');
const InjectChildComponent = require('./Inject.js');
import member_1 from '../../images/member_1.jpeg';
import member_2 from '../../images/member_2.jpeg';
import member_3 from '../../images/member_3.jpeg';
import member_4 from '../../images/member_4.jpeg';
import member_5 from '../../images/member_5.jpg';
import member_6 from '../../images/member_6.jpg';

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
                  <a href="https://twitter.com/H4ckdo" target="_blank">@H4ckdo</a>   <a href="https://twitter.com/quibdojs">@quibdojs</a>
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
              Maker, Emprendedor, Programador en startup <a href="http://medpike.com/" target="_blank">Medpike.com</a>. Ganador Medellin te reta 2014. Miembro de la Comunidad Quibdojs, fundador Chocó-libre, desarrollador web
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
      ]
    }
  }
  render() {
    let { data } = this.state;
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
          </article>
        </section>
      </div>
    )
  }
}

module.exports = InjectChildComponent(SectionTeam, []);
