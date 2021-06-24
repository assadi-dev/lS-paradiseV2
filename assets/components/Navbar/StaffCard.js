import React, { Component } from "react";
import "./staff-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export class StaffCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, description, link, text_button } = this.props;
    return (
      <div className="row-card-staff">
        <div className="icon-staff">
          <FontAwesomeIcon className="success" icon={faCheckCircle} size="2x" />
        </div>

        <div className="text-staff">
          <h5 className="title-staff-feature">{title}</h5>
          <p>{description}</p>

          <a className="btn text-btn" href={link} target="_blank">
            {text_button}
          </a>
        </div>
      </div>
    );
  }
}

export default StaffCard;
