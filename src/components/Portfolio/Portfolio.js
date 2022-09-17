import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="student__portfolio">
      <h3 className="student__portfolio-title">Портфолио</h3>
      <ul className="student__portfolio-list">
        <li className="student__portfolio-item">
          <a href="https://undressme.ru" className="student__portfolio-link link" target="_blank" rel="noreferrer">Интернет-магазин</a>
        </li>
        <li className="student__portfolio-item">
          <a href="https://bitovki.biz" className="student__portfolio-link link" target="_blank" rel="noreferrer">Сайт производственной компании</a>
        </li>
        <li className="student__portfolio-item">
          <a href="https://mrvinil.project.nomoredomains.sbs" className="student__portfolio-link link" target="_blank" rel="noreferrer">Одностраничное приложение</a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
