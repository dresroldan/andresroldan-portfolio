import React from "react";
import "../styles/footer.scss";
import { Link } from "react-scroll";
import UpArrow from "./UpArrow.js";

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
{/* 
            <Link
              activeClass="active"
              to="navbar"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <img
                className="upwards-arrow"
                src="data:image/png;base64,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"
              ></img>
            </Link> */}
          
<UpArrow></UpArrow>
          </div>

      



          {/* <h3>© 2021 Andrés Roldán</h3> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
