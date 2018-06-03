import React, { Component } from 'react';

import LoginPage from './components/LoginPage';

import './styles/_main.scss'

class App extends Component {
  render() {
    return (
      <div className="app">
        <LoginPage />
      </div>
    );
  }
}

export default App;
