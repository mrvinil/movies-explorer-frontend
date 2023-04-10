import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about container">
      <h2 className="section-title">О проекте</h2>
      <div className="about__text">
        <div className="about__text-item">
          <h3 className="about__text-title">Pet-проект включал 5 этапов</h3>
          <p className="about__text-desc">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about__text-item">
          <h3 className="about__text-title">На выполнение диплома ушло 4 недели</h3>
          <p className="about__text-desc">Разработка велась не спеша в свободное время</p>
        </div>
      </div>
      <div className="about__timing">
        <div className="about__timing-item">
          <p className="about__timing-title about__timing-title_theme_green">1 неделя</p>
          <h3 className="about__timing-desc">Back-end</h3>
        </div>
        <div className="about__timing-item">
          <p className="about__timing-title about__timing-title_theme_dark">3 недели</p>
          <h3 className="about__timing-desc">Front-end</h3>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
