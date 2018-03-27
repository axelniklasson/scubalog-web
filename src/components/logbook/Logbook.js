import React, { Component } from 'react';
import LogbookItem from 'components/logbook/LogbookItem';

export default class Logbook extends Component {
  render() {
    return (
      <div className="logbook">
        {this.props.dives.map(dive => (
          <LogbookItem key={dive._id} dive={dive} />
        ))}
      </div>
    );
  }
}
