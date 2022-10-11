import './App.css';
import React, {useState, useContext, useEffect} from 'react';
import { API_MOVIES_URL } from '../../utils/constants';
import { MoviesContext } from '../../contexts/MoviesContext';
import { UserContext } from '../../contexts/UserContext';
import { UNAUTHORIZED_ERROR_CODE, } from '../../utils/constants';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getMovies } from '../../utils/MoviesApi';
import {
  loginUser,
  registerUser,
  checkToken,
  updateUserInfo,
  getSavedMovies,
  saveMovie,
  deleteMovie,
} from '../../utils/MainApi';

const App = () => {
  const navigate = useNavigate();

  // Переменные состояния навигационного меню
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);
  const [isNavigationButtonClass, setIsNavigationButtonClass] = useState('');

  // Переменные состояния сообщения об ошибке
  const [infoPopupMessage, setInfoPopupMessage] = useState('');
  const [infoPopupType, setInfoPopupType] = useState('');
  const [isInfoPopupShown, setIsInfoPopupShown] = useState(false);

  // Переменные состояния прелоадера
  const [isLoading, setIsLoading] = useState(false);

  // Подписка на контекст
  const {
    movies,
    setMovies,
    setMoviesIsSearched,
    filterMovies,
    filterSavedMovies,
    setSavedMovies,
    addMovieToSaved,
    removeMovieFromSaved,
    resetState,
    restoreState,
  } = useContext(MoviesContext);
  const { isLoggedIn, setIsLoggedIn, setCurrentUser } = useContext(UserContext);

  const popupIsOpen = isNavigationMenuOpen || isNavigationButtonClass || isInfoPopupShown;

  // Чтение локального хранилища
  const token = localStorage.getItem('token');
  const moviesState = localStorage.getItem('moviesState');

  // Действия при загрузке приложения: проверяем токен
  useEffect(() => {
    token ? handleTokenCheck(token) : setIsLoggedIn(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // функция обработки ошибок
  function handleError(err) {
    err.message
      ? showInfoPopup('error', err.message)
      : err
        .json()
        .then((message) =>
          showInfoPopup(
            'error',
            message?.validation?.body?.message || message.message
          )
        );
    if (err.status === UNAUTHORIZED_ERROR_CODE) handleSignOut();
  }

  // Действия при логине: загружаем сохраненные фильмы
  useEffect(() => {
    if (token) {
      getSavedMovies(token)
        .then((savedMovies) => setSavedMovies(savedMovies))
        .catch((err) => handleError(err));
    }
    if (moviesState) {
      restoreState(moviesState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  // функция обработки проверки токена
  function handleTokenCheck(token) {
    checkToken(token)
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        handleError(err);
      });
  }

  // функция показа попапа
  function showInfoPopup(type, message) {
    setInfoPopupType(type);
    setInfoPopupMessage(message);
    setIsInfoPopupShown(true);

    setTimeout(() => setIsInfoPopupShown(false), 4000);
  }

  // функция обработки поиска фильмов
  function handleSearchMovies() {
    if (movies.length === 0) {
      setMoviesIsSearched(true);
      setIsLoading(true);
      getMovies()
        .then((movies) => {
          setMovies(movies);
        })
        .catch((err) => handleError(err))
        .finally(() => setIsLoading(false));
    } else {
      filterMovies();
    }
  }

  // функция обработки поиска сохраненных фильмов
  function handleSearchSavedMovies() {
    filterSavedMovies();
  }

  // функция логина
  function handleLogin(userData) {
    loginUser(userData)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          handleTokenCheck(data.token);
          showInfoPopup('success', 'Добро пожаловать!');
          navigate('/movies');
        }
      })
      .catch((err) => handleError(err));
  }

  // функция регистрации
  function handleRegister(userData) {
    const { email, password } = userData;
    registerUser(userData)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => handleError(err));
  }

  // функция выхода из аккаунта
  function handleSignOut() {
    localStorage.clear();
    resetState();
    setIsLoggedIn(false);
    navigate('/');
  }

  // функция обработки обновления профиля
  function handleProfile(userData) {
    updateUserInfo(userData, token)
      .then((updatedUserData) => {
        setCurrentUser(updatedUserData);
        showInfoPopup('success', 'Ваш профиль обновлен!');
      })
      .catch((err) => handleError(err));
  }

  // функция обработки сохранения фильма
  function handleLike(card) {
    saveMovie(
      {
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: API_MOVIES_URL + card.image.url,
        trailerLink: card.trailerLink,
        thumbnail: API_MOVIES_URL + card.image.formats.thumbnail.url,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      },
      token
    )
      .then((movie) => addMovieToSaved(movie))
      .catch((err) => handleError(err));
  }

  // функция обработки удаления фильма из сохраненных
  function handleDislike(savedMovie) {
    deleteMovie(savedMovie._id, token)
      .then(() => removeMovieFromSaved(savedMovie))
      .catch((err) => handleError(err));
  }

  // открытие мобильного меню и изменение бургер кнопки
  function handleOpenNavigationMenu(){
    if (isNavigationMenuOpen) {
      setIsNavigationButtonClass('');
    } else {
      setIsNavigationButtonClass('active');
    }
    setIsNavigationMenuOpen(!isNavigationMenuOpen);
  }

  // функция закрытия попапа
  function closeAllPopups() {
    setIsNavigationMenuOpen(false);
    setIsNavigationButtonClass('');
    setIsInfoPopupShown(false);
  }

  // закрытие попапа по кнопке Esc
  useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if(popupIsOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[popupIsOpen])

  // Не рендерим страницу, пока не получили пользователя
  if (isLoggedIn === undefined) return null;

  return (
    <div className='app'>
      <Header
        isLoggedIn={isLoggedIn}
        isNavigationMenuOpen={isNavigationMenuOpen}
        isNavigationButtonClass={isNavigationButtonClass}
        handleOpenNavigationMenu={handleOpenNavigationMenu}
        onClose={closeAllPopups}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={!isLoggedIn ? <Register onRegister={handleRegister}/> : <Navigate to="/movies" replace />}/>
        <Route path="/signin" element={!isLoggedIn ? <Login onLogin={handleLogin}/> : <Navigate to="/movies" replace />}/>
        <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile
                onLogout={handleSignOut}
                onUpdateProfile={handleProfile}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Movies
                onSearch={handleSearchMovies}
                onLike={handleLike}
                onDislike={handleDislike}
                isLoading={isLoading}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedMovies
                onSearch={handleSearchSavedMovies}
                onDislike={handleDislike}
              />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <InfoTooltip
        onClose={closeAllPopups}
        message={infoPopupMessage}
        isActive={isInfoPopupShown}
        type={infoPopupType}
      />
    </div>
  );
};

export default App;
