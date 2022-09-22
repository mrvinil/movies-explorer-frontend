import React from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ isNavigationMenuOpen, isNavigationButtonClass, handleOpenNavigationMenu, movies }) {
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
        <SearchForm />
        <MoviesCardList
          movies={movies}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
