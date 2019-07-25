import React, { Component } from 'react';
import Movies from './Movies';
import PosterFullSize from './PosterFullSize';

export default class MoviesPage extends Component {
  state = {
    movies: [],
    isOpenPosterFullSize: false,
    posterFullSizeUrl: ''
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

  openPosterFullSize = e => {
    const { isOpenPosterFullSize } = this.state;

    this.setState({
      isOpenPosterFullSize: !isOpenPosterFullSize,
      posterFullSizeUrl: e.target.src
    });
  };

  render() {
    const { movies, isOpenPosterFullSize, posterFullSizeUrl } = this.state;
    const posterFullSize = isOpenPosterFullSize && <PosterFullSize openPosterFullSize={this.openPosterFullSize} posterFullSizeUrl={posterFullSizeUrl} />

    return (
      <div className='movies__page'>
        {posterFullSize}
        <Movies openPosterFullSize={this.openPosterFullSize} movies={movies}/>
      </div>
    );
  };
};
