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
        <h1>{`Hello and welcome, ${user.fbData.name}`}</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
