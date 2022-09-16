import React from 'react';
import './Promo.css';
import leadImg from '../../images/lead__img.svg';

function Promo() {
  return (
    <section className="lead container container_size_big">
      <h1 className="lead__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img src={leadImg} alt="Project" className="lead__img"/>
    </section>
  );
}

export default Promo;
