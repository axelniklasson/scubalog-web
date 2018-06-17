import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';

import '../styles/components/_navbar.scss';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownVisible: false
        };
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            dropdownVisible: !prevState.dropdownVisible 
        })); 
    }

    render() {
        const { dropdownVisible } = this.state;

        return (
            <div className={dropdownVisible ? 'navbar visible' : 'navbar'}>
                <div className="wrapper">
                    <Link to="/">ScubaLog</Link>
                    <div 
                        className={dropdownVisible ? 'menuIcon toggled' : 'menuIcon'}
                        onClick={this.toggleDropdown}
                    >
                        <div /> 
                        <div /> 
                        <div /> 
                    </div>
                </div>

                <div className="dropdown">
                    <ul>
                        <li>
                            <NavLink exact to="/" onClick={this.toggleDropdown}>Home</NavLink>
                        </li>

                        <li>
                            <NavLink exact to="/divelog" onClick={this.toggleDropdown}>Dive log</NavLink>
                        </li>

                        <li>
                            <NavLink to="/divelog/add" onClick={this.toggleDropdown}>Log new dive</NavLink>
                        </li>

                        <li>
                            <NavLink to="/profile" onClick={this.toggleDropdown}>Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar);
