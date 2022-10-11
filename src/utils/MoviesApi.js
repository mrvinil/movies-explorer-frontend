import {API_MOVIES_URL} from './constants';

// проверяем статус запроса
function _checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(res);
}

// получение фильмов
export const getMovies = () => {
  return fetch(`${API_MOVIES_URL}/beatfilm-movies`, {
    method: "GET",
  }).then((res) => _checkResponse(res));
};
