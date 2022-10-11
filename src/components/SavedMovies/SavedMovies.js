import React from 'react';
import './SavedMovies.css';
import { useContext, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MoviesContext } from '../../contexts/MoviesContext';


const SavedMovies = ({ onDislike, onSearch }) => {
  const {
    filteredSavedMovies,
    savedMoviesKeyword,
    setSavedMoviesKeyword,
    savedMoviesIsShort,
    setSavedMoviesIsShort,
    filterSavedMovies,
  } = useContext(MoviesContext);

  useEffect(() => {
    filterSavedMovies();
    return () => {
      setSavedMoviesKeyword("");
      setSavedMoviesIsShort(false);
    };
  }, []);

  const cardsElements = filteredSavedMovies.map((card) => (
    <MoviesCard
      card={card}
      key={card.movieId}
      onDislike={onDislike}
      buttonType='dislike'
    />
  ));

  return (
    <>
      <main className="container">
        <SearchForm
          onSubmit={onSearch}
          keyword={savedMoviesKeyword}
          setKeyword={setSavedMoviesKeyword}
          isShort={savedMoviesIsShort}
          setIsShort={setSavedMoviesIsShort}
        />
        <MoviesCardList cardsElements={cardsElements} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
