import React from 'react';
import { Link } from 'react-scroll';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar__wrapper">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            className="navbar__title"
          >
            Andrés Roldán
          </Link>

          <div className="navbar__links">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              className="navbar__link"
            >
              about
            </Link>

            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
              className="navbar__link"
            >
              projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
