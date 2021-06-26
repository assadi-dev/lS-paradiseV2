import React, { Component } from "react";
import "./navbar.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { HashLink} from 'react-router-hash-link';


export class Navbar extends Component {

  


 constructor () {
   super()
   this.state = {
    navbarScroll: false,
     dropdownMenu: false,
    toogleMenu:false
   };
   
   this.dropdownRef = React.createRef();

   this.showMenu = this.showMenu.bind(this);
   this.closeMenu = this.closeMenu.bind(this);
   this.navToogleMenu = this.navToogleMenu.bind(this)
 }
 

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  
  }

  componentWillUnmount() {
  
    window.removeEventListener("scroll", this.handleScroll);
   
  }

  showMenu(event){
    event.preventDefault();
    this.setState({ ...this.state, dropdownMenu: !this.state.dropdownMenu }, () => {
      document.addEventListener("click",this.closeMenu)
    })
  }
  
  closeMenu(event) {
  
    if (!event.target.matches(".dropdown-toogle")) {
      this.setState({ ...this.state, dropdownMenu: false }, () => {
        document.removeEventListener("click",this.closeMenu)
      })
    }
   
  }

  navToogleMenu() {
    this.setState({...this.state,toogleMenu:!this.state.toogleMenu})
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
        <span className="navbar-toggler-icon" onClick={this.navToogleMenu} > </span>
          <div className={classNames("navCont",this.state.toogleMenu?"show":null)}>
          <ul className="navbar-nav-left">
              <li className="nav-item">
                <HashLink className="azonix-font" smooth to="/#top"  >Accueil </HashLink>
              </li>
              <li className="nav-item">
               
                <HashLink className="azonix-font" smooth to="/#join-section"  > Nous rejoindre </HashLink>
              </li>
            <li className="nav-item"> <a className="azonix-font" href="#"> Discord</a></li>
              <li className="nav-item dropdown" >
                <a className="dropdown-toogle azonix-font" href="/vote" onClick={this.showMenu}  >Vote</a>
                <div ref={this.dropdownRef} className={classNames("dropdown-menu",this.state.dropdownMenu?"show":null)} >
                  <a href="https://top-serveurs.net/gta/vote/lspr" target="_blank" >Top Server</a>
                  <div className="dropdown-divider"></div>
                  <a href="https://serveur-prive.net/grand-theft-auto/ls-paradise-5932" target="_blank" >Serveur privée</a>
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
