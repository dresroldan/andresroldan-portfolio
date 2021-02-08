import React from "react";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <div role="button" className="name" tabIndex={0}>
            .
          </div>

          <div className="links-wrapper">
            <a href="#projects">
              <button>projects</button>
            </a>
            <a href="#about">
              <button>about</button>
            </a>
            <button>contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
