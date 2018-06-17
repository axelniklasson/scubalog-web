import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDiveLog } from '../actions';
import LogItem from '../components/LogItem';
import NewDiveLogBar from '../components/NewDiveLogBar';
import Spinner from '../components/Spinner';

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
      <div className="diveLog" style={{ paddingBottom: '100px' }}>
        <h1>Dive log</h1>

        {isFetching && <Spinner />}

        {(!isFetching && data.length > 0) && (
          <ul>
            {data.map(dive => (
                <LogItem key={dive._id} dive={dive} />
            ))}
          </ul>
        )}

        <NewDiveLogBar />
      </div>
    ); 
  }
}

export default connect(mapStateToProps)(DiveLog);
