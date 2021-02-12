import React from "react";
import "../styles/projectcard.scss";
import Card from "./ProjectCard"

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
      

        <div className="projects-section">
        <div className="projects-title">
          <h2>_projects</h2>
        </div>
          <div className="project-content">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </div>
        </div>
      
      
      
      </div>
    </section>
  );
};

export default Projects;
