import React from "react";
import Card from "./ProjectCard";
import "../styles/projects.scss";
import project1 from "../assets/images/dermpalhome.png";
import project2 from "../assets/images/picniqapp.png";
import project3 from "../assets/images/habit1.png";

import project4 from "../assets/images/weatherdashboard.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-section">
          <div className="projects-title">
            <h2>_projects</h2>
          </div>

          <div className="project-content">
            <Card
              img={project1}
              title="DermPal"
              description="Barcode scanning app designed to help users find skincare products that are compatible with their skin"
              link="demo"
              linktwo="code"
            />

            <Card
              img={project2}
              title="Picniq"
              description="A single search, location-based application, providing users with nearby parks and restaurants offering takeout/delivery."
              link="demo"
              linktwo="code"
            />
            <Card
              img={project3}
              title="Habitude"
              description=" A weather dashboard that displays weather conditions for multiple cities."
              link="demo"
              linktwo="code"
            />
            <Card
              img={project4}
              title="Weather Dashboard"
              description=" A weather dashboard that displays weather conditions for multiple cities."
              link="demo"
              linktwo="code"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
