import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import Login from '../containers/Login';
import Home from '../containers/Home';
import DiveLog from '../containers/DiveLog';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = state => ({
  authed: state.user.authenticated
});

const Routes = ({ authed }) => (
  <div>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/divelog" component={DiveLog} />
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default withRouter(connect(mapStateToProps)(Routes));
