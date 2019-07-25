import React from 'react';
import './PosterFullSize.css';

export default function PosterFullSize({ posterFullSizeUrl, openPosterFullSize }) {
  return (
    <div className='poster__full-size_container'>
      <img className='poster__full-size' src={posterFullSizeUrl} alt='poster'></img>
      <span className='close__poster' onClick={openPosterFullSize}>⮿</span>
    </div>
  );
};
