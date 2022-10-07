import { useEffect } from 'react';
import AuthPageWithForm from '../AuthPageWithForm/AuthPageWithForm';
import useFormWithValidation from '../../utils/useFormWithValidation';

function Login({ handleLogin }) {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

  function onSubmit(e) {
    e.preventDefault();
    handleLogin(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <AuthPageWithForm
      name="loginForm"
      title="Рады видеть!"
      buttonText="Войти"
      altText="Ещё не зарегистрированы?"
      altTextLink="Регистрация"
      linkTo="/signup"
      id="auth-form"
      onSubmit={onSubmit}
      isValid={isValid}
    >
      <label className="auth__field">
        <p className="auth__input-name">E-mail</p>
        <input
          type="email"
          name="email"
          id="useremail-input"
          className={`auth__input ${errors.email && 'auth__input_type_error'}`}
          onChange={handleChange}
          value={values.email || ''}
          placeholder="Ваш email"
          minLength="6"
          required
        />
        <span className={`auth__error ${errors.email && 'auth__error_active'}`}>{errors.email || ''}</span>
      </label>
      <label className="auth__field">
        <p className="auth__input-name">Пароль</p>
        <input
          type="password"
          name="password"
          id="userpassword-input"
          className={`auth__input ${errors.password && 'auth__input_type_error'}`}
          onChange={handleChange}
          value={values.password || ''}
          placeholder="Введите пароль"
          minLength="6"
          required
        />
        <span className={`auth__error ${errors.password && 'auth__error_active'}`}>{errors.password || ''}</span>
      </label>

    </AuthPageWithForm>
  );
}

export default Login;
