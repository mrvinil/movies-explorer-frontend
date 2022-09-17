import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer container container_size_big">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__bot">
        <p className="footer__copyright">© {currentYear}</p>
        <div className="footer__project">
          <a href="https://practicum.yandex.ru" className="footer__project-link link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a href="https://github.com/mrvinil" className="footer__project-link link" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
