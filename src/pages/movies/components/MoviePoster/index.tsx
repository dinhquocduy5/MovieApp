import React from 'react';
import './styles.scss';

interface MoviePosterProps {
  imageUrl: string;
  title: string;
  releaseYear: string;
  onClick: ()=>void
}

const MoviePoster: React.FC<MoviePosterProps> = ({ imageUrl, title, releaseYear, onClick }) => {
  return (
    <div className="movie-poster" onClick={onClick}>
      <img src={imageUrl} alt={title} className="movie-poster-image" />
      <h2 className="movie-poster-title">{title}</h2>
      <p className="movie-poster-release">{releaseYear}</p>
    </div>
  );
};

export default MoviePoster;
