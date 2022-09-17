import React from 'react';
import './Navigation.css';
import {Link} from "react-router-dom";

function Navigation() {
  return (
    <div className="header__personal">
      <Link to="/signup" className="header__personal-signup link">Регистрация</Link>
      <Link to="/signin" className="header__personal-signin btn">Войти</Link>
    </div>
  );
}

export default Navigation;
