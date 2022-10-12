import React, {useState} from 'react';
import './Profile.css';
import { useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import useFormWithValidation from '../../utils/useFormWithValidation';

function Profile({ onLogout, onUpdateProfile }) {
  const { values, handleChange, resetForms, errors, isValid } = useFormWithValidation();
  // Переменные состояния
  const [isUserDataChanged, setUserDataChanged] = useState(false);
  // подписка на контекст
  const { currentUser } = useContext(UserContext);
  const { name, email } = currentUser;

  // Изменились ли данные в форме
  useEffect(() => {
    values.name === name && values.email === email
      ? setUserDataChanged(false)
      : setUserDataChanged(true);
  }, [values]);

  // Подстановка данных в форму
  useEffect(() => {
    currentUser && resetForms(currentUser, {}, true);
  }, [currentUser, resetForms]);

  // Обработчик обновления профиля
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateProfile({ name: values.name, email: values.email });
  };

  return (
    <>
      <section className="profile container">
        <h1 className="profile__title">{`Привет, ${name}!`}</h1>
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
            <button className={`profile__button-edit link ${!isUserDataChanged || !isValid ? 'profile__button-edit_disabled' : ''}`} type="submit" disabled={!isUserDataChanged || !isValid}>Редактировать</button>
            <button className="profile__button-logout link" type="submit" onClick={onLogout}>Выйти из аккаунта</button>
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default Profile;
