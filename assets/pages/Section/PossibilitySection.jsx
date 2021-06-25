import React, { Component } from "react";
import PossibilityCard from "../../components/possibility-card";
import "./possibility-section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTshirt,
  faCapsules,
  faCar,
  faBuilding,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import Gang from "../../components/Gang";

class PossiblitySection extends Component {
  render() {
    return (
      <section id="possibility-section">
        <div className="container">
          <h2 id="title-posibility">Possibilités</h2>
          <div id="rowPossibility">
            <PossibilityCard
              icon={
                <FontAwesomeIcon
                  className="icone-possibility"
                  icon={faTshirt}
                  size="2x"
                />
              }
              title="Tenues"
              description="Los Santos Paradise propose des vetements moddées pour sa communauté."
            />
            <PossibilityCard
              icon={<Gang /> }
              title="Gang/Organisation"
              description="Possibilité de créer son Gang/Organisation."
            />
            <PossibilityCard
              icon={
                <FontAwesomeIcon
                  className="icone-possibility"
                  icon={faCapsules}
                  size="2x"
                />
              }
              title="drogue"
              description="Si vous choisissez le côté obscur de la ville, devenez trafiquant !"
            />
            <PossibilityCard
              icon={
                <FontAwesomeIcon
                  className="icone-possibility"
                  icon={faCar}
                  size="2x"
                />
              }
              title="Véhicules"
              description="Venez acheter nos superbes voitures moddés."
            />
            <PossibilityCard
              icon={
                <FontAwesomeIcon
                  className="icone-possibility"
                  icon={faBuilding}
                  size="2x"
                />
              }
              title="Entreprises"
              description="Une Multitudes de métiers est à votre dispositions."
            />
            <PossibilityCard
              icon={
                <FontAwesomeIcon
                  className="icone-possibility"
                  icon={faTools}
                  size="2x"
                />
              }
              title="Environnements"
              description="Découvrez un environnement et une personnalistion unique dans l'univers du Roleplay."
            />
          </div>
        </div>
      </section>
    );
  }
}

export default PossiblitySection;
