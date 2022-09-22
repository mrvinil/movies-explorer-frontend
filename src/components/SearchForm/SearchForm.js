import React from 'react';
import './SearchForm.css';
import iconSearch from '../../images/icons/icon__search.svg';
import iconFind from '../../images/icons/icon__find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <form name="search" className="search__form">
        <div className="search__label">
          <img src={iconSearch} className="search__icon" alt="Поиск"/>
        </div>
        <input type="text" className="search__input" placeholder="Фильм"/>
        <button className="search__button btn" type="submit">
          <img src={iconFind} className="search__icon" alt="Найти"/>
        </button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
