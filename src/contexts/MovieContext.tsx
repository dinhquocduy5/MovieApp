import React, { useState } from 'react';
import { Movie } from '../interfaces/movie';
import { DetailMovieResponse } from '../interfaces/response/movie';

type Props = {
  children: string | JSX.Element;
};

export interface IFMovieContext {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[] | []>>;
  isFetching: boolean;
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>;
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  detailMovie: DetailMovieResponse;
  setDetailMovie: React.Dispatch<
    React.SetStateAction<DetailMovieResponse | null>
  >;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>
}

export const MovieContext = React.createContext<IFMovieContext | any>({});

const MovieProvider = ({ children }: Props) => {
  const [movies, setMovies] = useState<Movie[] | []>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [detailMovie, setDetailMovie] = useState<DetailMovieResponse | null>(
    null
  );
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [tab, setTab] = useState<string>('Now Playing');

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        isFetching,
        setIsFetching,
        isError,
        setIsError,
        detailMovie,
        setDetailMovie,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        tab,
        setTab
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
