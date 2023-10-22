import { DetailMovieResponse, MovieResponse, MovieSearchResponse } from '../interfaces/response/movie';
import axiosInstance from './axiosInstance';

const movieService = {
  getListNowPlaying: (language: string, page: number) => {
    return axiosInstance
      .get<MovieResponse>(`/3/movie/now_playing?language=${language}&page=${page}`)
      .then((res) => res.data)
  },
  getListTopRate: (language: string, page: number) => {
    return axiosInstance
      .get<MovieResponse>(`/3/movie/top_rated?language=${language}&page=${page}`)
      .then((res) => res.data)
  },
  search: (name: string) => {
    return axiosInstance
      .get<MovieSearchResponse>(`/3/search/movie?query=${name}`)
      .then((res) => res.data)
  },
  getDetailById: (id: string) =>{
    return axiosInstance
      .get<DetailMovieResponse>(`/3/movie/${id}`)
      .then((res) => res.data)
  }
};

export default movieService;
