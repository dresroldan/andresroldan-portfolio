import React from "react";
import "../styles/header.scss";
import { Link } from "react-scroll";
import ArrowButton from "./ArrowButton";

const Header = () => {
  return (
    <header id="home">
      <div className="container">
        <div className="header-wrapper">
          <h1>
            Hello,
            <br />
            I'm Andrés{" "}
          </h1>
      

          <p>
            {" "}
            Chicago-based developer focused on building clean, and
            user-friendly web experiences using modern web technologies such as
            React.
          </p>

          <ArrowButton></ArrowButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
