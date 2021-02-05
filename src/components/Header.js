import React from "react";
import "../styles/header.scss";

const Header = () => {
  return (
    <div className="section" id="HEADER">
      <div className="container">
        <div className="header-wrapper">
          <h1>
            Hello,
            <br />
            I'm Andres{" "}
          </h1>

          {/* <div className="circle-wrapper">
            <div className="text">
              <p>
                {" "}
                I'm a developer who focuses on building web applications that
                showcase a passion for visual identity, interactive design, and
                user experience.
              </p>
            </div>
        
          </div> */}

          <div class="quote-wrapper">
            <div class="text">
              <p>
                {" "}
                I'm a developer who focuses on building web applications that
                showcase a passion for visual identity, interactive design, and
                user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
