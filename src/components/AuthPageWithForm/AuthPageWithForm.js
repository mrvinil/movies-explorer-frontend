import React from 'react';
import './AuthPageWithForm.css';
import {Link} from 'react-router-dom';

function AuthPageWithForm({ title, name, children, buttonText, altText, linkTo, altTextLink, isValid, onSubmit}) {
  return (
    <div className="auth">
      <Link to="/" className="logo link"></Link>
      <h1 className="auth__title">{title}</h1>
      <form name={name} className={`auth__form auth__form_type_${name}`} noValidate onSubmit={onSubmit}>
        <fieldset className="auth__field-wrap">
          {children}
        </fieldset>
        <fieldset className="auth__field-wrap auth__field-wrap_type_buttons">
          <button className={`auth__button btn ${!isValid && 'auth__button_disabled'}`} type="submit" disabled={!isValid}>{buttonText}</button>
          <div className="auth__alt">{altText} <Link to={linkTo} className="auth__link link">{altTextLink}</Link></div>
        </fieldset>
      </form>
    </div>
  );
}

export default AuthPageWithForm;
