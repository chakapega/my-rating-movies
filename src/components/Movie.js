import React from 'react';
import './Movie.css';
import VideoProductRating from './VideoProductRating';

export default function Movie({ movie, openPosterFullSize }) {
  return (
    <div className='movie__container'>
      <div className='movie__description_container'>
        <h3 className='movie__title'>{movie.name}</h3>
        <span className='movie__year'>{movie.year}</span>
        <p className='movie__description'>{movie.description}</p>
        <VideoProductRating rating={movie.rating}/>
      </div>
      <div className='movie__poster_container'>
        <img className='movie__poster' src={movie.posterUrl} alt='movie-poster' width='360' onClick={openPosterFullSize} title='click to open in full size'></img>
      </div>
    </div>
  );
};
