import { Movie, TMovieKey } from '../../models/Movie';

export default class Cache {
  constructor(private cacheList: Movie[]) {
    this.cacheList = this.cacheList || [];
  }

  getBy = (query: string, by: TMovieKey = 'title'): Movie[] => {
    return this.cacheList.filter((movie) =>
      (movie[by] as string).includes(query)
    );
  };

  set = (movies: Movie[]) => {
    this.cacheList = [...this.cacheList, ...movies];
  };
}
