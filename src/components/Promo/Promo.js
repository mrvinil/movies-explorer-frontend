import React from 'react';
import './Promo.css';
import promoImg from '../../images/promo__img.svg';

function Promo() {
  return (
    <div className="container-fluid theme_dark_blue">
      <section className="promo container container_size_big">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img src={promoImg} alt="Project" className="promo__img"/>
      </section>
    </div>
  );
}

export default Promo;
