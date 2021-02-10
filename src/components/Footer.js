import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <h2>_footer</h2>

      <div className="navbar-wrapper">


          <div className="links-wrapper">
            <a href="#projects">
              <button>linkedin</button>
            </a>
            <a href="#about">
              <button>github</button>
            </a>
            <button>contact</button>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
