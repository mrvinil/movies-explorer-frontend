import React from 'react';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Header.css';

function Header(props) {
  const currentUrl = useLocation();
  const indexUrl = currentUrl.pathname === '/';

  return (
    <header className={`${indexUrl ? 'container-fluid theme_dark_blue' : 'container'}`}>
      <div className={`${indexUrl ? 'header header_type_index container' : 'header header_type_others'}`}>
        <Link to="/" className="logo link"></Link>
        {props.children}
      </div>
    </header>
  );
}

export default Header;
