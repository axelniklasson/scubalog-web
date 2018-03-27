import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  toggleDrawer = () => {
    let { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    return (
      <div>
        <AppBar 
          title="Scubalog"
          onLeftIconButtonClick={this.toggleDrawer}
        />

        <Drawer 
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <MenuItem
            onClick={this.toggleDrawer}>
            <Link to="/">Start</Link>
          </MenuItem>

          <MenuItem
            onClick={this.toggleDrawer}>
            <Link to="/login">Log in</Link>
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}
