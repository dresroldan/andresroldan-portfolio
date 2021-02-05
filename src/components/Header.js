import React from "react";
import "../styles/header.scss";

const Header = () => {
  return (
    <header id="home">
      <div className="container">
        <div className="intro">
          <h1>
            Hello,
            <br />
            I'm Andres{" "}
          </h1>
        </div>

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
    </header>
  );
};

export default Header;
