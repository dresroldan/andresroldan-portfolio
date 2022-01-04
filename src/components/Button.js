import React from 'react';
import '../styles/button.css';

const Styles = ['btn--primary', 'btn--secondary', 'btn--warning'];

const Sizes = ['btn--medium', 'btn--small'];

const Button = ({ children, href, target, buttonStyle, buttonSize, rel }) => {
  const checkButtonStyle = Styles.includes(buttonStyle)
    ? buttonStyle
    : Styles[0];

  const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];

  return (
    <a
      className={`btn ${checkButtonStyle} ${checkButtonSize} `}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
};

export default Button;
