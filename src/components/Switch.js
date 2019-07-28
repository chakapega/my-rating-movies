import React from 'react';
import './Switch.css';

export default function Switch({ switchingBetweenMoviesAndSerials }) {
  return (
    <div className='switch__container'>
      <span className='text__movies'>Movies</span>
      <div className='switch__body' onClick={switchingBetweenMoviesAndSerials}>
        <div className='switch__ball_movies'></div>
      </div>
      <span className='text__serials'>Serials</span>
    </div>
  );
};