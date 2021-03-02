import React from "react";
import Card from "./ProjectCard";
import "../styles/projects.scss";
import data from "../data.js";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="work-wrapper">
          <h2>_projects</h2>

          <div className="grid">
            {data.projects.map((project) => (
              <Card
                key={project.id}
                heading={project.title}
                paragraph={project.para}
                tools={project.tools}
                imgUrl={project.imageSrc}
                projectDemoLink={project.projectDemo}
                projectGithubLink={project.projectGithub}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
