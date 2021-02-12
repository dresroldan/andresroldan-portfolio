import React from "react";
import "../styles/about.scss";
import img from "../assets/images/avatarimage.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-section">
          <div className="about-title">
            <h2>_about</h2>
          </div>
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

          <div className="contact-info">
            <p className="details">
              <span> Andrés Roldán</span>
              <br />
              <span>Chicago, IL</span>
              <br />
              <span> 779.207.8144</span>
              <br />
              <span>dresroldan@gmail.com</span>
              <br />
            </p>

            <button>_resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
