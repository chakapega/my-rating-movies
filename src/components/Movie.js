import React from 'react';
import './Movie.css';

export default function Movie({ movie }) {
  return (
    <div className='movie__container'>
      <div className='movie__description_container'>
        <h3 className='movie__title'>{movie.name}</h3>
        <span className='movie__year'>{movie.year}</span>
        <p className='movie__description'>{movie.description}</p>
        <span className='movie__rating'>{movie.rating}</span>
      </div>
      <div className='movie__poster_container'>
        <img className='movie__poster' src={movie.posterUrl} alt='movie-poster' width='360'></img>
      </div>
    </div>
  );
};
