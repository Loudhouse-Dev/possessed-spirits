/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

export type Cocktail = {
  id: string;
  name: string;
  liquors: string[];
  ingredients: string[][];
  garnish?: string;
  directions: string[];
};

const fetchCocktails = async ({
  queryKey,
}: QueryFunctionContext): Promise<Cocktail[]> => {
  const id = queryKey[1];
  const response = await axios.get('http://localhost:3001/api/cocktails');

  if (!response.data) throw new Error('No data returned from server.');

  return response.data;
};

export default fetchCocktails;
