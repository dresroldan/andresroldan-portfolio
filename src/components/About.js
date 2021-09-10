import React from 'react';
import portfolioImg from '../assets/images/andresfullimage.jpg';
import '../styles/about.css';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <img
            className="about__image"
            alt="Andres Roldan Portfolio"
            src={portfolioImg}
          ></img>

          <div className="about__bio">
            <h3>Andrés Roldán</h3>
            <p>
              Full Stack Web Developer with a background in specialty coffee and
              music production seeking to leverage my skills and experience to
              join a creative and diverse team in tech. Recent certificate in
              Full Stack Web Development from Northwestern University in
              Chicago, IL. I'm determined to improve my code, and design skills
              everyday while bringing my passion for technology, design, and
              community to the table.
            </p>

            <p>
              I would love to hear from you. Whether it's a project, job
              opportunity, or just to chat. Feel free to contact me.
            </p>

            <div className="about__info">
              <ul className="fa-ul">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-envelope"></i>
                  </span>
                  dresroldan@gmail.com
                </li>

                <li>
                  <span className="fa-li">
                    <i className="fas fa-phone"></i>
                  </span>
                  779.207.8144
                </li>
              </ul>
            </div>

            <div className="about__buttons">
              <a
                className="about__button"
                href="https://drive.google.com/file/d/1YlCcVBEzmj2juzJ0Yg-wcLv-OdaKUiH_/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                _resume
              </a>
              <a
                className="about__button"
                href="https://github.com/dresroldan"
                target="_blank"
                rel="noreferrer"
              >
                _github
              </a>

              <a
                className="about__button"
                href="https://www.linkedin.com/in/andresroldan23/"
                target="_blank"
                rel="noreferrer"
              >
                _linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
