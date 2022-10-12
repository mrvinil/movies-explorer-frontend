import React from 'react';
import './PopupWithForm.css';

function PopupWithForm({ name, children, onClose, onSubmit, isActive }) {

  return (
    <div className={`popup popup-${name} ${isActive ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <div className="popup__overlay" onClick={onClose}></div>
        <form name={name} className={`popup__form form-${name}`} onSubmit={onSubmit} noValidate>
          <button type="button" className="popup__close" onClick={onClose}></button>
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
