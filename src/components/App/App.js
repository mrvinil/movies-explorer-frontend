import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import { moviesData } from '../../utils/utils';

function App() {
  const [ isNavigationMenuOpen, setIsNavigationMenuOpen ] = React.useState(false);
  const [ isNavigationButtonClass, setIsNavigationButtonClass ] = React.useState('');
  const isOpen = isNavigationMenuOpen || isNavigationButtonClass;

  // закрытие попапа по кнопке Esc
  React.useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if(isOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen])

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
  }

  return (
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route
          path="/profile"
          element={
            <Profile
              isNavigationMenuOpen={isNavigationMenuOpen}
              isNavigationButtonClass={isNavigationButtonClass}
              handleOpenNavigationMenu={handleOpenNavigationMenu}
              onClose={closeAllPopups}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              isNavigationMenuOpen={isNavigationMenuOpen}
              isNavigationButtonClass={isNavigationButtonClass}
              handleOpenNavigationMenu={handleOpenNavigationMenu}
              onClose={closeAllPopups}
              movies={moviesData}
            />
          }
        />
      </Routes>
  );
}

export default App;
