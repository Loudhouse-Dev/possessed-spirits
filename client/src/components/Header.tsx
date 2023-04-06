import React, { useState } from 'react';

function Header() {
  const [selected, setSelected] = useState('all');

  const categories = [
    'whiskey',
    'gin',
    'vodka',
    'rum',
    'tequila',
    'aperol',
    'vermouth',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.currentTarget.value);
    //console.log(selected);
  };

  return (
    <header className="site-header pos-fixed vh-100 bg-light">
      <div className="container">
        <div className="logo">
          <img src="./src/assets/scratch-logo.png" alt="Site-logo" />
        </div>
        <h2> Pick Your Poison: </h2>
        <ul className="filters">
          {categories.map((cat) => (
            <li key={cat}>
              <input
                className="filter-btn"
                onChange={handleChange}
                checked={selected === cat}
                type="radio"
                value={cat}
              />
              <label htmlFor={cat}>{cat.toUpperCase()}</label>
            </li>
          ))}
        </ul>

        <div className="button-container">
          <button
            aria-roledescription="filter"
            className="primary-button"
            id="filter-submit"
            type="submit"
          >
            Submit
          </button>
          <button
            aria-roledescription="clear-filters"
            className="primary-button"
            id="filter-clear"
            type="submit"
          >
            Clear
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
