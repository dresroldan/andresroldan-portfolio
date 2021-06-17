import React from 'react';
import '../styles/footer.css';
import UpArrow from './UpArrow.js';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="links__wrapper">
          <div className="links__icons">
            <a
              className="buttons"
              href="https://www.linkedin.com/in/andresroldan23/"
            >
              <img
                alt="LinkedIn Icon"
                src="https://img.icons8.com/ios-glyphs/40/FFFDEB/linkedin-circled--v1.png"
              />
            </a>

            <a className="buttons" href="https://github.com/dresroldan">
              <img
                alt="Github Icon"
                src="https://img.icons8.com/material-sharp/40/FFFDEB/github.png"
              />
            </a>
          </div>

          <UpArrow />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
