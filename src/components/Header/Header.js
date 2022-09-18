import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <header className="container-fluid theme_dark_blue">
      <div className="header container container_size_big">
        <Link to="/" className="logo link"></Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
