import React from 'react';
import { MovieListProps } from './typing';
import { MovieItem } from '../MovieItem';
import { Movie } from '../../typing';

export const MovieList = (props: MovieListProps) => {
  const { data } = props;

  return (
    <div>
      {data?.map((x) => (
        <MovieItem
          key={x.title}
          movie={{
            title: 'This guy',
            description: 'Is a great actor',
            imgUrl:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Tom_Hanks_2016.jpg/800px-Tom_Hanks_2016.jpg',
          }}
        />
      ))}
    </div>
  );
};
