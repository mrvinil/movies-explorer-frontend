import './Header.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Auth from '../Auth/Auth';

function Header({ loggedIn, isNavigationMenuOpen, isNavigationButtonClass, handleOpenNavigationMenu }) {
  const currentUrl = useLocation();
  const indexUrl = currentUrl.pathname === '/';
  const headerUrl =
    currentUrl.pathname === '/' ||
    currentUrl.pathname === '/profile' ||
    currentUrl.pathname === '/movies' ||
    currentUrl.pathname === '/saved-movies';

  return (
    <>
      {headerUrl && loggedIn === true
        ?
        (<header className={`${indexUrl ? 'container-fluid theme_dark_blue' : 'container'}`}>
          <div className={`${indexUrl ? 'header header_type_index container' : 'header header_type_others'}`}>
            <Link to="/" className="logo link"></Link>
            <Navigation
              isNavigationMenuOpen={isNavigationMenuOpen}
              isNavigationButtonClass={isNavigationButtonClass}
              popupIsOpen={handleOpenNavigationMenu}
            />
          </div>
        </header>)
        :
        <></>
      }
      {indexUrl && loggedIn === false
        ?
        (<header className={`${indexUrl ? 'container-fluid theme_dark_blue' : 'container'}`}>
          <div className={`${indexUrl ? 'header header_type_index container' : 'header header_type_others'}`}>
            <Link to="/" className="logo link"></Link>
            <Auth />
          </div>
        </header>)
        :
        <></>
      }
    </>
  );
}

export default Header;
