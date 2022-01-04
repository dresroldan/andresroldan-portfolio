import React from 'react';
import '../styles/contact.css';
import Button from './Button';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__container">
        <div className="contact__title">Let's Connect</div>
        <Button href="mailto:dresroldan@gmail.com">Email</Button>
      </div>
    </section>
  );
};

export default Contact;
