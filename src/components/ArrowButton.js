import React from 'react';
import { Link } from 'react-scroll';
import '../styles/arrowbutton.css';

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
