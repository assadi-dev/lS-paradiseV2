import React, { Component } from "react";
import "./possibility-card.css";
import WOW from "wowjs";

export class PossibilityCard extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    const { title, icon, description } = this.props;
    return (
      <div
        className="possibility-card wow animate__fadeIn"
        data-wow-duration="2s"
      >
        <div className="icone-possibility">{icon}</div>
        <div className="possibity-card-content">
          <h5 className="title-posibility">{title}</h5>
          <p className="text-posibility">{description}</p>
        </div>
        <div></div>
      </div>
    );
  }
}

export default PossibilityCard;
