import React from 'react';
import '../styles/arrowbutton.css';
import { Link } from 'react-scroll';

const ArrowButton = () => {
  return (
    <Link
      activeClass="active"
      to="projects"
      spy={true}
      smooth={true}
      duration={1000}
    >
      <a className="arrow"></a>;
    </Link>
  );
};

export default ArrowButton;
