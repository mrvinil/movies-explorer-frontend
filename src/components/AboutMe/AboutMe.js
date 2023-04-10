import React from 'react';
import './AboutMe.css';
import photoStudent from '../../images/student__photo.png';

function AboutMe() {
  // Определяем текущую дату
  const currentYear = new Date();

  // Определяем дату рождения
  const birthday = new Date('1989-09-11');
  let myAge = currentYear.getFullYear() - birthday.getFullYear();

  // Проверяем, был ли день рождения в этом году уже
  const month = currentYear.getMonth() - birthday.getMonth();
  if (month < 0 || (month === 0 && currentYear.getDate() < birthday.getDate())) {
    myAge--;
  }

  const startQa = new Date('2020-08-01');
  let experience = currentYear.getFullYear() - startQa.getFullYear();
  const monthQa = currentYear.getMonth() - startQa.getMonth();
  if (monthQa < 0 || (monthQa === 0 && currentYear.getDate() < startQa.getDate())) {
    experience--;
  }

  return (
    <section className="student container">
      <h2 className="section-title">Обо мне</h2>
      <div className="student__about">
        <div className="student__about-text">
          <h3 className="student__about-name">Вячеслав К.</h3>
          <p className="student__about-job">QA инженер, {myAge} года</p>
          <div className="student__about-desc">
            <ul>
              <li>QA инженер с опытом работы в тестировании различных веб-сервисов и интернет-магазинов более {experience} лет. Есть небольшой опыт автоматизированного тестирования.</li>
              <li>Имею опыт работы веб-разработчиком, хорошо знаю процесс и этапы разработки, какие могут быть узкие места и серые зоны. Опыт в разработке позволяет мне эффективно обнаруживать ошибки в приложениях и успешно сотрудничать с командой разработки.</li>
              <li>Перешел в QA так как мне интересен процесс поиска и решения проблем, а также работа над улучшением продукта и повышением качества разработки.</li>
              <li>Обладаю критическим мышлением.</li>
              <li>Ориентирован на потребности пользователя и юзабилити продукта.</li>
              <li>Постоянно повышаю свой профессиональный уровень в области автоматизированного тестирования, улучшаю процесс тестирования, повышаю его эффективность и работаю над качеством продукта.</li>
              <li>Владею английским языком на уровне чтения технической документации.</li>
            </ul>
          </div>
          <a href="https://github.com/mrvinil" className="student__about-github link" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img src={photoStudent} alt="Фото студента" className="student__about-photo"/>
      </div>
    </section>
  );
}

export default AboutMe;
