import React from "react";
import "../styles/header.scss";
import { Link } from "react-scroll";
import ArrowButton from "./ArrowButton";

const Header = () => {
  return (
    <header id="home">
      <div className="container" >
        <div className="header-wrapper">
          <h1>
            Hello,
            <br />
            I'm Andrés{" "}
          </h1>
{/* <h1> Web developer and musician 
focused on responsive design</h1> */}

          <p>
            {" "}
            {/* Hello, I'm Andrés — a  */}
            Chicago-based developer focusing on building web applications that
            showcase a passion for visual identity, interactive design, and user
            experience.
          </p>

 


<ArrowButton></ArrowButton>


        </div>
      </div>
    </header>
  );
};

export default Header;
