import React from 'react';
import Button from './Button';
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
    <div className="card__grid-item">
      <img className="card__image" src={imgUrl} alt=""></img>

      <div className="card__title">{heading}</div>
      <div className="card__description">{paragraph}</div>
      <div className="card__description">{tools}</div>

      <div className="card__button-wrapper">
        <Button
          href={projectDemoLink}
          target="_blank"
          buttonStyle="btn--secondary"
          buttonSize="btn--small"
        >
          demo
        </Button>

        <Button
          href={projectGithubLink}
          target="_blank"
          buttonStyle="btn--secondary"
          buttonSize="btn--small"
        >
          code
        </Button>
      </div>
    </div>
  );
};

export default Card;
