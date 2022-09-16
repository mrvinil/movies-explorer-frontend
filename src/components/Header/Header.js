import React from 'react';
import {Link} from 'react-router-dom';
import Promo from '../Promo/Promo';
import './Header.css';

function Header() {
  return (
    <div className="container-fluid theme_dark_blue">
      <header className="header container container_size_big">
        <Link to="/" className="header__logo link"></Link>
        <div className="header__personal">
          <Link to="/signup" className="header__personal-signup link">Регистрация</Link>
          <Link to="/signin" className="header__personal-signin btn">Войти</Link>
        </div>
      </header>
      <Promo />
    </div>
  );
}

export default Header;
