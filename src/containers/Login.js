import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { onFbAuthSuccess, onFbAuthError } from '../actions';

import '../styles/components/_loginpage.scss';

const mapDispatchToProps = dispatch => ({
  onSuccess: payload => dispatch(onFbAuthSuccess(payload)),
  onError: payload => dispatch(onFbAuthError(payload))
});

class Login extends Component { render() {
  const { onSuccess, onError } = this.props;

  return (
    <div className="loginPage">
      <h2>Sign in to ScubaLog</h2>

      <FacebookLogin
        appId="1599673090056954"
        autoLoad={true}
        callback={res => {
          onSuccess(res); 
          this.props.history.push('/')
        }}
        onFailure={err => onError(err)}
        render={renderProps => (
          <button onClick={renderProps.onClick}>Log in using Facebook</button>
        )}
      /> </div> 
  );
}
}

export default connect(null, mapDispatchToProps)(Login);
