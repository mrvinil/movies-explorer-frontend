import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
  return (
    <section className="movies">
      <ul className="movies__list">
        {
          movies.map((data) => (<MoviesCard key={data.name} {...data} />))
        }
      </ul>
      <button className="movies__pagination btn" type="button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
