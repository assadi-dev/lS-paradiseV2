import React, { Component, useEffect } from "react";
import "./presentation.css";
import img from "../../images/picture1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import WOW from "wowjs";

class Presentation extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <section
        id="presentation-section"
        className="wow animate__fadeIn"
        data-wow-duration="1s"
      >
        <div className="container">
          <div id="rowPresentation">
            <div id="cardNews">
              <img id="imgPresentation" src={img} alt="picture_1" />
            </div>
            <div id="textPresentation">
              <h2 id="titlePresentation">Nouvauté</h2>
              <p className="text-format">Télécharger notre nouveau Launcher </p>
              <hr id="separatorPerso" />
              <p className="text-format">
                - Il vous permet de vous connecter rapidement.
              </p>
              <p className="text-format">
                - Acceder au fichier FiveM en un seul clique
              </p>
              <p className="text-format">
                - Possibilité d'afficher les infos de votre personnage
              </p>
              <a className="btn btn-presentation">
                Télécharger
                <FontAwesomeIcon className="dowIcon" icon={faDownload} />
              </a>
            </div>
          </div>
          <hr className="featuretre-divider" />
        </div>
      </section>
    );
  }
}

export default Presentation;
