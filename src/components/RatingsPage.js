import React, { Component } from 'react';
import './RatingsPage.css';

export default class RatingsPage extends Component {
  state = {
    areMoviesSelected: true,
  };

  switch = e => {
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
    return (
      <div className='ratings__page'>
        <div className='switch__container'>
        <span className='text__movies'>Movies</span>
          <div className='switch__body'>
            <div className='switch__ball_movies' onClick={this.switch}></div>
          </div>
          <span className='text__serials'>Serials</span>
        </div>
      </div>
    )
  }
}
