import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer container">
      <h3 className="footer__title">Pet-проект на React и Express.js</h3>
      <div className="footer__bot">
        <p className="footer__copyright">© {currentYear}</p>
        <div className="footer__project">
          <a href="https://career.habr.com/kotelnikov-vyacheslav2" className="footer__project-link link" target="_blank" rel="noreferrer">Хабр Карьера</a>
          <a href="https://github.com/mrvinil" className="footer__project-link link" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
