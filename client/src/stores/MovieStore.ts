import { Movie } from '../typing';
import axios from 'axios';

export default class MovieStore {
  movies: Movie[];

  constructor(initialMovies?: Movie[]) {
    this.movies = initialMovies || [];
  }

  search = async (query: string) => {
    console.log('Searching...');
    const res = await fetch(`api/movie/${query}`);
    const newMovies = await res.json();
    this.movies = (newMovies as Array<any>).map(this.movieAdapter);
    console.log(this.movies);
  };

  private movieAdapter = (data: any): Movie => ({
    title: data?.title,
    description: data?.description,
    imgUrl: data?.imgUrl,
  });
}
