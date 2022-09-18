import React from 'react';
import AuthPageWithForm from '../AuthPageWithForm/AuthPageWithForm';

function Register() {
  return (
    <AuthPageWithForm
      name="registerForm"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      altText="Уже зарегистрированы?"
      altTextLink="Войти"
      linkTo="/signin"
      id="reg-form"
    >
      <label className="auth__field">
        <p className="auth__input-name">Имя</p>
        <input
          type="text"
          name="userName"
          id="username-input"
          className="auth__input"
          required
        />
        <span className="auth__error"></span>
      </label>
      <label className="auth__field">
        <p className="auth__input-name">E-mail</p>
        <input
          type="email"
          name="userEmail"
          id="useremail-input"
          className="auth__input"
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
          className="auth__input auth__input_type_error"
          required
        />
        <span className="auth__error auth__error_active">Что-то пошло не так...</span>
      </label>

    </AuthPageWithForm>
  );
}

export default Register;
