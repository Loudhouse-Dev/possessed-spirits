import React, { useContext, useState, useEffect } from 'react';
import Card from './Card';
import Filters from './Filters';
// import { CocktailContext } from '../context/CocktailContext';
// import { Cocktail } from '../context/CocktailContext';

export type Cocktail = {
  id: string;
  name: string;
  liquors: string[];
  ingredients: string[][];
  garnish?: string;
  directions: string[];
};

function CardList() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  // const { filteredCocktails, selectedFilter, setSelectedFilter, cocktails } =
  //   useContext(CocktailContext);

  useEffect(() => {
    fetch('http://localhost:3001/api/cocktails')
      .then((response) => response.json())
      .then((data) => setCocktails(data));
  }, []);

  return (
    <>
      <header className="site-header pos-fixed vh-100 bg-light">
        <div className="container">
          <div className="logo">
            <img src="./src/assets/scratch-logo.png" alt="Site Logo" />
          </div>
          <h2> Pick Your Poison: </h2>
          {/* {//<Filters select={setSelectedFilter} selected={selectedFilter} /> } */}
        </div>
      </header>
      <section className="card-list display-flex flex-dir-row flex-wrap flex-justify-evenly">
        {cocktails.map((cocktail: Cocktail, i) => (
          <Card key={i} cocktail={cocktail} />
        ))}
      </section>
    </>
  );
}

export default CardList;
