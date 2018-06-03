import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import '../styles/components/_loginpage.scss';

class LoginPage extends Component {
  render() {
    return (
      <div className="loginPage">
        <h2>Sign in to ScubaLog</h2>
        {/*<label htmlFor="username">Username</label>
        <input id="username" placeholder="johndoe" type="text" /> 
        <label htmlFor="password">Password</label>
        <input placeholder="Password" id="password" type="password" /> */}

        <FacebookLogin
          appId="1599673090056954"
          autoLoad
          callback={res => console.log(res)}
          render={renderProps => (
            <button onClick={renderProps.onClick}>Log in using Facebook</button>
          )}
        />
      </div> 
    );
  }
}

export default LoginPage;
