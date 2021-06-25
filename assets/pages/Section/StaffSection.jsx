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

export class StaffSection extends Component {
  render() {
    return (
      <section id="staff-section">
        <div className="container">
          <h2 id="titleStaff">STAFF</h2>
          <div id="rowStaffSection">
            <div id="staff-card">
              <div className="row-staff-description">
                <StaffCard className="text-indigo" icon={<FontAwesomeIcon icon={faAssistiveListeningSystems} size="2x" />} title="Un staff reactif" description="Nous sommes le plus possible à l'écoute des joueurs ! Notre temps de réponses est estimé entre 4-5 minutes" />
                <StaffCard className="blue-text" icon={<FontAwesomeIcon icon={faServer} size="2x" />} title="64 slots" description="Vous retrouverez 64 slots." />
                <StaffCard className="cyan-text" icon={<FontAwesomeIcon icon={faHandshake} size="2x" /> } title="Roleplay & Fair-play" description="La qualité du roleplay, la cohérence et le fair-play sont de vigueur sur le serveur."   />
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
