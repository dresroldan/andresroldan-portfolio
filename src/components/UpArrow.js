import React from "react";
import "../styles/uparrow.scss";
import { Link } from "react-scroll";

const ArrowButton = () => {
  return (
    <Link
      activeClass="active"
      to="navbar"
      spy={true}
      smooth={true}
      duration={1000}
    >
      <a className="up-arrow"></a>;
      
    </Link>
  );
};

export default ArrowButton;
