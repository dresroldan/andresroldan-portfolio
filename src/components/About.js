import React from "react";
import "../styles/about.scss";
import img from "../assets/images/avatarimage.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-title">
          <h2>_about</h2>
        </div>

        <div className="about-section">
          <div className="about-content">
            <p>
              Creative and dependable front-end web developer with an
              outstanding customer service record, and superb work ethic. Fast
              learner, hard worker, and team player who is proficient in an
              array of scripting languages and multimedia web tools.
            </p>
          </div>

          <div className="line"></div>

          <div className="image-content">
            <img src={img}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
