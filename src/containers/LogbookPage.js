import React, { Component } from 'react';
import axios from 'axios';
import Logbook from 'components/logbook/Logbook';

export default class LogbookPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dives: [] 
    };
  }

  fetchData() {
    axios.get(process.env.REACT_APP_API_URL + '/dives?diverID=596f4b5c9764c1cd908c6d47')
      .then(res => {
        this.setState({ dives: res.data });
      }).catch(err => {
        console.log(err); 
      });
  }

  componentDidMount() {
    this.fetchData(); 
  }

  render() {
    return (
      <div>
        <h1>LogbookPage</h1>

        <Logbook dives={this.state.dives} />
      </div>
    );
  }
}
