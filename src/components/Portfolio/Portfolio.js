import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio container">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="https://undressme.ru" className="portfolio__link link" target="_blank" rel="noreferrer">Интернет-магазин</a>
        </li>
        <li className="portfolio__item">
          <a href="https://bitovki.biz" className="portfolio__link link" target="_blank" rel="noreferrer">Сайт компании</a>
        </li>
        <li className="portfolio__item">
          <a href="https://mrvinil.project.nomoredomains.sbs" className="portfolio__link link" target="_blank" rel="noreferrer">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
