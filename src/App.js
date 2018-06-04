import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './containers/Login';
import Home from './containers/Home';

import './styles/_main.scss'

const mapStateToProps = state => ({
  user: state.user
});

class App extends Component {
  render() {
    const { user } = this.props;

    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute authed={user.authenticated} path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
