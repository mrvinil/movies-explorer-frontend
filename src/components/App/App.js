import './App.css';
import React, {useState, useEffect} from 'react';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Preloader from '../Preloader/Preloader';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [load, setLoad] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [isInfoTooltip, setIsInfoTooltip] = useState({
    isOpen: false,
    successful: true,
    text: '',
  });
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);
  const [isNavigationButtonClass, setIsNavigationButtonClass] = useState('');
  const popupIsOpen = isNavigationMenuOpen || isNavigationButtonClass || isInfoTooltip;

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
    setIsInfoTooltip({ ...isInfoTooltip, isOpen: false});
  }

  // функция регистрации пользователя
  function handleRegister({ name, email, password }) {
    setIsLoader(true);
    mainApi.registerUser(name, email, password)
      .then(data => {
        if (data._id) {
          handleLogin({ email, password });
        }
      })
      .catch(err =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      )
      .finally(() => setIsLoader(false));
  }

  // функция авторизации пользователя
  function handleLogin({ email, password }) {
    setIsLoader(true);
    mainApi.loginUser(email, password)
      .then(jwt => {
        if (jwt.token) {
          localStorage.setItem('jwt', jwt.token);
          setLoggedIn(true);
          navigate('/movies');
          setIsInfoTooltip({
            isOpen: true,
            successful: true,
            text: 'Добро пожаловать!',
          });
        }
      })
      .catch(err =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      )
      .finally(() => setIsLoader(false));
  }

  // функция выхода из аккаунта
  function handleSignOut() {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.clear();
    navigate('/');
  }

  // редактирование профиля пользователя
  function handleProfile({ name, email }) {
    setIsLoader(true);
    mainApi.updateUserInfo(name, email)
      .then(newUserData => {
        setCurrentUser(newUserData);
        setIsInfoTooltip({
          isOpen: true,
          successful: true,
          text: 'Ваш профиль обновлен!',
        });
      })
      .catch(err =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      )
      .finally(() => setIsLoader(false));
  }

  // функция сохранения фильма
  function handleSaveMovie(movie) {
    mainApi
      .addMovie(movie)
      .then(newMovie => setSavedMoviesList([newMovie, ...savedMoviesList]))
      .catch(err =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      );
  }

  // функция удаления фильма
  function handleDeleteMovie(movie) {
    const savedMovie = savedMoviesList.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMoviesList.filter(m => {
          return !(movie.id === m.movieId || movie.movieId === m.movieId);
        });
        setSavedMoviesList(newMoviesList);
      })
      .catch(err =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      );
  }

  // проверка токена и авторизация пользователя
  useEffect(() => {
    const path = location.pathname;
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setIsLoader(true);
      mainApi.getUserInfo()
        .then(data => {
          if (data) {
            setLoggedIn(true);
            setCurrentUser(data);
            navigate(path);
          }
        })
        .catch(err =>
          setIsInfoTooltip({
            isOpen: true,
            successful: false,
            text: err,
          })
        )
        .finally(() => {
          setIsLoader(false);
          setLoad(true);
        });
    } else {
      setLoad(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  // получение информации о пользователе
  useEffect(() => {
    if (loggedIn) {
      setIsLoader(true);
      mainApi.getUserInfo()
        .then(res => setCurrentUser(res))
        .catch(err =>
          setIsInfoTooltip({
            isOpen: true,
            successful: false,
            text: err,
          })
        )
        .finally(() => setIsLoader(false));
    }
  }, [loggedIn]);

  // получение массива сохраненных фильмов
  useEffect(() => {
    if (loggedIn && currentUser) {
      mainApi
        .getSavedMovies()
        .then(data => {
          const UserMoviesList = data.filter(m => m.owner === currentUser._id);
          setSavedMoviesList(UserMoviesList);
        })
        .catch(err =>
          setIsInfoTooltip({
            isOpen: true,
            successful: false,
            text: err,
          })
        );
    }
  }, [currentUser, loggedIn]);

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

  return (
    <>
      {!load
        ?
        (<Preloader isOpen={isLoader} />)
        :
        (<CurrentUserContext.Provider value={currentUser}>
          <Header
            loggedIn={loggedIn}
            isNavigationMenuOpen={isNavigationMenuOpen}
            isNavigationButtonClass={isNavigationButtonClass}
            handleOpenNavigationMenu={handleOpenNavigationMenu}
            onClose={closeAllPopups}
          />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={!loggedIn ? <Register handleRegister={handleRegister}/> : <Navigate to="/movies" replace />}/>
            <Route path="/signin" element={!loggedIn ? <Login handleLogin={handleLogin}/> : <Navigate to="/movies" replace />}/>
            <Route
              path="/profile"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Profile
                    loggedIn={loggedIn}
                    handleProfile={handleProfile}
                    handleSignOut={handleSignOut}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Movies
                    loggedIn={loggedIn}
                    setIsLoader={setIsLoader}
                    setIsInfoTooltip={setIsInfoTooltip}
                    savedMoviesList={savedMoviesList}
                    onLikeClick={handleSaveMovie}
                    onDeleteClick={handleDeleteMovie}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <SavedMovies
                    loggedIn={loggedIn}
                    savedMoviesList={savedMoviesList}
                    onDeleteClick={handleDeleteMovie}
                    setIsInfoTooltip={setIsInfoTooltip}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Preloader isOpen={isLoader} />
          <InfoTooltip
            status={isInfoTooltip}
            onClose={closeAllPopups}
          />
        </CurrentUserContext.Provider>)
      }
    </>
  );
}

export default App;
