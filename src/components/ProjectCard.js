import React from 'react';
import '../styles/projectcard.css';

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
      <div className="card__wrapper">
        <div className="card__content">
          <p className="card__title">{heading}</p>
          <p className="card__description">{paragraph}</p>
          <p className="card__description">{tools}</p>
          <div className="card__buttons">
            <a
              rel="noreferrer"
              className="card__button"
              href={projectDemoLink ? projectDemoLink : '#'}
              target="_blank"
            >
              demo
            </a>

            <a
              rel="noreferrer"
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
