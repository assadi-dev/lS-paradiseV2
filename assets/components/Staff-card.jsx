import React, { Component } from "react";
import Gang from "./Gang";
import "./staff-card.css";
import WOW from "wowjs";

class StaffCard extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    const { icon, title, description, colorIcon, duration, animation, delay } =
      this.props;
    return (
      <div
        className={`row-staff-card wow ${animation}`}
        data-wow-duration={duration}
      >
        <div className="col-icone-staff-card">
          <i className={colorIcon}>{icon}</i>
        </div>
        <div className="col-text-staff-card">
          <h5 className="title-staff-card">{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default StaffCard;
