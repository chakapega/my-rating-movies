import React, { Component } from 'react';
import Serials from './Serials';
import PosterFullSize from './PosterFullSize';
import Loader from './Loader';
import './SerialsPage.css';

export default class SerialsPage extends Component {
  state = {
    serials: [],
    isOpenPosterFullSize: false,
    posterFullSizeUrl: ''
  };

  componentDidMount() {
    const serials = [];

    window.db.collection('serials').get()
      .then(querySnapshot => {
        querySnapshot.forEach(serial => {
          const newSerial = serial.data();
          newSerial.id = serial.id;

          serials.push(newSerial);
        });
        this.setState({serials: serials});
      });
  };

  openPosterFullSize = e => {
    const { isOpenPosterFullSize } = this.state;

    this.setState({
      isOpenPosterFullSize: !isOpenPosterFullSize,
      posterFullSizeUrl: e.target.src
    });
  };

  render() {
    const { serials, isOpenPosterFullSize, posterFullSizeUrl } = this.state;
    const posterFullSize = isOpenPosterFullSize && <PosterFullSize openPosterFullSize={this.openPosterFullSize} posterFullSizeUrl={posterFullSizeUrl} />

    return (
      <div className='serials__page'>
        {posterFullSize}
        {serials.length ? <Serials openPosterFullSize={this.openPosterFullSize} serials={serials} /> : <Loader />}
      </div>
    );
  };
};