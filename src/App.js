import React, { Component } from 'react';
import { 
  BrowserRouter as Router
} from 'react-router-dom';
import Routes from './routes/Routes';

import './styles/_main.scss'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Routes />
        </div>
      </Router>
    );
  }
}
