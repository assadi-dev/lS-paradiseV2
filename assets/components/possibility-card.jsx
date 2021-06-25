import React, { Component } from "react";
import "./possibility-card.css";

export class PossibilityCard extends Component {
  render() {
    const { title, icon, description } = this.props;
    return (
      <div className="possibility-card">
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
