import React from "react";
import '../styles/navbar.scss';

const Navbar = () => {
  return (
    <div className="section" id="NAVBAR">
      <div className="container">
        <div className="navbar-wrapper">
          <div role="button" className="name" tabIndex={0}>
            .
          </div>
          <div className="links-wrapper">
            <button>projects</button>
            <button>about</button>
            <button>contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
