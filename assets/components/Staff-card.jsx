import React, { Component } from 'react';
import Gang from './Gang';
import "./staff-card.css";



class StaffCard extends Component {
   
    render() {
        const { icon, title, description,className } = this.props;
    return (
        <div className="row-staff-card">
            <div className="col-icone-staff-card">
                <i className={className}>{icon}</i>
               
            </div>
            <div className="col-text-staff-card">
                <h5 className="title-staff-card">{ title}</h5>
                <p>{description }</p>
            </div>
        </div>
    );
  }
}

export default StaffCard;
