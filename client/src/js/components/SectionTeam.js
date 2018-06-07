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
import hero3 from '../../images/speaker_9.jpg';
import hero4 from '../../images/hero_4.jpg';
import hero5 from '../../images/hero_5.jpeg';
import voluntary1 from '../../images/voluntary1.jpg';
import voluntary2 from '../../images/voluntary2.jpg';
import voluntary3 from '../../images/voluntary3.jpg';
import voluntary4 from '../../images/voluntary4.jpeg';
import voluntary5 from '../../images/voluntary5.jpeg';

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
        },
        {
          title: 'Yibson Alexis Leudo',
          image: `${hero4}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Full-Stack Web Developer
              <br/>
              apasionado con Angular y con .Net Core, me gusta compartir, aprender y enseñar todo lo que tenga que ver con tecnología.
            </p>
          )
        }, 
        {
          title: 'Yuji Kiriki',
          image: `${hero3}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Certified™ Buzzword© Surfer®. Living life async. Team homeopathy expert. Charlatan del SW. "Millennial Leader". My blog about SW: <a target="_blank" href="https://yujikiriki.github.io/">yujikiriki.com </a>
            </p>
          )
        },
        {
          title: 'Francisco Rafael Palacios',
          image: `${hero5}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Ing. Teleinformatico. 
              Vinculado a medios de comunicación desde el año 2008, en labores ingenieriles y periodisticas.
              Actualmente labora vomo Freelance para Grace Producciones y es el redactor de deportes del periódico Siglo XXI.
            </p>
          )          
        }
      ],
      voluntarios: [
        {
          title: 'Daniel Martinez',
          image: `${voluntary1}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Joven con una actitud positiva y de mucha Fe en Dios se apasionó aproximadamente a los 14 años por todo lo de sistemas en cómputo y todo lo que ha aprendido lo ha hecho por si mismo.
            </p>   
          )
        },
        {
          title: 'Miguel Palacios',
          image: `${voluntary2}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Prospecto ingeniero en sistemas 🎛⌨📟🖥📱💼
              Tecnólogo en redes de datos🛰🖥📱📡
              Tauro♉; Geminis♊Creencia ⚛🕉✡✝☦☪☮☯🔯🕎 <a href="https://twitter.com/mich1500" target="_blank"> @mich1500</a>
            </p>   
          )          
        },
        {
          title: 'Annyluz Rentería',
          image: `${voluntary3}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Soy estudiante en la normal  superior de quibdo y amo todo lo que tenga que ver con tecnología  y diseño de aplicaciones, páginas web, videojuegos etc...   
            </p>   
          )                    
        },
        {
          title: 'Lexy Garcés',
          image: `${voluntary4}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Apasionada estudiante de ingeniería de Sistemas👩🏾‍💻, Técnica en Sistemas y en Programación de Software. #Diosesmiguía <b>#Picis</b> <b>#Afrocolombiana</b>
            </p>   
          )                              
        },
        {
          title: 'Cristian Córdoba',
          image: `${voluntary5}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Tengo 21 años de edad, Soy Desarrollador Web Backend 🤗👨🏽‍💻, estudiante de Ingeniería de Sistemas, técnico en sistemas, técnico en programación. Amanten a la programación.
            </p>   
          )                                        
        }
      ]
    }
  }
  render() {
    let { data, heroes, voluntarios } = this.state;
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
              <b>Gracias</b> a el apoyo y el amor de estos héroes sin capa el evento va en grande 💖
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

            <h2 className="section-team__article__title">
              Equipo de voluntarios
              <div className="lower-bar"></div>
            </h2>
            <p className="section-team__article__copy">
              <b>Gracias</b> por el apoyo de nuestros voluntarios que se ponen la 10 y juegan con el equipo hackdó 💖
            </p>            
            <div className="section-team__article__members">
              <ol className="section-team__article__members__wrap-items">
                {
                  voluntarios.map((info, index) => {
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
