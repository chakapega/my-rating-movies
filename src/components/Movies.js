import React from 'react';
import Movie from './Movie';
import './Movies.css';

export default function Movies({ movies, openPosterFullSize }) {
  return (
    <div className='movies__container'>
      {movies.map(movie => (
        <Movie openPosterFullSize={openPosterFullSize} key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
