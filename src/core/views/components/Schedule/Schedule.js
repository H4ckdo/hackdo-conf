import React from "react";
import { Container } from "./Styles";
import portada from "@images/portada.jpg";

class Schedule extends React.Component {
  constructor() {
    super();
  }

  goToRegister() {
    window.open("https://goo.gl/forms/FHYOQ9AsshrXgu1h1");
  }
  render() {
    return (
      <Container>
        <div className="background-section" style={{ backgroundImage: `url(${portada})` }}>
          <div className="background-section__date ">
            <span className="do-title appear ">
              ¡GRACIAS!
            </span>
          </div>
        </div>
      </Container>
    );
  }
}

export default Schedule;
