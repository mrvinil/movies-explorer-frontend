import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className="container-fluid theme_dark">
      <div className="tech container">
        <h2 className="section-title">Технологии</h2>
        <div className="tech__text">
          <h3 className="tech__text-title">7 технологий</h3>
          <p className="tech__text-desc">Технологии которые я применил для разработки проекта.</p>
        </div>
        <ul className="tech__skills">
          <li className="tech__skills-item">HTML</li>
          <li className="tech__skills-item">CSS</li>
          <li className="tech__skills-item">JS</li>
          <li className="tech__skills-item">React</li>
          <li className="tech__skills-item">Git</li>
          <li className="tech__skills-item">Express.js</li>
          <li className="tech__skills-item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
