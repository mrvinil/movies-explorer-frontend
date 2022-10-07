import {API_MOVIES_URL} from './constants';

class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  // проверяем статус запроса
  async _checkResponse(res) {
    const result = await res.json();
    return res.ok ? result : Promise.reject(`Ошибка ${res.status} - ${res.message}`);
  }

  // получение фильмов
  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => this._checkResponse(res));
  }
}

const moviesApi = new MoviesApi( {
  // создаём экземпляр класса работающего с API сервиса с фильмами
  baseUrl: API_MOVIES_URL,
});

export default moviesApi;