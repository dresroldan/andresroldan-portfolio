import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="link__wrapper">
        <a className="link" href="https://github.com/dresroldan">
          Contact
        </a>

        <a className="link" href="https://www.linkedin.com/in/andresroldan23/">
          LinkedIn
        </a>

        <a className="link" href="https://github.com/dresroldan">
          Github
        </a>
      </div>

      <div className="footer__copyright ">© 2021 Andrés Roldán</div>
    </footer>
  );
};

export default Footer;
