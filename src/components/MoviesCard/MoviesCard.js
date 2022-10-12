import React, {useContext} from 'react';
import {API_MOVIES_URL} from '../../utils/constants';
import './MoviesCard.css';
import { MoviesContext } from '../../contexts/MoviesContext';

function MoviesCard({ card, onLike, onDislike, buttonType }) {
  const { id, nameRU, duration, image, trailerLink } = card;
  const { savedMovies } = useContext(MoviesContext);

  // Преобразование формата времени
  const convertedDuration = (() => {
    const hours = Math.floor(duration / 60);
    const minutes = duration - hours * 60;
    return `${hours}ч ${minutes}м`;
  })();

  // Проверка, сохранена ли карточка
  const savedMovie = savedMovies.find(
    (savedMovie) => savedMovie.movieId === id
  );
  const isLiked = (() => (savedMovie ? true : false))();

  // Обработчик кнопки сохранения / удаления фильма
  const handleLikeClick = () =>
    isLiked ? onDislike(savedMovie) : onLike(card);

  // Обработчик кнопки удаления фильма
  const handleDislikeClick = () => onDislike(card);

  const defaultMovieFavoriteButtonClass = `movies__label-favorite ${isLiked ? 'movies__label-favorite_active' : ''}`;
  const removeMovieFavoriteButtonClass = 'movies__label-favorite_remove';

  let cardButton;
  if (buttonType === "dislike") {
    cardButton = (
      <span className={removeMovieFavoriteButtonClass} onClick={handleDislikeClick}>Удалить</span>
    );
  } else if (buttonType === "like") {
    cardButton = (
      <span className={defaultMovieFavoriteButtonClass} onClick={handleLikeClick}>Сохранить</span>
    );
  }

  return (
    <li className="movies__item">
      <div className="movies__img-wrap">
        {/*eslint-disable-next-line*/}
        <a href={trailerLink} className="movies__img-link link" target="_blank" rel="noreferrer"></a>
        <img src={image.url ? API_MOVIES_URL + image.url : image} alt={nameRU} className="movies__item-img"/>
        {cardButton}
      </div>
      <div className="movies__info">
        <a href={trailerLink} className="movies__item-link link" target="_blank" rel="noreferrer">
          <h2 className="movies__item-title">{nameRU}</h2>
        </a>
        <span className="movies__duration">{convertedDuration}</span>
      </div>
    </li>
  );
}

export default MoviesCard;
