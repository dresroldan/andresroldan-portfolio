import React from "react";
import "../styles/projectcard.scss";

const Card = ({
  heading,
  paragraph,
  imgUrl,
  projectDemoLink,
  projectGithubLink,
}) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: "url(" + imgUrl + ")",
      }}
    >
      <div className="content">
        <div className="content-wrapper">


        <h3 className="header">{heading}</h3>
        <p className="text2">{paragraph}</p>

        <a
          href={projectDemoLink ? projectDemoLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <button>demo</button>
        </a>

        <a
          href={projectGithubLink ? projectGithubLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <button>code</button>
        </a>

        </div>

      </div>
    </div>
  );
};

export default Card;
