export type TMovieKey = keyof Omit<Movie, 'id' | 'imageUrl' | 'date'>;

export type Movie = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: Date;
};
