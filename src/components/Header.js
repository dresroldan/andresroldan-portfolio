import React from 'react';
import ArrowButton from './ArrowButton';
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="header__wrapper">
          <h1>
            Hello,
            <br />
            I'm Andrés
          </h1>
          <p className="header__subheading">
            Chicago-based developer focused on building clean, and user-friendly
            web experiences using modern web technologies such as React.
          </p>
          <ArrowButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
