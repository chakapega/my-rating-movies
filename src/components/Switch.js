import React from 'react';
import './Switch.css';

export default function Switch({ switchFunc }) {
  return (
    <div className='switch__container'>
      <span className='text__movies'>Movies</span>
      <div className='switch__body'>
        <div className='switch__ball_movies' onClick={switchFunc}>

        </div>
      </div>
      <span className='text__serials'>Serials</span>
    </div>
  );
};
