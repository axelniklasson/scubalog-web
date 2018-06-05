import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDiveLog } from '../actions';
import LogItem from '../components/LogItem';

import '../styles/components/_divelog.scss';

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

    return (
      <div className="diveLog">
        <h1>Dive log</h1>

        {isFetching && <p>Fetching dive log..</p>}

        <ul>
          {!isFetching && data.map(dive => (
              <LogItem dive={dive} />
          ))}
        </ul>
      </div>
    ); 
  }
}

export default connect(mapStateToProps)(DiveLog);
