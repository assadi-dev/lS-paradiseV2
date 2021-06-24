import React, { Component } from "react";
import "./joinSection.css";
import picture from "../../images/perso4.png";
import StaffCard from "../../components/Navbar/StaffCard";

class JoinSection extends Component {
  render() {
    return (
      <section id="join-section">
        <div className="container">
          <h2 id="title-join">Comment-nous Rejoindre</h2>
          <div id="row-join">
            <div className="col-join">
              <StaffCard
                title="Avoir un compte Steam"
                description={`Si vous ne possedez pas, inscrivez vous sur le site
                Télécharger le client en cliquant sur installer steam qui se situe en haut à droite du site, puis connectez-vous. `}
                link={"https://store.steampowered.com/"}
                text_button="Cliquer pour acceder"
              />
              <StaffCard
                title="Avoir FiveM Installé"
                description={`Télécharger le client ,cliquant sur "Download Client" sur le site FiveM `}
                link=""
                text_button="Cliquer pour acceder"
              />
            </div>
            <div className="col-join">
              <img className="img-fluid" src={picture} alt="perso-4" />
            </div>
            <div className="col-join">
              <StaffCard
                title="Avoir un compte Discord"
                description={`Télécharger et installer discord sur votre pc ne pas oublier de le lancer `}
                link=""
                text_button="Cliquer pour acceder"
              />
              <StaffCard
                title="Rejoindre notre serveur discord"
                link=""
                text_button="Rejoindre le serveur"
              />
            </div>
          </div>
          <hr className="featuretre-divider" />
        </div>
      </section>
    );
  }
}

export default JoinSection;
