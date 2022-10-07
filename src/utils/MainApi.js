import { API_BASE_URL } from './constants';

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  // проверяем статус запроса
  async _checkResponse(res) {
    const result = await res.json();
    return res.ok ? result : Promise.reject(`Ошибка ${res.status} - ${res.message}`);
  }

  // регистрация пользователя
  registerUser(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
      .then(res => this._checkResponse(res));
  }

  // авторизация пользователя
  loginUser(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then(res => this._checkResponse(res));
  }

  // запрос данных пользователя
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}`, }
    })
      .then(res => this._checkResponse(res));
  }

  // запрос на редактирование данных пользователя
  updateUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({ name, email })
    })
      .then(res => this._checkResponse(res));
  }

  // запрос фильмов
  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}`, }
    })
      .then(res => this._checkResponse(res));
  }

  // добавление фильма в избранное
  addMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        director: data.director,
        country: data.country,
        year: data.year,
        duration: data.duration,
        description: data.description,
        trailerLink: data.trailerLink,
        image: data.image,
        thumbnail: data.thumbnail,
      })
    })
      .then(res => this._checkResponse(res));
  }

  // удаление фильма из избранного
  deleteMovie(data) {
    return fetch(`${this._baseUrl}/movies/${data}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      }
    })
      .then(res => this._checkResponse(res));
  }
}

const mainApi = new Api({
  // создаём экземпляр класса работающего с API сервера
  baseUrl: API_BASE_URL,
});

export default mainApi;
