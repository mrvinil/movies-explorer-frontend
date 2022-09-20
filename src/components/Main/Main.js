import React from 'react';
import './Main.css';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Promo from "../Promo/Promo";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import Auth from "../Auth/Auth";
import Header from "../Header/Header";

function Main() {
  return (
    <>
      <Header>
        <Auth />
      </Header>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Main;
