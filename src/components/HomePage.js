import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home__page'>
      <div className='welcome__container'>
        <p className='welcome__text'>Welcome to my rating of movies and serials. To continue, click the button below.</p>
        <Link className='welcome__link' to='/ratings'>Go to ratings</Link>
      </div>
    </div>
  );
};
