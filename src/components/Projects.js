import React from "react";
// import "../styles/projectcard.scss";
import Card from "./ProjectCard";
import "../styles/projects.scss";



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
              img="https://picsum.photos/id/54/400/300"
              title="What I learned from my visit to The Upside Down"
              link="demo"
              linktwo="code"
            />

            <Card
              img="https://picsum.photos/id/54/400/300"
              title="What I learned from my visit to The Upside Down"
              link="demo"
              linktwo="code"
            />
            <Card
              img="https://picsum.photos/id/54/400/300"
              title="What I learned from my visit to The Upside Down"
              link="demo"
              linktwo="code"
            />
            <Card
              img="https://picsum.photos/id/54/400/300"
              title="What I learned from my visit to The Upside Down"
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
