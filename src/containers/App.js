import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import StartPage from 'containers/StartPage';
import LoginPage from 'containers/LoginPage';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route path="/" component={StartPage} />
        </Switch>

        <Footer />
      </div>
    );
  }
}
