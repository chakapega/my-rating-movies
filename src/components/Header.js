import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <span className='header__logo'>My rating of movies and serials</span>
      <div className='header__navigation'>
        <Link to='/' className='navigation__home'>Home</Link>
        <Link to='/ratings' className='navigation__ratings'>Ratings</Link>
        <Link to='/addvideoproduct' className='navigation__add-video-product'>Add video product</Link>
      </div>
    </div>
  );
};
