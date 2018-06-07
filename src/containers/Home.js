import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewDiveLogBar from '../components/NewDiveLogBar';

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

        <NewDiveLogBar />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
