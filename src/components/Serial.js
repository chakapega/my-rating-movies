import React from 'react';
import './Serial.css';

export default function Serial({ serial, openPosterFullSize}) {
  return (
    <div className='serial__container'>
      <div className='serial__description_container'>
        <h3 className='serial__title'>{serial.name}</h3>
        <span className='serial__year'>{serial.year}</span>
        <p className='serial__description'>{serial.description}</p>
        <span className='serial__rating'>{serial.rating}</span>
      </div>
      <div className='serial__poster_container'>
        <img className='serial__poster' src={serial.posterUrl} alt='serial-poster' width='360' onClick={openPosterFullSize} title='click to open in full size'></img>
      </div>
    </div>
  );
};
