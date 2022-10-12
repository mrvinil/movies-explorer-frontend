import React, { useState} from 'react';
import './SearchForm.css';
import iconSearch from '../../images/icons/icon__search.svg';
import iconFind from '../../images/icons/icon__find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = ({ onSubmit, keyword, setKeyword, isShort, setIsShort }) => {
  const [errMessage, setErrMessage] = useState('');

  const isValid = (() => {
    if (keyword.length > 0) {
      return true;
    } else {
      return false;
    }
  })();

  const handleChangeSearch = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    if (isValid) {
      setErrMessage('');
      onSubmit();
    } else {
      setErrMessage("Введите название фильма");
    }
  };

  return (
    <section className="search">
      <form name="search" className="search__form" noValidate onSubmit={handleSearch}>
        <div className="search__label">
          <img src={iconSearch} className="search__icon" alt="Поиск"/>
        </div>
        <input
          type="text"
          name="search"
          className="search__input"
          placeholder="Фильм"
          autoComplete="off"
          value={keyword}
          onChange={handleChangeSearch}
          required
        />
        <span className={`search__error ${errMessage && 'search__error_active'}`}>{errMessage}</span>
        <button className="search__button btn" type="submit">
          <img src={iconFind} className="search__icon" alt="Найти"/>
        </button>
      </form>
      <FilterCheckbox isShort={isShort} setIsShort={setIsShort}>Короткометражки</FilterCheckbox>
    </section>
  );
}

export default SearchForm;
