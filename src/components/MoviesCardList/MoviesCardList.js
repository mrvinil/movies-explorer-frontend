import React from 'react';
import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from '../../utils/useWindowSize';
import { WINDOW_SIZE } from '../../utils/constants.js';
import { getSavedMovieCard } from '../../utils/utils.js';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesList, savedMoviesList, onLikeClick, onDeleteClick }) {
  const screenWidth = useWindowSize();
  const { desktop, tablet, mobile } = WINDOW_SIZE;

  const [isMount, setIsMount] = useState(true);
  const [showMovieList, setShowMovieList] = useState([]);
  const [cardsShowDetails, setCardsShowDetails] = useState({ total: 12, more: 3 });

  const location = useLocation();

  // количество отображаемых карточек при разной ширине экрана
  useEffect(() => {
    if (location.pathname === '/movies') {
      if (screenWidth > desktop.width) {
        setCardsShowDetails(desktop.cards);
      } else if (screenWidth <= desktop.width && screenWidth > mobile.width) {
        setCardsShowDetails(tablet.cards);
      } else {
        setCardsShowDetails(mobile.cards);
      }
      return () => setIsMount(false);
    }
  }, [screenWidth, isMount, desktop, tablet, mobile, location.pathname]);

  // изменяем отображаемый массив фильмов в зависимости от ширины экрана
  useEffect(() => {
    if (moviesList.length) {
      const res = moviesList.filter((item, i) => i < cardsShowDetails.total);
      setShowMovieList(res);
    }
  }, [moviesList, cardsShowDetails.total]);

  // функция добавления карточек при клике по кнопке "Еще"
  function handleClickMoreMovies() {
    const start = showMovieList.length;
    const end = start + cardsShowDetails.more;
    const additional = moviesList.length - start;

    if (additional > 0) {
      const newCards = moviesList.slice(start, end);
      setShowMovieList([...showMovieList, ...newCards]);
    }
  }
  return (
    <section className="movies">
      <ul className="movies__list">
        {
          showMovieList.map((movie) => (
            <MoviesCard
              key={movie.id || movie._id}
              saved={getSavedMovieCard(savedMoviesList, movie)}
              onLikeClick={onLikeClick}
              onDeleteClick={onDeleteClick}
              movie={movie}
            />
          ))
        }
      </ul>
      {
        location.pathname === '/movies' && showMovieList.length >= 5 && showMovieList.length < moviesList.length &&
        (
          <button className="movies__pagination btn" type="button" onClick={handleClickMoreMovies}>Ещё</button>
        )
      }
    </section>
  );
}

export default MoviesCardList;
