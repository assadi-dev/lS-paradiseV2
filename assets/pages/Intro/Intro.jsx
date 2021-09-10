import React, { Component } from "react";
import "./intro.css";
import logo from "../../images/logo_lsp2V.png";
import WOW from "wowjs";

export class Intro extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <header id="intro">
        <div className="container-fluid">
          <div id="rowHeader">
            <div
              id="logoHeaderZone"
              className="wow animate__fadeIn"
              data-wow-duration="2s"
            >
              <img id="imgLogo" src={logo} alt="Logo_LSP" />
              <h1 id="introTitle">LS Paradise Roleplay</h1>
              <p id="welcomeText">Vous souhaite bienvenue</p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Intro;
