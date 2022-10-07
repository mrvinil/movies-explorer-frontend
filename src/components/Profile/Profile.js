import React from 'react';
import './Profile.css';
import { useEffect, useContext } from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../utils/useFormWithValidation';

function Profile({ handleSignOut, handleProfile }) {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

  // подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  const requirementValidity = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));

  function handleSubmit(e) {
    e.preventDefault();
    handleProfile(values);
  }

  // после загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  return (
    <>
      <section className="profile container">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form className="profile__info" name="profile" noValidate onSubmit={handleSubmit}>
          <div className="profile__item-wrap">

            <fieldset className="profile__item">
              <label className="profile__name">Имя</label>
              <input
                type="text"
                name="name"
                className={`profile__value ${errors.name && 'profile__value_type_error'}`}
                onChange={handleChange}
                value={values.name || ''}
                minLength="2"
                maxLength="30"
                pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
              />
              <span className={`profile__error ${errors.name && 'profile__error_active'}`}>{errors.name || ''}</span>
            </fieldset>

            <fieldset className="profile__item">
              <label className="profile__name">E-mail</label>
              <input
                type="email"
                name="email"
                className={`profile__value ${errors.email && 'profile__value_type_error'}`}
                onChange={handleChange}
                value={values.email || ''}
                minLength="6"
              />
              <span className={`profile__error ${errors.email && 'profile__error_active'}`}>{errors.email || ''}</span>
            </fieldset>

          </div>
          <fieldset className="profile__controls">
            <button className={`profile__button-edit link ${requirementValidity && 'profile__button-edit_disabled'}`} type="submit" disabled={requirementValidity}>Редактировать</button>
            <button className="profile__button-logout link" type="submit" onClick={handleSignOut}>Выйти из аккаунта</button>
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default Profile;
