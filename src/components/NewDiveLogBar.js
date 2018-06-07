import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/_divelogbar.scss';

export default () => (
    <div className="diveLogBar">
        <Link to="/divelog/add">
            <span>Log new dive</span>
        </Link>
    </div>
);