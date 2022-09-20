import React from 'react';
import './Navigation.css';
import {Link, NavLink} from "react-router-dom";

const classNameLink = ({ isActive }) => (isActive ? 'header__nav-link header__nav-link_active link ' : 'header__nav-link link');

function Navigation({ isNavigationMenuOpen, isNavigationButtonClass, isOpen }) {
  return (
    <>
      <div className={`header__burger-btn ${isNavigationButtonClass}`} onClick={isOpen}>
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
      </div>

      {isNavigationMenuOpen && <div className="header__nav-bg"></div>}
      <nav className={isNavigationMenuOpen ? 'header__nav active' : 'header__nav'}>
        <ul className="header__nav-list">
          {
            isNavigationMenuOpen
            &&
            <li className="header__nav-item">
              <NavLink to="/" className={classNameLink}>Главная</NavLink>
            </li>
          }
          <li className="header__nav-item">
            <NavLink to="/profile" className={classNameLink}>Фильмы</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/saved-movies" className={classNameLink}>Сохранённые фильмы</NavLink>
          </li>
        </ul>
        <Link to="/profile" className="header__nav-personal link">Аккаунт</Link>
      </nav>
    </>
  );
}

export default Navigation;
