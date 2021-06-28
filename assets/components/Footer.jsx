import React, { Component } from 'react';
import "./footer.css";
import logo_footer from "../images/logo_lsp2V.png"

class Footer extends Component {
  render() {
    return (
        <footer id="page-footer" className="footer-dark">
            <div id="logo-footer-section">
                <img id="logoFooter" src={logo_footer} alt="logo_footer-lsp"  />
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
