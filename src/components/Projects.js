import React from 'react';
import Card from './ProjectCard';
import data from '../data.js';
import '../styles/projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects__wrapper">
          <h2>_projects</h2>

          <div className="projects__grid">
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
