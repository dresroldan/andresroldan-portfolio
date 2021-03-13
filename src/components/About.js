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
              Front end developer with a background in music production and an
              eye for design. Recent certificate in full stack development from
              Northwestern University in Chicago, IL with acquired skills in
              HTML, CSS, JavaScript, React.js and responsive web design. Proven
              to work well in teams and independently, my focus is to create
              applications that improve the lives of others through user
              experience.
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
              >
                _resume
              </a>
              <a className="button" href="https://github.com/dresroldan">
                _github
              </a>

              <a
                className="button"
                href="https://www.linkedin.com/in/andresroldan23/"
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
