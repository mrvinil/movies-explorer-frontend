import React, {useContext, useEffect, useState} from 'react';
import './SearchForm.css';
import iconSearch from '../../images/icons/icon__search.svg';
import iconFind from '../../images/icons/icon__find.svg';
import {useLocation} from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormWithValidation from '../../utils/useFormWithValidation';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function SearchForm({ handleSearchSubmit, handleShortFilms, shortMovies }) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();

  const { values, handleChange, isValid, setIsValid } = useFormWithValidation();

  const [errorQuery, setErrorQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    isValid ? handleSearchSubmit(values.search) : setErrorQuery('Введите название фильма');
  }

  useEffect(() => {
    setErrorQuery('')
  }, [isValid]);

  //состояние инпута из локального хранилища
  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem(`${currentUser.email} - movieSearch`)) {
      values.search = localStorage.getItem(`${currentUser.email} - movieSearch`);
      setIsValid(true);
    }
  }, [currentUser]);

  return (
    <section className="search">
      <form name="search" className="search__form" noValidate onSubmit={handleSubmit}>
        <div className="search__label">
          <img src={iconSearch} className="search__icon" alt="Поиск"/>
        </div>
        <input
          type="text"
          name="search"
          className="search__input"
          placeholder="Фильм"
          autoComplete="off"
          value={values.search || ''}
          onChange={handleChange}
          required
        />
        <span className={`search__error ${errorQuery && 'search__error_active'}`}>{errorQuery}</span>
        <button className="search__button btn" type="submit">
          <img src={iconFind} className="search__icon" alt="Найти"/>
        </button>
      </form>
      <FilterCheckbox
        shortMovies={shortMovies}
        handleShortFilms={handleShortFilms}
      />
    </section>
  );
}

export default SearchForm;
