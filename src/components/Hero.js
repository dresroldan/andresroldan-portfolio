import React from 'react';
// import { Link } from 'react-scroll';
import '../styles/hero.css';
import Button from './Button';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero__container">
        <h1 className="hero__title">
          Hello,
          <br />
          I'm Andrés
        </h1>
        <p className="hero__subheading">
          Chicago-based developer focused on building clean, and user-friendly
          web experiences
        </p>
        <Button
          href="https://docs.google.com/document/d/1LREYfriGyXWa_r_W4FF4d51iLavuKqNZBSKON2j7Q4w/edit"
          rel="noopener"
          target="_blank"
        >
          {' '}
          Resume
        </Button>
      </div>

      {/* <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        duration={1000}
        className="arrow__icon"
      >
        <i className="far fa-angle-down"></i>
      </Link> */}
    </section>
  );
};

export default Hero;
