import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class LoginPage extends Component {
  logIn = () => {
    console.log('logIn()'); 
  }

  render() {
    return (
      <div>
        <h1>LoginPage</h1>

        <RaisedButton 
          label="Log in"
          onClick={this.logIn}
          primary={true} />
      </div>
    );
  }
}
