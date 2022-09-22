import React from 'react';
import './Movies.css';
import iconSearch from '../../images/icons/icon__search.svg';
import iconFind from '../../images/icons/icon__find.svg';
import moviesImg1 from '../../images/movies/movies__img-1.jpg';
import moviesImg2 from '../../images/movies/movies__img-2.jpg';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({ isNavigationMenuOpen, isNavigationButtonClass, handleOpenNavigationMenu }) {
  return (
    <>
      <Header>
        <Navigation
          isNavigationMenuOpen={isNavigationMenuOpen}
          isNavigationButtonClass={isNavigationButtonClass}
          isOpen={handleOpenNavigationMenu}
        />
      </Header>
      <main className="container">
        <section className="search">
          <form name="search" className="search__form">
            <div className="search__label">
              <img src={iconSearch} className="search__icon" alt="Поиск"/>
            </div>
            <input type="text" className="search__input" placeholder="Фильм"/>
            <button className="search__button btn" type="submit">
              <img src={iconFind} className="search__icon" alt="Найти"/>
            </button>
          </form>
          <div className="search__switch">
            <input className="switch__checkbox" type="checkbox" id="switch" />
            <label htmlFor="switch" className="switch__title">Короткометражки</label>
          </div>
        </section>

        <section className="movies">
          <ul className="movies__list">
            <li className="movies__item">
              <div className="movies__img-wrap">
                <img src={moviesImg1} alt="33 слова о дизайне" className="movies__item-img"/>
                <span className="movies__label-favorite movies__label-favorite_active">Сохранить</span>
              </div>
              <div className="movies__info">
                <h2 className="movies__item-title">Gimme Danger: История Игги и The Stooges</h2>
                <span className="movies__duration">1ч 17м</span>
              </div>
            </li>
            <li className="movies__item">
              <div className="movies__img-wrap">
                <img src={moviesImg2} alt="Киноальманах «100 лет дизайна»" className="movies__item-img"/>
                <span className="movies__label-favorite">Сохранить</span>
              </div>
              <div className="movies__info">
                <h2 className="movies__item-title">Киноальманах «100 лет дизайна»</h2>
                <span className="movies__duration">1ч 40м</span>
              </div>
            </li>
            <li className="movies__item">
              <div className="movies__img-wrap">
                <img src={moviesImg2} alt="Киноальманах «100 лет дизайна»" className="movies__item-img"/>
                <span className="movies__label-favorite">Сохранить</span>
              </div>
              <div className="movies__info">
                <h2 className="movies__item-title">Киноальманах «100 лет дизайна»</h2>
                <span className="movies__duration">1ч 40м</span>
              </div>
            </li>
            <li className="movies__item">
              <div className="movies__img-wrap">
                <img src={moviesImg1} alt="33 слова о дизайне" className="movies__item-img"/>
                <span className="movies__label-favorite">Сохранить</span>
              </div>
              <div className="movies__info">
                <h2 className="movies__item-title">33 слова о дизайне</h2>
                <span className="movies__duration">1ч 17м</span>
              </div>
            </li>
            <li className="movies__item">
              <div className="movies__img-wrap">
                <img src={moviesImg2} alt="Киноальманах «100 лет дизайна»" className="movies__item-img"/>
                <span className="movies__label-favorite">Сохранить</span>
              </div>
              <div className="movies__info">
                <h2 className="movies__item-title">Киноальманах «100 лет дизайна»</h2>
                <span className="movies__duration">1ч 40м</span>
              </div>
            </li>
            <li className="movies__item">
              <div className="movies__img-wrap">
                <img src={moviesImg2} alt="Киноальманах «100 лет дизайна»" className="movies__item-img"/>
                <span className="movies__label-favorite">Сохранить</span>
              </div>
              <div className="movies__info">
                <h2 className="movies__item-title">Киноальманах «100 лет дизайна»</h2>
                <span className="movies__duration">1ч 40м</span>
              </div>
            </li>
          </ul>
          <button className="movies__pagination btn" type="button">Ещё</button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
