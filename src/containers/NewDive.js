import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';

import '../styles/components/_newdive.scss';

const mapStateToProps = state => ({
  user: state.user
});

class NewDive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.user.diveCount + 1,
      date: this.parseDate(new Date()),
      buddy: null,
      weight: '',
      maxDepth: '',
      avgDepth: '',
      temperature: '',
      minutes: '',
      site: '',
      notes: '',
      startBar: '',
      endBar: ''
    };
  }

  parseDate(date) {
    let local = new Date(date);
    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return local.toJSON().slice(0,10);
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    if (!name || !value) { return; }

    this.setState({ 
      [name]: !isNaN(value) ? parseInt(value, 10) : value
     });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { ...state } = this.state;

    return (
      <div className="newDive">
        <h1>Log new dive</h1>

        <form onSubmit={this.handleSubmit}>
          <Input 
            type="number" 
            label="Count" 
            name="count" 
            value={state.count} 
            onChange={this.handleChange}
          />

          <Input 
            type="date" 
            label="Date" 
            name="date" 
            value={state.date} 
            onChange={this.handleChange} 
          />

          <Input 
            type="text" 
            label="Dive site" 
            name="site" 
            value={state.site} 
            onChange={this.handleChange}
            placeholder="Ön, Limhamn"
          />

          <Input 
            type="number" 
            label="Minutes" 
            name="minutes" 
            value={state.minutes} 
            onChange={this.handleChange}
            placeholder="45"
          />

          <Input 
            type="number" 
            label="Temperature (°C)" 
            name="temperature" 
            value={state.temperature} 
            onChange={this.handleChange}
            placeholder="16"
          />

          <Input 
            type="number" 
            label="Weight (kg)" 
            name="weight" 
            value={state.weight} 
            onChange={this.handleChange}
            placeholder="4"
          />

          <Input 
            type="number" 
            label="Start pressure (bar)" 
            name="startBar" 
            value={state.startBar} 
            onChange={this.handleChange}
            placeholder="200"
          />

          <Input 
            type="text" 
            label="End pressure (bar)" 
            name="endBar" 
            value={state.endBar} 
            onChange={this.handleChange}
            placeholder="50"
          />

          <Button type="submit" isLoading={true} text="Log dive" />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NewDive);
