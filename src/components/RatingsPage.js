import React, { Component } from 'react';
import Switch from './Switch';
import MoviesPage from './MoviesPage';
import SerialsPage from './SerialsPage';

export default class RatingsPage extends Component {
  state = {
    areMoviesSelected: true,
  };

  switchingBetweenMoviesAndSerials = () => {
    const { areMoviesSelected } = this.state;
    const switchBody = document.querySelector('.switch__body');

    if(areMoviesSelected) {
      switchBody.children[0].className = 'switch__ball_serials';
      this.setState({areMoviesSelected: !areMoviesSelected});
    } else if(!areMoviesSelected) {
      switchBody.children[0].className = 'switch__ball_movies';
      this.setState({areMoviesSelected: !areMoviesSelected});
    };
  };

  render() {
    const { areMoviesSelected } = this.state;

    const moviesPage = areMoviesSelected && <MoviesPage />
    const serialsPage = !areMoviesSelected && <SerialsPage />

    return (
      <div className='ratings__page'>
        <Switch switchingBetweenMoviesAndSerials={this.switchingBetweenMoviesAndSerials} />
        {moviesPage}
        {serialsPage}
      </div>
    );
  };
};
