import React from 'react';
import { MovieListProps } from './typing';
import { MovieItem } from '../MovieItem';
import { Movie } from '../../typing';
import { observer } from 'mobx-react';

export const MovieList = observer((props: MovieListProps) => {
  const { data } = props;
  console.log('data');
  console.log(data);
  return (
    <div>
      {data?.map((x) => (
        <MovieItem key={x.title} movie={x} />
      ))}
    </div>
  );
});
