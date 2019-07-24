import React, { Component } from 'react';
import Movies from './Movies';

export default class MoviesPage extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    const movies = [];

    window.db.collection('movies').get()
      .then(querySnapshot => {
        querySnapshot.forEach(movie => {
          const newMovie = movie.data();
          newMovie.id = movie.id;

          movies.push(newMovie);
        });
        this.setState({movies: movies});
      });
  };

  render() {
    const { movies } = this.state;

    return (
      <div className='movies__page'>
        <Movies movies={movies}/>
      </div>
    );
  };
};
