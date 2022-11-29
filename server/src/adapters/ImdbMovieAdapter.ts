import { Movie } from '../models/Movie';
import { IMDBMovie } from './typing';

export const imdbMovieAdapter = (imdbMovie: IMDBMovie): Movie => ({
  id: String(imdbMovie.id),
  title: imdbMovie.original_title,
  description: imdbMovie.overview,
  date: new Date(imdbMovie.release_date),
  imageUrl: `${process.env.IMDB_BASE_POSTER_PATH}${imdbMovie.poster_path}`,
});
