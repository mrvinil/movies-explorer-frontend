import React from 'react';
import './UserAccount.css';
import {Link} from 'react-router-dom';

function UserAccount() {
  return (
    <Link to="/profile" className="personal link">Аккаунт</Link>
  );
}

export default UserAccount;
