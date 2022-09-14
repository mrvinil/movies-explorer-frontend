import './App.css';

function App() {
  return (
    <div className="page">
      <div className="container-fluid theme_dark_blue">
        <header className="header">
          <a href="/" className="header__logo link"></a>
          <div className="header__personal">
            <a href="#" className="header__personal-signup link">Регистрация</a>
            <a href="#" className="header__personal-signin btn">Войти</a>
          </div>
        </header>
        <section className="lead">
          <h1 className="lead__title">Учебный проект студента факультета Веб-разработки.</h1>
          <div className="lead__img"></div>
        </section>
      </div>
    </div>
  );
}

export default App;
