import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="switch">
      <input className="switch__checkbox" type="checkbox" id="switch" />
      <label htmlFor="switch" className="switch__title">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
