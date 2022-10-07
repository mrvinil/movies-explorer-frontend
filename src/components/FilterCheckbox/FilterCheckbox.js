import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ shortMovies, handleShortFilms }) {
  return (
    <div className="switch">
      <input
        type="checkbox"
        id="switch"
        className="switch__checkbox"
        onChange={handleShortFilms}
        checked={!!shortMovies}
      />
      <label htmlFor="switch" className="switch__title">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
