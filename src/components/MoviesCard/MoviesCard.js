import React from 'react';
import {useLocation} from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ ...movie }) {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const currentUrl = useLocation();
  const savedMoviesUrl = currentUrl.pathname === '/saved-movies';

  const defaultMovieFavoriteButtonClass = `movies__label-favorite ${isFavorite ? 'movies__label-favorite_active' : ''}`;
  const removeMovieFavoriteButtonClass = 'movies__label-favorite_remove';

  function handleMovieFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <li className="movies__item">
      <div className="movies__img-wrap">
        <img src={movie.imgUrl} alt={movie.name} className="movies__item-img"/>
        <span className={`${savedMoviesUrl ? removeMovieFavoriteButtonClass : defaultMovieFavoriteButtonClass}`} onClick={handleMovieFavorite}>Сохранить</span>
      </div>
      <div className="movies__info">
        <h2 className="movies__item-title">{movie.name}</h2>
        <span className="movies__duration">{movie.duration}</span>
      </div>
    </li>
  );
}

export default MoviesCard;
