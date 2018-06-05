import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDiveLog } from '../actions';
import axios from 'axios';

const mapStateToProps = state => ({
  user: state.user,
  dives: state.dives
});

class DiveLog extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDiveLog());
  }

  render() {
    const { isFetching, data } = this.props.dives;

    if (isFetching) { 
      return <p>Loading dive log..</p>;
    }

    return (
      <div>
        {isFetching &&
          <p>Loading </p>
        }

        {data.map(dive => (
          <p>Dive item </p> 
        ))}
      </div>
    ); 
  }
}

export default connect(mapStateToProps)(DiveLog);
