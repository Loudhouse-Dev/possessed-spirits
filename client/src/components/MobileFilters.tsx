import React from 'react';

type Props = {
  select: (value: string) => void;
  selected: string;
};

const MobileFilters: React.FC<Props> = ({ select, selected }) => {
  const categories = [
    'all',
    'whiskey',
    'gin',
    'tequila',
    'vodka',
    'rum',
    'aperol',
    'vermouth',
  ];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    select(e.target.value);
  };

  return (
    <div className="select-container hide-desktop mobile-sticky">
      <label htmlFor="mobile-filters">
        <span>Pick Your Poison:</span>
        <select
          id="filter-select"
          value={selected}
          onChange={handleSelectChange}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toLocaleUpperCase()}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default MobileFilters;
