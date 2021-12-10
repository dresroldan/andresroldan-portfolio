import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/navbar.css';

const Navbar = () => {
  const [isActive, setActive] = useState('true');
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <div className="header__group left">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
          className="header__logo"
        >
          Andrés Roldán
        </Link>
      </div>

      <div className="header__group right">
        <div className="hamburger" onClick={handleToggle}>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </div>

        <nav role="navigation" className={isActive ? 'navbar--hidden' : null}>
          <div className="navbar__menu">
            <div className="hamburger__menu" onClick={handleToggle}>
              <div className="hamburger__menu-line"></div>
              <div className="hamburger__menu-line"></div>
            </div>

            <div className="navbar__menu-icon"></div>
            <ul className="navbar__list">
              <li className="navbar__list-item">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className={isActive ? 'navbar__link' : 'navbar__link--menu'}
                >
                  projects
                </Link>
              </li>

              <li className="navbar-list-item">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className={isActive ? 'navbar__link' : 'navbar__link--menu'}
                >
                  projects
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
