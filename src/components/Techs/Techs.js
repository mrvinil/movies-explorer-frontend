import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <div className="container-fluid theme_dark">
      <section className="tech container">
        <h2 className="section-title">Технологии</h2>
        <div className="tech__text">
          <h3 className="tech__text-title">7 технологий</h3>
          <p className="tech__text-desc">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
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
      </section>
    </div>
  );
}

export default Techs;
