/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useEffect, ReactNode } from 'react';
// import axios from 'axios';

export type Cocktail = {
  id: string;
  name: string;
  liquors: string[];
  ingredients: string[][];
  garnish?: string;
  directions: string[];
};

interface CocktailContextProps {
  id: string;
  cocktails: Cocktail[];
  filteredCocktails: Cocktail[];
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
  // filterCocktails: () => void;
}

export const CocktailContext = createContext<CocktailContextProps>({
  id: '',
  cocktails: [],
  filteredCocktails: [],
  selectedFilter: 'all',
  setSelectedFilter: () => {},
  // filterCocktails: () => {},
});

interface CocktailProviderProps {
  children: ReactNode;
}

export const CocktailProvider = ({ children }: CocktailProviderProps) => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [filteredCocktails, setFilteredCocktails] =
    useState<Cocktail[]>(cocktails);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  useEffect(() => {
    fetch('http://localhost:3001/api/cocktails')
      .then((response) => response.json())
      .then((data) => setCocktails(data));
  }, []);

  console.log(cocktails);

  // useEffect(() => {
  //   if (selectedFilter !== 'all') {
  //     const newFilteredCocktails = cocktails.filter((cocktail) => {
  //       return cocktail['liquors'].includes(selectedFilter);
  //     });
  //     setFilteredCocktails(newFilteredCocktails || []);
  //   } else {
  //     setFilteredCocktails(cocktails);
  //   }
  // }, [cocktails, selectedFilter]);

  // const filterCocktails = () => {
  //   if (selectedFilter !== 'all') {
  //     const newFilteredCocktails = cocktails.filter((cocktail) => {
  //       return cocktail['liquors'].includes(selectedFilter);
  //     });
  //     setFilteredCocktails(newFilteredCocktails || []);
  //   } else {
  //     setFilteredCocktails(cocktails);
  //   }
  // };

  return (
    <CocktailContext.Provider
      value={{
        id: '1',
        cocktails,
        filteredCocktails,
        selectedFilter,
        setSelectedFilter,
        // filterCocktails,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};
