import React from "react";
import Agenda from "@components/Agenda/Agenda";
import Header from "@components/Header/Header";
import Schedule from "@components/Schedule/Schedule";
import About from "@components/About/About";
import Speakers from "@components/Speakers/Speakers";
import Venue from "@components/Venue/Venue";
import Team from "@components/Team/Team";
import Footer from "@components/Footer/Footer";
import Sponsors from "@components/Sponsors/Sponsors";
import { Container } from './views/styles/App';

function App() {
  return (
    <Container>
      <Header />
      <Schedule />
      <About />
      <Speakers />
      <Agenda />
      <Venue />
      <Sponsors />
      <Team />
      <Footer />
    </Container>
  );
}

export default App;
