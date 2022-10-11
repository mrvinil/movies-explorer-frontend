import { useEffect } from 'react';
import AuthPageWithForm from '../AuthPageWithForm/AuthPageWithForm';
import useFormWithValidation from '../../utils/useFormWithValidation';

const Register = ({ onRegister }) => {
  const { values, handleChange, resetForms, errors, isValid } = useFormWithValidation();

  useEffect(() => {
    resetForms();
  }, [resetForms]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <AuthPageWithForm
      name="registerForm"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      altText="Уже зарегистрированы?"
      altTextLink="Войти"
      linkTo="/signin"
      id="reg-form"
      onSubmit={onSubmit}
      isValid={isValid}
    >
      <label className="auth__field">
        <p className="auth__input-name">Имя</p>
        <input
          type="text"
          name="name"
          className={`auth__input ${errors.name && 'auth__input_type_error'}`}
          onChange={handleChange}
          value={values.name || ''}
          placeholder="Ваше имя"
          minLength="2"
          maxLength="30"
          pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
          required
        />
        <span className={`auth__error ${errors.name && 'auth__error_active'}`}>{errors.name || ''}</span>
      </label>
      <label className="auth__field">
        <p className="auth__input-name">E-mail</p>
        <input
          type="email"
          name="email"
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
          className={`auth__input ${errors.password && 'auth__input_type_error'}`}
          onChange={handleChange}
          value={values.password || ''}
          placeholder="Придумайте пароль"
          minLength="6"
          required
        />
        <span className={`auth__error ${errors.password && 'auth__error_active'}`}>{errors.password || ''}</span>
      </label>
    </AuthPageWithForm>
  );
};

export default Register;
