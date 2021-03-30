import React from "react";
import "../styles/navbar.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <div role="button" className="name" tabIndex={0}>
              <p>
                Andrés Roldán
              </p>
            </div>
          </Link>

          <div className="link-wrapper">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <button>about</button>
            </Link>

            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <button>projects</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
