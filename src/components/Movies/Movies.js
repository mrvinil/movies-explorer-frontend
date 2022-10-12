import React from 'react';
import { MoviesContext } from "../../contexts/MoviesContext";
import { useState, useContext, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import { useMediaQuery } from 'react-responsive';
import {
  EXPAND_CARDS_QUANTITY_DESKTOP,
  EXPAND_CARDS_QUANTITY_MOBILE,
  EXPAND_CARDS_QUANTITY_TABLET,
  INITIAL_CARDS_QUANTITY_DESKTOP,
  INITIAL_CARDS_QUANTITY_MOBILE,
  INITIAL_CARDS_QUANTITY_TABLET,
} from '../../utils/constants';

const Movies = ({ onSearch, onLike, onDislike, isLoading }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1279px)",});
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  const [ itemsCount, setItemsCount ] = useState(INITIAL_CARDS_QUANTITY_MOBILE);

  const {
    filteredMovies,
    moviesKeyword,
    setMoviesKeyword,
    moviesIsShort,
    setMoviesIsShort,
    moviesIsSearched,
  } = useContext(MoviesContext);

  useEffect(() => {
    const initialQuantity = (() => {
      if (isMobile) {
        return INITIAL_CARDS_QUANTITY_MOBILE;
      }
      if (isTablet) {
        return INITIAL_CARDS_QUANTITY_TABLET;
      }
      if (isDesktop) {
        return INITIAL_CARDS_QUANTITY_DESKTOP;
      }
    })();
    setItemsCount(initialQuantity);
  }, [filteredMovies, isMobile, isTablet, isDesktop]);

  const cardsElements = filteredMovies.map((card) => (
    <MoviesCard
      card={card}
      key={card.id}
      onLike={onLike}
      onDislike={onDislike}
      buttonType='like'
    />
  ));

  const shownCardElements = cardsElements.slice(0, itemsCount);

  const handleExpand = () => {
    const expandQuantity = (() => {
      if (isMobile) {
        return EXPAND_CARDS_QUANTITY_MOBILE;
      }
      if (isTablet) {
        return EXPAND_CARDS_QUANTITY_TABLET;
      }
      if (isDesktop) {
        return EXPAND_CARDS_QUANTITY_DESKTOP;
      }
    })();
    setItemsCount(itemsCount + expandQuantity);
  };

  const isExpandActive = (() => {
    return shownCardElements.length === cardsElements.length ? false : true;
  })();

  const cardsMessage = (() => {
    if (!moviesIsSearched) {
      return <span></span>;
    } else if (!isLoading && cardsElements.length === 0) {
      return <span>Ничего не найдено</span>;
    }
  })();

  return (
    <>
      <main className="container">
        <SearchForm
          onSubmit={onSearch}
          keyword={moviesKeyword}
          setKeyword={setMoviesKeyword}
          isShort={moviesIsShort}
          setIsShort={setMoviesIsShort}
        />
        {isLoading && <Preloader />}
        {cardsMessage}
        <MoviesCardList cardsElements={shownCardElements} />
        {isExpandActive && (
          <button className="movies__pagination btn" type="button" onClick={handleExpand}>Ещё</button>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Movies;
