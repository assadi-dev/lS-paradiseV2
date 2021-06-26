import React, { Component } from "react";
import "./navbar.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { HashLink} from 'react-router-hash-link';


export class Navbar extends Component {
  state = {
    navbarScroll: false,
    dropdownMenu:false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    document.querySelectorAll(".dropdown a").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
       
        this.setState({...this.state,dropdownMenu:!this.state.dropdownMenu})
      })
    })

  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  showMenu = (e) => {
    e.peventDefault();
    this.setState({...this.state,dropdownMenu:!this.state.dropdownMenu})
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
                <HashLink className="azonix-font" smooth to="/#top"  >Accueil </HashLink>
              </li>
              <li className="nav-item">
               
                <HashLink className="azonix-font" smooth to="/#join-section"  > Nous rejoindre </HashLink>
              </li>
            <li className="nav-item"> <a className="azonix-font" href=""> Discord</a></li>
              <li className="nav-item dropdown" ><a className="azonix-font" href="/vote"  >Vote</a>
                <div className={classNames("dropdown-menu",this.state.dropdownMenu?"show":null)} >
                  <a href="">Top Server</a>
                  <div className="dropdown-divider"></div>
                  <a href="">Serveur privée</a>
                </div>
              </li>
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
