import React from "react";
import Video from "@components/Video/Video";
import { Container } from './Styles';

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <div className="wrap-about">
          <section className="section-about">
            <article className="section-about__article">
              <h1 className="section-about__article__title">
                Acerca del evento
                <div className="lower-bar"></div>
              </h1>

              <p className="section-about__article__copy">
                <b>Hackdó Conf</b>, es el evento <b>gratuito</b> anual llevado a
                cabo por la <b>Hackdó Foundation</b> y <b>Partners</b>, que
                reúne a entusiasta emprendedores y desarrolladores durante tres
                días en la ciudad de Quibdó.
                <br />
                <br />
                Más de 2 años impactando el ecosistema de base tecnológica del
                Chocó, llegando a más de <b>200 personas</b> con{" "}
                <b>22 charlas</b> impartidas,{" "}
                <b>17 talleres sobre 4 lenguajes de programación</b> además de
                charlas sobre el Internet de las cosas y{" "}
                <b>programación de hardware</b>.
              </p>
            </article>

            <article className="section-about__video">
              <Video />
            </article>
          </section>
        </div>
      </Container>
    );
  }
}

export default About;
