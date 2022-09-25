import React from 'react';
import Header from "../Header/Header";
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies({ isNavigationMenuOpen, isNavigationButtonClass, handleOpenNavigationMenu, movies }) {
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

export default SavedMovies;
