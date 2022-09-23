import React from 'react';
import {Link} from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <section className="page-not-found container">
      <div className="page-not-found__text">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__desc">Страница не найдена</p>
      </div>
      <Link to="/" className="page-not-found__link link">Назад</Link>
    </section>
  );
}

export default NotFoundPage;
