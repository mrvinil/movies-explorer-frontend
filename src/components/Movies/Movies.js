import React from 'react';
import './Movies.css';
import iconSearch from '../../images/icons/icon__search.svg';
import iconFind from '../../images/icons/icon__find.svg';
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
      <main className="container container_size_big">
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
      </main>
      <Footer />
    </>
  );
}

export default Movies;
