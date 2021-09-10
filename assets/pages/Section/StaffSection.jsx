import React, { Component } from "react";
import "./staffSection.css";
import picture from "../../images/perso2.png";
import StaffCard from "../../components/Staff-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAssistiveListeningSystems,
  faHandshake,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import WOW from "wowjs";

export class StaffSection extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <section
        id="staff-section"
        className="wow animate__fadeIn"
        data-wow-duration="0.5s"
      >
        <div className="container">
          <h2 id="titleStaff">STAFF</h2>
          <div id="rowStaffSection">
            <div id="staff-card">
              <div className="row-staff-description">
                <StaffCard
                  animation="animate__fadeInLeft "
                  duration="2.5s"
                  delay="0.5s"
                  colorIcon="text-indigo"
                  icon={
                    <FontAwesomeIcon
                      icon={faAssistiveListeningSystems}
                      size="2x"
                    />
                  }
                  title="Un staff reactif"
                  description="Nous sommes le plus possible à l'écoute des joueurs ! Notre temps de réponses est estimé entre 4-5 minutes"
                />
                <StaffCard
                  colorIcon="blue-text"
                  animation="animate__fadeInLeft"
                  duration="2.5s"
                  delay="1s"
                  icon={<FontAwesomeIcon icon={faServer} size="2x" />}
                  title="64 slots"
                  description="Vous retrouverez 64 slots."
                />
                <StaffCard
                  colorIcon="cyan-text"
                  animation="animate__fadeInLeft"
                  duration="2.5s"
                  delay="1.5s"
                  icon={<FontAwesomeIcon icon={faHandshake} size="2x" />}
                  title="Roleplay & Fair-play"
                  description="La qualité du roleplay, la cohérence et le fair-play sont de vigueur sur le serveur."
                />
              </div>
            </div>
            <div id="staff-picture">
              <img className="img-fluid" src={picture} alt="perso-2" />
            </div>
          </div>
          <hr className="featuretre-divider" />
        </div>
      </section>
    );
  }
}

export default StaffSection;
