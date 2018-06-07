import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import Navbar from './components/Navbar';

import './styles/_main.scss'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Routes />
        </div>
      </Router>
    );
  }
}
