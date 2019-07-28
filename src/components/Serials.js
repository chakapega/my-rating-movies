import React from 'react';
import Serial from './Serial';
import './Serials.css';

export default function Serials({ serials, openPosterFullSize }) {
  return (
    <div className='serials__container'>
      {serials.map(serial => (
        <Serial  openPosterFullSize={openPosterFullSize} key={serial.id} serial={serial} />
      ))}
    </div>
  );
};
