import React from 'react';
import Card from './ProjectCard';
import data from '../data.js';
import '../styles/projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects__container">
        <div className="projects__title">Projects</div>

        <div className="projects__grid">
          {data.projects.map((project) => (
            <Card
              key={project.id}
              heading={project.title}
              paragraph={project.description}
              tools={project.tools}
              imgUrl={project.img}
              projectDemoLink={project.demo}
              projectGithubLink={project.github}
            ></Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
