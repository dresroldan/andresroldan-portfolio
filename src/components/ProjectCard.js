import React from 'react';
import '../styles/projectcard.scss';

const Card = ({
  heading,
  paragraph,
  imgUrl,
  projectDemoLink,
  projectGithubLink,
  tools,
}) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: 'url(' + imgUrl + ')',
      }}
    >
      <div className="content-wrapper">
        <div className="content">
          <h3 className="header">{heading}</h3>
          <p className="text2">{paragraph}</p>
          <p className="text2">{tools}</p>
          <div className="card__buttons">
            <a
              className="card__button"
              href={projectDemoLink ? projectDemoLink : '#'}
              target="_blank"
            >
              demo
            </a>

            <a
              className="card__button"
              href={projectGithubLink ? projectGithubLink : '#'}
              target="_blank"
            >
              code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
