import { API_BASE_URL } from './constants';

// проверяем статус запроса
function _checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(res);
}

// Проверка токена
export const checkToken = (token) => {
  return fetch(`${API_BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => _checkResponse(res));
};

// регистрация пользователя
export const registerUser = ({ email, password, name }) => {
  return fetch(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then((res) => _checkResponse(res));
};

// авторизация пользователя
export const loginUser = ({ email, password }) => {
  return fetch(`${API_BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => _checkResponse(res));
};

// запрос на редактирование данных пользователя
export const updateUserInfo = ({ email, name }, token) => {
  return fetch(`${API_BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, name }),
  }).then((res) => _checkResponse(res));
};

// запрос фильмов
export const getSavedMovies = (token) => {
  return fetch(`${API_BASE_URL}/movies`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => _checkResponse(res));
};

// добавление фильма в избранное
export const saveMovie = (movie, token) => {
  return fetch(`${API_BASE_URL}/movies`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  }).then((res) => _checkResponse(res));
};

// удаление фильма из избранного
export const deleteMovie = (movieId, token) => {
  return fetch(`${API_BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => _checkResponse(res));
};
