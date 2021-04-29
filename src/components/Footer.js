import React from 'react';
import '../styles/footer.scss';
import { Link } from 'react-scroll';
import UpArrow from './UpArrow.js';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="links-footer">
          <div className="links-wrapper">
            <div className="icons">
              <a
                className="buttons"
                href="https://www.linkedin.com/in/andresroldan23/"
              >
                <img src="https://img.icons8.com/ios-glyphs/40/FFFDEB/linkedin-circled--v1.png" />
              </a>

              <a className="buttons" href="https://github.com/dresroldan">
                <img src="https://img.icons8.com/material-sharp/40/FFFDEB/github.png" />
              </a>
            </div>

            <UpArrow />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
