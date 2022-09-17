import React from 'react';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';
import photoStudent from '../../images/student__photo.png';

function AboutMe() {
  return (
    <section className="student container">
      <h2 className="section-title">Студент</h2>

      <div className="student__about">
        <div className="student__about-text">
          <h3 className="student__about-name">Вячеслав</h3>
          <p className="student__about-job">Фронтенд-разработчик, 33 года</p>
          <p className="student__about-desc">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a href="https://github.com/mrvinil" className="student__about-github link" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img src={photoStudent} alt="Фото студента" className="student__about-photo"/>
      </div>

      <Portfolio />

    </section>
  );
}

export default AboutMe;
