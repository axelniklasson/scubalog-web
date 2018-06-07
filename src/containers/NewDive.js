import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.user
});

class NewDive extends Component {
  render() {
    return (
      <div>
        <h1>New dive</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NewDive);
