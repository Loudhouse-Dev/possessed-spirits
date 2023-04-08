/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import Card from './Card';
import fetchCocktails from '../lib/fetchCocktails';
import Filters from './Filters';
import MobileFilters from './MobileFilters';
import MobileHeader from './MobileHeader';

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
  const [filteredCocktails, setFilteredCocktails] = useState<Cocktail[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const id = null;
  const results = useQuery(['cocktails', id], fetchCocktails);

  useEffect(() => {
    if (results.data) {
      setCocktails(results.data);
      setFilteredCocktails(results.data);
    }
  }, [results.data]);

  useEffect(() => {
    if (selectedFilter !== 'all') {
      const newFilteredCocktails = cocktails.filter((cocktail) => {
        return cocktail['liquors'].includes(selectedFilter);
      });
      setFilteredCocktails([...newFilteredCocktails]);
    } else {
      setFilteredCocktails([...cocktails]);
    }
  }, [cocktails, selectedFilter]);

  if (results.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MobileHeader />
      <MobileFilters select={setSelectedFilter} selected={selectedFilter} />
      <header className="site-header pos-fixed vh-100 bg-light hide-mobile">
        <div className="container">
          <div className="logo">
            <img src="./src/assets/scratch-logo.png" alt="Site Logo" />
          </div>
          <h2> Pick Your Poison: </h2>
          <Filters select={setSelectedFilter} selected={selectedFilter} />
        </div>
      </header>
      <motion.div
        layout
        className="card-list display-flex flex-dir-row flex-wrap flex-justify-evenly"
      >
        <AnimatePresence initial={false}>
          {filteredCocktails?.map((cocktail: Cocktail, i) => (
            <Card key={i} cocktail={cocktail} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default CardList;
