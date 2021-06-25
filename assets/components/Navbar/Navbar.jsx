import React, { Component } from "react";
import "./navbar.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { HashLink} from 'react-router-hash-link';


export class Navbar extends Component {
  state = {
    navbarScroll: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 20) {
      this.setState({
        ...this.state,
        navbarScroll: true,
      });
    } else {
      this.setState({
        ...this.state,
        navbarScroll: false,
      });
    }
  };

  render() {
    return (
      <nav
        className={classNames(
          "navbar-container",
          "fixed-top",
          this.state.navbarScroll ? "dark-color" : "light-color",
          this.state.navbarScroll ? "nav-collaps-scroll" : "nav-collaps"
        )}
      >
        
        <div className="container">
        <span className="navbar-toggler-icon"> </span>
          <div className="navCont">
          <ul className="navbar-nav-left">
              <li className="nav-item">
                <HashLink smooth to="/#top"  >Accueil </HashLink>
              </li>
              <li className="nav-item">
               
                <HashLink smooth to="/#join-section"  > Nous rejoindre </HashLink>
              </li>
            <li className="nav-item">Discord</li>
            <li className="nav-item">Vote</li>
          </ul>
          <div className="navbar-right"> 
            <span id="login-btn"> <i id="icone-login"><FontAwesomeIcon  icon={faUser}  /></i> Se connecter</span>
          </div>
          </div>
          
        </div>
      </nav>
    );
  }
}

export default Navbar;
