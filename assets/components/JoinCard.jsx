import React, { Component } from "react";
import "./join-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import WOW from "wowjs";

export class JoinCard extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    const { title, description, link, text_button } = this.props;
    return (
      <div className="row-card-join wow animate__fadeIn" data-wow-duration="1s">
        <div className="icon-join">
          <FontAwesomeIcon className="success" icon={faCheckCircle} size="2x" />
        </div>

        <div className="text-join">
          <h5 className="title-join-feature">{title}</h5>
          <p>{description}</p>

          <a className="btn text-btn" href={link} target="_blank">
            <span>{text_button}</span>
          </a>
        </div>
      </div>
    );
  }
}

export default JoinCard;
