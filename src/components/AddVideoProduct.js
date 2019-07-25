import React, { Component } from 'react';
import './AddVideoProduct.css';

export default class AddVideoProduct extends Component {
  addVideoProduct = e => {
    e.preventDefault();

    window.db.collection(e.target[0].value).add({
      description: e.target[3].value,
      name: e.target[1].value,
      posterUrl: e.target[4].value,
      year: e.target[2].value,
      rating: e.target[5].value
    }).then(() => {
      alert('Video product successfully added');
    }).catch(e => {
      alert('Error:', e);
    });

    e.target[3].value ='';
    e.target[1].value ='';
    e.target[4].value ='';
    e.target[2].value ='';
    e.target[5].value ='';
  };

  render() {
    return (
      <div className='add-video-product__page' onSubmit={this.addVideoProduct}>
        <form className='add-video-product__form'>
          <h3 className='add-video-product__title'>Enter video product details</h3>
          <label className='label__video-product_type' htmlFor='select__video-product_type'>Select the type of video product</label>
          <select id='select__video-product_type'>
            <option value='movies'>Movie</option>
            <option value='serials'>Serial</option>
          </select>
          <label className='label__video-product_name' htmlFor='input__video-product_name'>Video product name</label>
          <input type='text' id='input__video-product_name'></input>
          <label className='label__video-product__year' htmlFor='input__video-product__year'>Video product release year</label>
          <input type='number' id='input__video-product__year'></input>
          <label className='label__video-product_description' htmlFor='textarea__video-product_description'>Video product description</label>
          <textarea id='textarea__video-product_description' cols="48" rows="7"></textarea>
          <label className='label__video-product_poster-url' htmlFor='input__video-product_poster-url'>Enter video product poster URL</label>
          <input type='text' id='input__video-product_poster-url'></input>
          <label className='label__video-product_rating' htmlFor='input__video-product_rating'>Enter video product rating</label>
          <input type='number' id='input__video-product_rating'></input>
          <button className='add-video-product__form_button' type='submit'>Add</button>
        </form>
      </div>
    );
  };
};