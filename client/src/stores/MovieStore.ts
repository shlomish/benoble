import { Movie } from '../typing';
import { observable } from 'mobx';

export default class MovieStore {
  @observable movies: Movie[];

  constructor(initialMovies?: Movie[]) {
    this.movies = initialMovies || [];
  }

  search = async (query: string) => {
    if (query === '') return;
    const res = await fetch(`api/movie/${query}`);
    const newMovies = await res.json();
    this.movies = (newMovies as Array<any>).map(this.movieAdapter);
    console.log(this.movies);
  };

  private movieAdapter = (data: any): Movie => ({
    id: data.id,
    date: new Date(data.date),
    title: data?.title,
    description: data?.description,
    imageUrl: data?.imageUrl,
  });
}
