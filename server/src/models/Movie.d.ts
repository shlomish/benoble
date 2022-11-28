export type TMovieKey = keyof Omit<Movie, 'id'>;

export type Movie = {
  id: string;
  title: string;
  description: string;
  year: number;
};
