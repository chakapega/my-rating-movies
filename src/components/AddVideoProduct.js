import React, { Component } from 'react';
import './AddVideoProduct.css';

export default class AddVideoProduct extends Component {
  render() {
    return (
      <div className='add-video-product__page'>
        <form className='add-video-product__form'>
          <h3 className='add-video-product__title'>Enter video product details</h3>
          <label className='label__video-product_type' htmlFor='select__video-product_type'>Select the type of video product</label>
          <select id='select__video-product_type'>
            <option value='movies'>Movie</option>
            <option value='serials'>Serial</option>
          </select>
          <label className='label__video-product_name' htmlFor='input__video-product_name'>Movie name</label>
          <input type='text' id='input__video-product_name'></input>
          <label className='label__video-product__year' htmlFor='input__video-product__year'>Movie release year</label>
          <input type='number' id='input__video-product__year'></input>
          <label className='label__video-product_description' htmlFor='textarea__video-product_description'>Movie description</label>
          <textarea id='textarea__video-product_description' cols="50" rows="8"></textarea>
          <label className='label__video-product_poster-url' htmlFor='input__video-product_poster-url'>Enter movie poster URL</label>
          <input type='text' id='input__video-product_poster-url'></input>
          <button className='add-video-product__form_button' type='submit'>Add</button>
        </form>
      </div>
    );
  };
};