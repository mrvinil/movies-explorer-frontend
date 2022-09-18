import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '../Main/Main';

import './App.css';
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
  return (
    <>

      <main>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </main>

    </>
  );
}

export default App;
