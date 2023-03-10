import React from "react";
import menuClose from "@images/menu-close.png"; 
import menuOptions from "@images/menu-options.png"; 
import { Container } from "./Styles";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      color: "",
    };
  }

  scrollBy(distance, duration) {
    var initialY = document.body.scrollTop;
    var y = initialY + distance;
    var baseY = (initialY + y) * 0.5;
    var difference = initialY - baseY;
    var startTime = performance.now();
    function step() {
      var normalizedTime = (performance.now() - startTime) / duration;
      if (normalizedTime > 1) normalizedTime = 1;

      window.scrollTo(
        0,
        baseY + difference * Math.cos(normalizedTime * Math.PI)
      );
      if (normalizedTime < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  onScroll(background, HeaderContainer, e) {
    let calc = background.offsetHeight - HeaderContainer.offsetHeight - 180;
    //console.log(window.scrollY, calc);
    if (window.scrollY >= calc) {
      this.setState({ color: "header-black" });
    } else {
      this.setState({ color: "" });
    }
  }

  goDown(id) {
    if (typeof window !== "undefined") {
      let element = document.querySelector(id);
      var rect = element.getBoundingClientRect();
      //this.scrollBy(element.offsetTop - 143, 1000);
      window.scrollTo(0, element.offsetTop - 143);
      this.setState({ isMenuOpen: false });
    }
  }

  componentDidMount() {
    let background = document.getElementsByClassName("background-section")[0];
    let HeaderContainer = document.getElementById("HeaderContainer");
    window.addEventListener(
      "scroll",
      this.onScroll.bind(this, background, HeaderContainer)
    );
    window.addEventListener("resize", (e) => {
      if (visualViewport.width > 768) {
        if (this.state.isMenuOpen) this.setState({ isMenuOpen: false });
      }
    });
  }

  toggleMenu() {
    let { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  }

  render() {
    let { color, isMenuOpen } = this.state;
    return (
      <Container>
        <header className={`header-container ${color}`} id="HeaderContainer">
          <div className="header-content">
            <div
              className="toggle-options"
              onClick={this.toggleMenu.bind(this)}
            >
              <img
                width="28px"
                height="28px"
                src={
                  isMenuOpen
                    ? menuClose 
                    : menuOptions 
                }
              />
            </div>

            <div className="wrap-logo"></div>
            <div className="wrap-options">
              <div className="wrap-slogan">
                <h1 className="title">HACKDÓ</h1>
                <h2 className="subtitle">
                  CONF <span className="year">2018</span>
                </h2>
              </div>

              <nav
                className={`col-nav ${
                  this.state.isMenuOpen ? "appear show" : "disappear hide"
                }`}
              >
                <ul>
                  <li
                    onClick={this.goDown.bind(this, ".wrap-section-speakers")}
                  >
                    Speakers
                  </li>
                  <li onClick={this.goDown.bind(this, ".wrap-section-agenda")}>
                    Agenda
                  </li>
                  <li onClick={this.goDown.bind(this, ".wrap-venue")}>
                    Lugar de encuentro
                  </li>
                  <li onClick={this.goDown.bind(this, ".wrap-sponsors")}>
                    Patrocinadores
                  </li>
                  <li onClick={this.goDown.bind(this, ".wrap-team")}>Equipo</li>
                </ul>
              </nav>

              <nav className="row-nav">
                <ul>
                  <li
                    onClick={this.goDown.bind(this, ".wrap-section-speakers")}
                  >
                    Speakers
                  </li>
                  <li onClick={this.goDown.bind(this, ".wrap-section-agenda")}>
                    Agenda
                  </li>
                  <li onClick={this.goDown.bind(this, ".wrap-venue")}>
                    Lugar de encuentro
                  </li>
                  <li onClick={this.goDown.bind(this, ".wrap-sponsors")}>
                    Patrocinadores
                  </li>
                  <li onClick={this.goDown.bind(this, ".wrap-team")}>Equipo</li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </Container>
    );
  }
}

export default Header;
