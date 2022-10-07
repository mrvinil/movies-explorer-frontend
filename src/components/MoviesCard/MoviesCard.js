import React from 'react';
import {useLocation} from 'react-router-dom';
import { transformDuration } from '../../utils/utils';
import './MoviesCard.css';

function MoviesCard({ movie, saved, onLikeClick, onDeleteClick }) {
  const location = useLocation();
  const savedMoviesUrl = location.pathname === '/saved-movies';

  const defaultMovieFavoriteButtonClass = `movies__label-favorite ${saved ? 'movies__label-favorite_active' : ''}`;
  const removeMovieFavoriteButtonClass = 'movies__label-favorite_remove';

  // функция добавления фильма в избранное
  function handleMovieFavorite() {
    onLikeClick(movie);
  }

  // функция удаления фильма из избранного
  function handleMovieDelete() {
    onDeleteClick(movie);
  }

  return (
    <li className="movies__item">
      <div className="movies__img-wrap">
        <img src={movie.image} alt={movie.nameRU} className="movies__item-img"/>
        <span
          className={`${savedMoviesUrl ? removeMovieFavoriteButtonClass : defaultMovieFavoriteButtonClass}`}
          onClick={saved ? handleMovieDelete : handleMovieFavorite}
        >
          Сохранить
        </span>
      </div>
      <div className="movies__info">
        <a href={movie.trailerLink} className="movies__item-link link" target="_blank">
          <h2 className="movies__item-title">{movie.nameRU}</h2>
        </a>
        <span className="movies__duration">{transformDuration(movie.duration)}</span>
      </div>
    </li>
  );
}

export default MoviesCard;
