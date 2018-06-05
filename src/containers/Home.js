import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.user
});

class Home extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <p>{`Hello and welcome, ${user.name}`}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
