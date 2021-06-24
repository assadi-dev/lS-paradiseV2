import React, { Component } from "react";
import "./navbar.css";
import classNames from "classnames";

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
      <div
        className={classNames(
          "navbar-container",
          "fixed-top",
          this.state.navbarScroll ? "dark-color" : "light-color",
          this.state.navbarScroll ? "nav-collaps-scroll" : "nav-collaps"
        )}
      >
        <p>tedsst</p>
      </div>
    );
  }
}

export default Navbar;
