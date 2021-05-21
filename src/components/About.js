import React from 'react';
import '../styles/about.scss';
import img from '../assets/images/andresfullimage.jpg';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="image-content">
            <img src={img}></img>
          </div>

          <div className="info-text">
            <h2>Andrés Roldán</h2>
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

            <div className="linkss">
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

            <div className="buttons">
              <a
                className="button"
                href="https://drive.google.com/file/d/1Wf0t5UipNqg9yNvzpXlHdLcVVB47WrIj/view?usp=sharing"
                target="_blank"
              >
                _resume
              </a>
              <a
                className="button"
                href="https://github.com/dresroldan"
                target="_blank"
              >
                _github
              </a>

              <a
                className="button"
                href="https://www.linkedin.com/in/andresroldan23/"
                target="_blank"
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
