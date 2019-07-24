import React, { Component } from 'react';
import HomePage from './components/HomePage';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RatingsPage from './components/RatingsPage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path='/' exact component={HomePage} />
        <Route path='/ratings' exact component={RatingsPage} />
      </Router>
    );
  };;
};

