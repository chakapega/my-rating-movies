import React from 'react';
import Movie from './Movie';
import './Movies.css';

export default function Movies({ movies }) {
  return (
    <div className='movies__list'>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
