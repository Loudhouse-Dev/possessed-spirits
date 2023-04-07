import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import CardList from './components/CardList';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <CardList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
