import React from 'react';
import AuthPageWithForm from '../AuthPageWithForm/AuthPageWithForm';

function Register() {
  return (
    <AuthPageWithForm
      name="loginForm"
      title="Рады видеть!"
      buttonText="Войти"
      altText="Ещё не зарегистрированы?"
      altTextLink="Регистрация"
      linkTo="/signup"
      id="auth-form"
    >
      <label className="auth__field">
        <p className="auth__input-name">E-mail</p>
        <input
          type="email"
          name="userEmail"
          id="useremail-input"
          className="auth__input"
          placeholder="Ваш email"
          minLength="6"
          required
        />
        <span className="auth__error"></span>
      </label>
      <label className="auth__field">
        <p className="auth__input-name">Пароль</p>
        <input
          type="password"
          name="userPassword"
          id="userpassword-input"
          className="auth__input"
          placeholder="Введите пароль"
          minLength="6"
          required
        />
        <span className="auth__error"></span>
      </label>

    </AuthPageWithForm>
  );
}

export default Register;
