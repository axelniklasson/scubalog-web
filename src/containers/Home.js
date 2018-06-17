import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewDiveLogBar from '../components/NewDiveLogBar';
import Feed from '../components/Feed';

const mapStateToProps = state => ({
  user: state.user
});

class Home extends Component {
  render() {
    const { user } = this.props;

    return (
      <div style={{ paddingBottom: '100px' }}>
        <h1>Home</h1>
        <p>{`Hello and welcome, ${user.name}`}</p>

        <Feed />
        <NewDiveLogBar />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
