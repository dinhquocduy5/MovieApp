import { Movie } from '../movie';

export type Genres = {
  id: number;
  name: string;
};

export type ProductionCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type ProductionCountries = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type Date = {
  maximum: string;
  minimum: string;
};

export type MovieResponse = {
  dates: Date;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type MovieSearchResponse = Pick<
  MovieResponse,
  'page' | 'results' | 'total_pages' | 'total_results'
>;

export type DetailMovieResponse = Movie & {
  belongs_to_collection: string;
  budget: string;
  genres: Genres;
  homepage: string;
  imdb_id: string;
  production_companies: ProductionCompanies;
  production_countries: ProductionCountries;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages;
  status: string;
  tagline: string;
};
