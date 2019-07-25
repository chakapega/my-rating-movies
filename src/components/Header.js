import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <span className='header__logo'>My rating of movies and serials</span>
      <div className='header__navigation'>
        <Link to='/' className='navigation__home'>Home</Link>
        <Link to='/ratings' className='navigation__rating'>Ratings</Link>
        <Link to='/addmovie' className='navigation__home'>Add video product</Link>
      </div>
    </div>
  );
};
