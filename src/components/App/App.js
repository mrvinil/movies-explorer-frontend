import './App.css';

function App() {
  return (
    <div className="page">
      <div className="container-fluid theme_dark_blue">
        <header className="header container">
          <a href="/" className="header__logo link"></a>
          <div className="header__personal">
            <a href="#" className="header__personal-signup link">Регистрация</a>
            <a href="#" className="header__personal-signin btn">Войти</a>
          </div>
        </header>
        <section className="lead container">
          <h1 className="lead__title">Учебный проект студента факультета Веб-разработки.</h1>
          <div className="lead__img"></div>
        </section>
      </div>

      <section className="about container">
        <h2 className="section-title">О проекте</h2>
        <div className="about__text">
          <div className="about__text-item">
            <h3 className="about__text-title">Дипломный проект включал 5 этапов</h3>
            <p className="about__text-desc">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about__text-item">
            <h3 className="about__text-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about__text-desc">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about__timing">
          <div className="about__timing-item">
            <p className="about__timing-title about__timing-title_theme_green">1 неделя</p>
            <h3 className="about__timing-desc">Back-end</h3>
          </div>
          <div className="about__timing-item">
            <p className="about__timing-title about__timing-title_theme_dark">4 недели</p>
            <h3 className="about__timing-desc">Front-end</h3>
          </div>
        </div>
      </section>

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
    </div>
  );
}

export default App;
