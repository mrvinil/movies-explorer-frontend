import React from 'react';
import {useNavigate} from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className="page-not-found container">
      <div className="page-not-found__text">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__desc">Страница не найдена</p>
      </div>
      <button className="page-not-found__link link" onClick={() => navigate(-1)}>Назад</button>
    </section>
  );
}

export default NotFoundPage;
