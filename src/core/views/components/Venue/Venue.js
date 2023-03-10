import React from "react";
import { Container } from "./Styles";

class Venue extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let mapComfachoco = document.getElementById("venue-map-comfachoco");
    let mapNormal = document.getElementById("venue-map-normal");
    mapComfachoco.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31761.510198575405!2d-76.63861136336621!3d5.685837071151528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4759686a7b2d74b0!2sCentro+Recreacional+Comfachoco!5e0!3m2!1ses-419!2sco!4v1525134914422" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    `;
    mapNormal.innerHTML = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15880.650963394428!2d-76.6670677376284!3d5.689609383692125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e488f6a0347aa81%3A0x6c6ad18cda08aa9a!2sEscuela+Normal+Superior+De+Quibdo!5e0!3m2!1ses-419!2sco!4v1528299192407" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    `;
  }

  render() {
    return (
      <Container>
        <div className="wrap-venue">
          <section className="section-venue">
            <article className="section-venue__article">
              <h1 className="section-venue__article__title">
                Lugar de encuentro, 8 y 9 de junio
                <div className="lower-bar"></div>
              </h1>

              <p className="section-venue__article__copy">
                Hotel <b>Comfachocó</b> ubicado en la ciudad de Quibdó a solo 5
                minutos del aeropuerto el Caraño.
                <br />
                <b>📍 a 23-183,, Cl. 24 #231, Quibdó, Chocó</b>
              </p>
            </article>
            <article
              className="section-venue__article wrap-venue-map"
              id="venue-map-comfachoco"
            ></article>
          </section>

          <section className="section-venue">
            <article className="section-venue__article">
              <h1 className="section-venue__article__title">
                Lugar de encuentro, 10 de junio
                <div className="lower-bar"></div>
              </h1>

              <p className="section-venue__article__copy">
                <b>ViveLab</b> de la institución educativa{" "}
                <b>Escuela Normal Superior de Quibdó</b>.
                <br />
                <b>📍 a 9-124,, Cra. 6 #930, Quibdó, Chocó</b>
              </p>
            </article>
            <article
              className="section-venue__article wrap-venue-map"
              id="venue-map-normal"
            ></article>
          </section>
        </div>
      </Container>
    );
  }
}

export default Venue;
