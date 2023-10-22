import _ from 'lodash';
import React, { useEffect } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import useMovie from '../../hooks/useMovie';
import './styles.scss';

const DetailMovie = (
  props: RouteComponentProps<{
    id: string;
  }>
) => {
  const history = useHistory();
  const { match } = props;
  const { getDetailMovieById, detailMovie,isFetching } = useMovie();

  useEffect(() => {
    if (!_.isEmpty(match.params)) {
      getDetailMovieById(_.get(match, 'params.id'));
    }
  }, [match.params.id]);

  return (
    <div className="movie-detail-page">
      <button className='back-button' onClick={() => history.push('/movies')}>Back</button>
      {!_.isEmpty(detailMovie) && !isFetching ? (
        <div className="movie">
          <img
            className="movie-backdrop"
            src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${detailMovie.backdrop_path}`}
            alt="Movie Backdrop"
          />
          <div className="movie-details">
            <h1 className="movie-title">{detailMovie.title}</h1>
            <p className="movie-description">{detailMovie.overview}</p>
            <div className="movie-info">
              <span className="vote-count">{detailMovie.vote_count} votes</span>
              <span className="release-year">{detailMovie.release_date}</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DetailMovie;
