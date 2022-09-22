import React from 'react';
import './MoviesCard.css';

function MoviesCard({ ...card }) {
  return (
    <li className="movies__item">
      <div className="movies__img-wrap">
        <img src={card.imgUrl} alt={card.name} className="movies__item-img"/>
        <span className="movies__label-favorite">Сохранить</span>
      </div>
      <div className="movies__info">
        <h2 className="movies__item-title">{card.name}</h2>
        <span className="movies__duration">{card.duration}</span>
      </div>
    </li>
  );
}

export default MoviesCard;
