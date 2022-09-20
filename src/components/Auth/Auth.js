import React from 'react';
import './Auth.css';
import {Link} from "react-router-dom";

function Auth() {
  return (
    <div className="header__auth">
      <Link to="/signup" className="header__auth-signup link">Регистрация</Link>
      <Link to="/signin" className="header__auth-signin btn">Войти</Link>
    </div>
  );
}

export default Auth;
