import React from 'react';
import portfolioImg from '../assets/images/andresshot2.jpg';
import '../styles/about.css';
import Button from './Button';

const About = () => {
  return (
    <section id="about">
      <div className="about__container">
        <div className="profile-image__wrapper">
          <img
            className="profile-image"
            alt="Andres Roldan Portfolio"
            src={portfolioImg}
          ></img>
        </div>

        <div className="bio__container">
          <div className="about-info__bio">
            Full Stack Web Developer with a background in specialty coffee and
            music production seeking to leverage my skills and experience to
            join a creative and diverse team in tech. Recent certificate in Full
            Stack Web Development from Northwestern University in Chicago, IL.
            I'm determined to improve my code, and design skills everyday while
            bringing my passion for technology, design, and community to the
            table.
          </div>

          <div className="about-info__bio">
            I would love to hear from you. Whether it's a project, job
            opportunity, or just to chat. Feel free to contact me.
          </div>

          <div className="about-info">
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-envelope"></i>
                </span>
                dresroldan@gmail.com
              </li>
            </ul>
          </div>

          <div className="about-info__buttons">
            <Button
              href="https://docs.google.com/document/d/1LREYfriGyXWa_r_W4FF4d51iLavuKqNZBSKON2j7Q4w/edit"
              target="_blank"
              buttonStyle="btn--secondary"
            >
              {' '}
              Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
