import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Profile({ isNavigationMenuOpen, isNavigationButtonClass, handleOpenNavigationMenu }) {
  return (
    <>
      <Header>
        <Navigation
          isNavigationMenuOpen={isNavigationMenuOpen}
          isNavigationButtonClass={isNavigationButtonClass}
          isOpen={handleOpenNavigationMenu}
        />
      </Header>

      <section className="profile container">
        <h1 className="profile__title">Привет, Вячеслав!</h1>
        <ul className="profile__info">
          <li className="profile__item">
            <p className="profile__name">Имя</p>
            <p className="profile__value">Вячеслав</p>
          </li>
          <li className="profile__item">
            <p className="profile__name">E-mail</p>
            <p className="profile__value">i@kvs142.ru</p>
          </li>
        </ul>
        <div className="profile__controls">
          <button className="profile__button-edit link" type="button">Редактировать</button>
          <Link to="/signin" className="profile__link-logout link">Выйти из аккаунта</Link>
        </div>
      </section>
    </>
  );
}

export default Profile;
