import React from 'react';
import './MoviesCardList.css';

const MoviesCardList = ({ cardsElements }) => {

  return (
    <section className="movies">
      <ul className="movies__list">
        {cardsElements}
      </ul>
    </section>
  );
};

export default MoviesCardList;
