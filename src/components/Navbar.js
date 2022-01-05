import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const navigation = [
    { link: '#/about', text: 'About' },
    { link: '#/projects', text: 'Projects' },
    { link: 'mailto:dresroldan@gmail.com', text: 'Contact' },
  ];

  return (
    <nav role="navigation" className={click ? 'nav--active' : 'nav'}>
      <div className="navbar__container">
        <a href="/" className="navbar__logo">
          Andrés Roldán
        </a>
        <div className="navbar__icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click ? ' navbar__menu active' : 'navbar__menu'}>
          {navigation.map((nav) => (
            <li key={nav.text} className="navbar__item">
              <a className="navbar__link" href={nav.link}>
                {nav.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
