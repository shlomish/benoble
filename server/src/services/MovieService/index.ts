import axios from 'axios';
import { Movie } from '../../models/Movie';
import { IMDBSearchRes } from '../../adapters/typing';
import { imdbMovieAdapter } from '../../adapters/ImdbMovieAdapter';

export const getMovies = async (query: string): Promise<Movie[]> => {
  const res = await axios.get(
    `${process.env.IMDB_API}/search/movie?query=${query}&api_key=${process.env.IMDB_API_KEY}`,
    { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' } }
  );
  return (res.data as IMDBSearchRes).results
    .slice(0, 10)
    ?.map(imdbMovieAdapter);
};
