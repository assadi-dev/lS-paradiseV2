import React, { Component } from "react";
import "./intro.css";
import logo from "../../images/logo_lsp2V.png";

export class Intro extends Component {
  render() {
    return (
      <header id="intro">
        <div className="container-fluid">
          <div id="rowHeader">
            <div id="logoHeaderZone">
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
