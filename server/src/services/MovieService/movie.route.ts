import express, { Request, Response } from 'express';
import * as MovieService from './';
import { Movie } from '../../models/Movie';
import { HttpStatusCode } from '../../typing';
import Cache from '../Cache';

export const moviesRouter = express.Router();

const cache = new Cache([]);

moviesRouter.get('/:query', async (req: Request, res: Response) => {
  const { query } = req.params;
  const cacheResults = cache.getBy(query, 'title');
  if (cacheResults.length > 0) {
    res.status(HttpStatusCode.OK).send(cacheResults);
  } else {
    const results: Movie[] = await MovieService.getMovies(query);
    cache.set(results);
    res.status(HttpStatusCode.OK).send(results);
  }
});
