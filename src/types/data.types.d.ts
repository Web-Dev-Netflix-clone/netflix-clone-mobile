export interface CarouselData {
  source: any;
  header: string;
  text: string;
}

export interface IMovieDetails {
  backdropUrls: string[];
  id: number | string;
  keywords: string[];
  logo: string;
  logoUrl?: string;
  overview: string;
  posterUrls: string[];
  rating: string;
  runtime: string;
  title: string;
  trailerUrl: string;
}

export interface IMoviesObject {
  categoryDetails: IMovieDetails[];
}

export interface IMovieSet {
  genre: string;
  movies: IMovieDetailsTransform[];
}

export interface IMovieDetailsTransform {
  id: string | number;
  title: string;
  description: string;
  backdrop: string;
  backdropHighRes: string;
  poster: string;
  posterHighRes: string;
  trailer: string;
  runtime: string;
}
