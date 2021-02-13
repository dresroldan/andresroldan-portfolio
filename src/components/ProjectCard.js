import React from "react";
import "../styles/projectcard.scss";

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: "url(" + imgUrl + ")",
      }}
    >
      <div className="content">
        <h3 className="header">{heading}</h3>
        <p className="text2">{paragraph}</p>

        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          demo
        </a>
      </div>
    </div>
  );
};

export default Card;
