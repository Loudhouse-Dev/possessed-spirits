/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface Cocktail {
  name: string;
  liquors: string[];
  ingredients: string[][];
  garnish?: string;
  directions: string[];
}

interface CocktailContextProps {
  cocktails: Cocktail[];
  filteredCocktails: Cocktail[];
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
  filterCocktails: () => void;
}

export const CocktailContext = createContext<CocktailContextProps>({
  cocktails: [],
  filteredCocktails: [],
  selectedFilter: 'all',
  setSelectedFilter: () => {},
  filterCocktails: () => {},
});

interface CocktailProviderProps {
  children: ReactNode;
}

export const CocktailProvider = ({ children }: CocktailProviderProps) => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [filteredCocktails, setFilteredCocktails] = useState<Cocktail[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  useEffect(() => {
    async function getCocktails() {
      const response = await axios.get<Cocktail[]>('http://localhost:8080/');
      setCocktails(response.data);
    }

    getCocktails();
  }, []);

  useEffect(() => {
    filterCocktails();
  }, [cocktails, selectedFilter]);

  const filterCocktails = () => {
    if (selectedFilter !== 'all') {
      const newFilteredCocktails = cocktails.filter((cocktail) => {
        return cocktail['liquors'].includes(selectedFilter);
      });
      setFilteredCocktails(newFilteredCocktails);
    } else {
      setFilteredCocktails(cocktails);
    }
  };

  return (
    <CocktailContext.Provider
      value={{
        cocktails,
        filteredCocktails,
        selectedFilter,
        setSelectedFilter,
        filterCocktails,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};
