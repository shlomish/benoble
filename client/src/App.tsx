import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchField } from './components/SearchField';
import { MovieList } from './components/MovieList';
import MovieStore from './stores/MovieStore';

const App = () => {
  const movieStore = new MovieStore();

  const updateMovies = async (text: string) => {
    // TODO: debounce
    movieStore.search('Check');
  };

  return (
    <div className="App">
      <SearchField placeholder="This is placeholder" onTyping={updateMovies} />
      <MovieList data={movieStore.movies} />
    </div>
  );
};

export default App;
