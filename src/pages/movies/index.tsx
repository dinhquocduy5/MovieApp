import _ from 'lodash';
import React, { useEffect } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import SearchInput from '../../components/InputSearch';
import Skeleton from '../../components/Skeleton';
import Tabs from '../../components/Tabs';
import useMovie from '../../hooks/useMovie';
import { Movie } from '../../interfaces/movie';
import MoviePoster from './components/MoviePoster';
import Pagination from '../../components/Pagination';

import './styles.scss';

const Movies = (props: RouteComponentProps<{}>) => {
  const { location } = props;
  const history = useHistory();
  const urlParams = new URLSearchParams(location.search);
  const pageValue = urlParams.get('page');

  const {
    handleSearchMovie,
    movies,
    tabs,
    handleChangeTab,
    isFetching,
    isError,
    currentPage,
    totalPages,
    onPageChange,
  } = useMovie();

  useEffect(() => {
    if (pageValue !== null && _.isNumber(Number(pageValue))) {
      onPageChange(Number(pageValue));
    } else {
      onPageChange(1)
    }
  }, [pageValue]);

  return (
    <div className="movies-page">
      <div className="row-header">
        <h1 className="title-header">Movies</h1>
        <SearchInput
          onSearch={handleSearchMovie}
          placeholder="Search Movie..."
        />
      </div>
      <div className="row-body">
        <Tabs tabs={tabs} onClick={handleChangeTab} />
        {isError && (
          <div className="error-message">Having problem with network!</div>
        )}
        <div className="movies-list">
          {isFetching && !isError
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(
                (item, key) => <Skeleton key={key} />
              )
            : null}
          {!_.isEmpty(movies) && !isFetching && !isError
            ? movies.map((movie: Movie) => (
                <MoviePoster
                  key={movie.id}
                  title={movie.title}
                  imageUrl={`${process.env.REACT_APP_BASE_IMAGE_URL}/${movie.poster_path}`}
                  releaseYear={movie.release_date}
                  onClick={() => history.push(`/movies/${movie.id}`)}
                />
              ))
            : null}
        </div>
        <div className="movies-pagination">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Movies;
