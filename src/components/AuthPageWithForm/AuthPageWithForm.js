import React from 'react';
import './AuthPageWithForm.css';
import {Link} from "react-router-dom";

function AuthPageWithForm(props) {
  return (
    <div className="auth">
      <Link to="/" className="logo link"></Link>
      <h1 className="auth__title">{props.title}</h1>
      <form name={props.name} className={`auth__form auth__form_type_${props.name}`}>
        <fieldset className="auth__field-wrap">
          {props.children}
        </fieldset>
        <fieldset className="auth__field-wrap auth__field-wrap_type_buttons">
          <button className="auth__button btn" type="submit" name="authSubmit">{props.buttonText}</button>
          <div className="auth__alt">{props.altText} <Link to={props.linkTo} className="auth__link link">{props.altTextLink}</Link></div>
        </fieldset>
      </form>
    </div>
  );
}

export default AuthPageWithForm;
