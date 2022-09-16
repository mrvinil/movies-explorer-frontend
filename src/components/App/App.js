import photoStudent from '../../images/student__photo.png';
import leadImg from '../../images/lead__img.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="container-fluid theme_dark_blue">
        <header className="header container container_size_big">
          <a href="/" className="header__logo link"></a>
          <div className="header__personal">
            <a href="#" className="header__personal-signup link">Регистрация</a>
            <a href="#" className="header__personal-signin btn">Войти</a>
          </div>
        </header>
        <section className="lead container container_size_big">
          <h1 className="lead__title">Учебный проект студента факультета Веб-разработки.</h1>
          <img src={leadImg} alt="Project" className="lead__img"/>
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

      <section className="student container">
        <h2 className="section-title">Студент</h2>

        <div className="student__about">
          <div className="student__about-text">
            <h3 className="student__about-name">Вячеслав</h3>
            <p className="student__about-job">Фронтенд-разработчик, 33 года</p>
            <p className="student__about-desc">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a href="#" className="student__about-github link" target="_blank">Github</a>
          </div>
          <img src={photoStudent} alt="Фото студента" className="student__about-photo"/>
        </div>

        <div className="student__portfolio">
          <h3 className="student__portfolio-title">Портфолио</h3>
          <ul className="student__portfolio-list">
            <li className="student__portfolio-item">
              <a href="#" className="student__portfolio-link link" target="_blank">Статичный сайт</a>
            </li>
            <li className="student__portfolio-item">
              <a href="#" className="student__portfolio-link link" target="_blank">Адаптивный сайт</a>
            </li>
            <li className="student__portfolio-item">
              <a href="#" className="student__portfolio-link link" target="_blank">Одностраничное приложение</a>
            </li>
          </ul>
        </div>
      </section>

      <footer className="footer container container_size_big">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__bot">
          <p className="footer__copyright">© 2022</p>
          <div className="footer__project">
            <a href="#" className="footer__project-link link">Яндекс.Практикум</a>
            <a href="#" className="footer__project-link link">Github</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
