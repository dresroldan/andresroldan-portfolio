import React from "react";
import "../styles/about.scss";
import img from "../assets/images/andresfullimage.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-wrapper">
          {/* 
        <h2>_about</h2> */}

          <div className="image-content">
            <img src={img}></img>
          </div>

          <div className="info-text">
            <h2>Andres Roldan</h2>
            <p>
              Full Stack Web Developer with a background in specialty coffee and
              music production seeking to leverage my skills and experience to
              join a creative and diverse team in tech. Recent certificate in
              Full Stack Web Development from Northwestern University in
              Chicago, IL with acquired skills in HTML, CSS, JavaScript, React,
              Node.js, Express, MongoDB, and Responsive Web Design. Proven to
              work well in teams and independently with years of experience in
              the service industry. Solutions-driven and detailed oriented
              developer, who values communication and creative problem-solving.
              My focus is to bring my passion for technology, design, and
              community to the table.
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
                href="https://drive.google.com/file/d/1Rbd3QmBiwz_b83c-k0Lr7RLEsWS2-D6q/view?usp=sharing"
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
