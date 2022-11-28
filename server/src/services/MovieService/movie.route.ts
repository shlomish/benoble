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
    // TODO: Call to API
    const results: Movie[] = [];
    res.status(HttpStatusCode.OK).send([
      {
        title: 'This guy',
        description: 'Is a great actor',
        imgUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Tom_Hanks_2016.jpg/800px-Tom_Hanks_2016.jpg',
      },
    ]);
  }
});
