import React from 'react';
import './VideoProductRating.css';
import ratingStarIcon from '../images/ratingstaricon.png';

export default function VideoProductRating({ rating }) {
  const starArr = [];

  for(let i = 0; i < rating; i++) {
    starArr.push(<img key={i} className='rating__star rating__star_one' alt='rating-icon' src={ratingStarIcon}></img>)
  };
  
  return (
    <div className='movie__rating_container'>
      {starArr}
    </div>
  );
};
