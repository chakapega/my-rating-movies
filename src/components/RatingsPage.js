import React, { Component } from 'react';
import './RatingsPage.css';
import Switch from './Switch';
import MoviesPage from './MoviesPage';
import SerialsPage from './SerialsPage';

export default class RatingsPage extends Component {
  state = {
    areMoviesSelected: true,
  };

  switchFunc = e => {
    const { areMoviesSelected } = this.state;

    if(e.target.className === 'switch__ball_movies') {
      e.target.className = 'switch__ball_serials';
      this.setState({areMoviesSelected: !areMoviesSelected});
    } else {
      e.target.className = 'switch__ball_movies';
      this.setState({areMoviesSelected: !areMoviesSelected});
    };
  };

  render() {
    const { areMoviesSelected } = this.state;

    const moviesPage = areMoviesSelected && <MoviesPage />
    const serialsPage = !areMoviesSelected && <SerialsPage />

    return (
      <div className='ratings__page'>
        <Switch switchFunc={this.switchFunc} />
        {moviesPage}
        {serialsPage}
      </div>
    );
  };
};
