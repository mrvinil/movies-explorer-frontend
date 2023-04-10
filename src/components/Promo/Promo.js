import React from 'react';
import './Promo.css';
import promoImg from '../../images/promo__img.svg';

function Promo() {
  return (
    <section className="container-fluid theme_dark_blue">
      <div className="promo container">
        <h1 className="promo__title">Pet-проект на React и Express.js
          <br/>
          <small>Авторизуйся, чтобы увидеть проект</small>
        </h1>
        <img src={promoImg} alt="Project" className="promo__img"/>
      </div>
    </section>
  );
}

export default Promo;
