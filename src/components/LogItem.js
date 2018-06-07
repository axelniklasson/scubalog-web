import React, { Component } from 'react';
import moment from 'moment';

import FallbackImage from '../img/logitemFallback.jpg';
import '../styles/components/_logitem.scss';

export default class LogItem extends Component {
  constructor(props) {
    super(props); 

    this.state = { expanded: false };
  }

  toggleExpand = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded 
    })); 
  }

  render() {
    const { dive } = this.props;

    return (
      <li 
        className="logItem"
        onClick={this.toggleExpand}>
        <div className="header">
          <img alt="Dive" src={dive.picture
            ? dive.picture
            : FallbackImage} />
          <div className="gradient">
            <span>{`Dive #${dive.count}`}</span> 
            <span>{`${moment(dive.date).fromNow()}`}</span>
          </div>
        </div>
        <div className="main">
          <p>{`${dive.minutes} min at ${dive.site}`}</p>

          {dive.buddy && 
            <div className="buddy">
              <img alt="Buddy" src={dive.buddy.picture} />
              <span>{dive.buddy.name}</span>
            </div>
          }

          {!dive.buddy && <p>No buddy tagged in dive.</p>}

          {this.state.expanded && 
            <div className="extra">
            <q>{dive.notes}</q> 
            </div> 
          }
        </div>
      </li>
    );
  }
}
