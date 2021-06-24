import React, { Component } from "react";
import "./staffSection.css";
import picture from "../../images/perso2.png";

export class StaffSection extends Component {
  render() {
    return (
      <section id="staff-section">
        <div className="container">
          <h2 id="titleStaff">STAFF</h2>
          <div id="rowStaffSection">
            <div id="staff-card">
              <div className="row-staff-description"></div>
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
