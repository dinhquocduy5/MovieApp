import _ from 'lodash';
import React, { useContext } from 'react';
import { IFMovieContext, MovieContext } from '../contexts/MovieContext';
import {
  DetailMovieResponse,
  MovieResponse,
  MovieSearchResponse
} from '../interfaces/response/movie';
import movieService from '../services/movieService';
import { useHistory } from 'react-router-dom';

const useMovie = () => {
  const {
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
  } = useContext<IFMovieContext>(MovieContext);
  const history = useHistory();

  const tabs = [{ label: 'Now Playing' }, { label: 'Top Rated' }];

  const onPageChange = async (page: number) => {
    try {
      setIsError(false);
      setIsFetching(true);
      const res: MovieResponse =
        tab === 'Now Playing'
          ? await movieService.getListNowPlaying('en-US', page)
          : await movieService.getListTopRate('en-US', page);
      if (!_.isEmpty(res)) {
        if (page > 1) {
          history.push({
            pathname: '/movies',
            search: `?page=${page}`
          });
        } else {
          history.push({
            pathname: '/movies'
          });
        }
        setCurrentPage(page);
        setTotalPages(res.total_pages);
        setMovies(res.results);
        setIsFetching(false);
      }
    } catch (error) {
      setCurrentPage(page);
      setTotalPages(0);
      setIsError(true);
      setIsFetching(false);
    }
  };

  const handleChangeTab = async (tab: string) => {
    setTab(tab);
    history.push({
      pathname: '/movies'
    });
    setCurrentPage(1);
    try {
      setIsError(false);
      setIsFetching(true);
      const res: MovieResponse =
        tab === 'Now Playing'
          ? await movieService.getListNowPlaying('en-US', 1)
          : await movieService.getListTopRate('en-US', 1);
      if (!_.isEmpty(res)) {
        setTotalPages(res.total_pages);
        setMovies(res.results);
        setIsFetching(false);
      }
    } catch (error) {
      setCurrentPage(1);
      setTotalPages(0);
      setIsError(true);
      setIsFetching(false);
    }
  };

  const handleSearchMovie = async (value: string) => {
    setCurrentPage(1)
    history.push({
      pathname: '/movies'
    });
    try {
      setIsError(false);
      setIsFetching(true);
      const res: MovieSearchResponse = await movieService.search(value.trim());
      if (!_.isEmpty(res)) {
        setTotalPages(res.total_pages);
        setMovies(res.results);
        setIsFetching(false);
      }
    } catch (error) {
      setTotalPages(0);
      setIsError(true);
    }
  };

  const getDetailMovieById = async (id: string) => {
    try {
      setIsError(false);
      setIsFetching(true);
      const res: DetailMovieResponse = await movieService.getDetailById(id);
      if (!_.isEmpty(res)) {
        setDetailMovie(res);
        setIsFetching(false);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return {
    handleSearchMovie,
    movies,
    setMovies,
    isFetching,
    setIsFetching,
    isError,
    setIsError,
    tabs,
    handleChangeTab,
    getDetailMovieById,
    detailMovie,
    setDetailMovie,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
    onPageChange,
    tab,
    setTab
  };
};

export default useMovie;
