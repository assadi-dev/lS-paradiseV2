import React, { Component } from "react";
import "./footer.css";
import logo_footer from "../images/logo_lsp2V.png";
import WOW from "wowjs";

class Footer extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <footer id="page-footer" className="footer-dark">
        <div
          id="logo-footer-section"
          className="wow animate__fadeIn"
          data-wow-duration="1s"
        >
          <img id="logoFooter" src={logo_footer} alt="logo_footer-lsp" />
        </div>
        <div id="copryright-section">
          © 2020 Copyright
          <a href=""> LS PARADISE ROLEPLAY</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
