import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ children, isShort, setIsShort }) => {
  const handleCheckboxChange = (evt) =>
    evt.target.checked ? setIsShort(true) : setIsShort(false);

  return (
    <div className="switch">
      <input
        type="checkbox"
        id="switch"
        className="switch__checkbox"
        onChange={handleCheckboxChange}
        defaultChecked={isShort}
      />
      <label htmlFor="switch" className="switch__title">{children}</label>
    </div>
  );
}

export default FilterCheckbox;
