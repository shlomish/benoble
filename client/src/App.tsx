import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchField } from './components/SearchField';
import { MovieList } from './components/MovieList';
import MovieStore from './stores/MovieStore';
import { observer } from 'mobx-react';
import debounce from 'lodash/debounce';

const App = () => {
  const movieStore = new MovieStore();

  const updateMovies = async (text: string) => {
    movieStore.search(text);
  };

  const debouncedUpdate = useRef(debounce(updateMovies, 300)).current;

  return (
    <div className="App">
      <SearchField placeholder="Search here" onTyping={debouncedUpdate} />
      {/** BUG: MovieList should have been rendered when movieStore.movies is changed */}
      <MovieList data={movieStore.movies} />
    </div>
  );
};

export default observer(App);
