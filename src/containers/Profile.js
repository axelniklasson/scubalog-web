import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.user
});

class Profile extends Component {
  render() {
    const { user } = this.props;
    console.log(user);

    return (
      <div>
        <h1>Profile</h1>
        <p>{user.name}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Profile);
