import React, { Component } from 'react';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import MoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import LessIcon from 'material-ui/svg-icons/navigation/expand-less';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

export default class LogbookItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }
toggleExpanded = () => {
    let { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }

  render() {
    const { dive } = this.props;

    return (
      <div className="logbook-item">
        <div className="top">
          <h1 className="dive-count">Dive #{dive.count}</h1>
          <RaisedButton
            primary={true}
            icon={<EditIcon />}
          />
        </div>

        <div className="row">
          <div className="dive-date">
            <i className="material-icons">event</i>
            {moment(dive.date).format("MMM D YYYY")}
          </div>
        </div>

        <div className="row">
          <div className="dive-site">
            <i className="material-icons">location_on</i>
            {dive.site}
          </div>
          <div className="dive-time">
            <i className="material-icons">timer</i>
            {dive.minutes} minutes
          </div>
        </div>

        <div className="row">
          <div className="dive-time">
            <i className="material-icons">arrow_downward</i>
            {dive.maxDepth} m
          </div>
          <div className="dive-temperature">
            <i className="material-icons">pool</i>
            {dive.temperature} °C
          </div>
        </div>
        <RaisedButton
          primary={true}
          onClick={this.toggleExpanded}
          label="Notes"
          icon={this.state.expanded ? <LessIcon /> : <MoreIcon />}
        />

        {this.state.expanded && 
          <div className="more">
            <p className="dive-notes">{dive.notes}</p>
          </div>
        }
      </div>
    );
  }
}
