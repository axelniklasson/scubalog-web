import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import Login from '../containers/Login';
import Home from '../containers/Home';
import DiveLog from '../containers/DiveLog';
import NewDive from '../containers/NewDive';
import Profile from '../containers/Profile';

const mapStateToProps = state => ({
  authed: state.user.authenticated
});

const Routes = ({ authed }) => (
  <div>
    <Switch>
      <Route path="/login" component={Login} />

      <Route exact path="/" component={Home} />
      <Route exact path="/divelog" component={DiveLog} />
      <Route path="/divelog/add" component={NewDive} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </div>
);

export default withRouter(connect(mapStateToProps)(Routes));
