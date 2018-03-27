import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import StartPage from 'containers/StartPage';
import LoginPage from 'containers/LoginPage';
import LogbookPage from 'containers/LogbookPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logbook" component={LogbookPage} />
          <Route path="/" component={StartPage} />
        </Switch>

        <Footer />
      </div>
    );
  }
}
