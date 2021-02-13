import React from "react";
import Card from "./ProjectCard";
import "../styles/projects.scss";
import data from "../data.js";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="work-wrapper">
          {/* <div className="projects-title">
            <h2>_projects</h2>
          </div> */}

          <div className="grid">
            {data.projects.map((project) => (
              <Card
                key={project.id}
                heading={project.title}
                paragraph={project.para}
                imgUrl={project.imageSrc}
                projectLink={project.url}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
