import React from 'react';
import Spinner from './Spinner';

export default ({ isLoading, text, ...rest }) => (
    <button {...rest}>
        <span>{text}</span>
        {isLoading && <Spinner styles={{
            width: '15px',            
            height: '15px',
            display: 'inline-block',
            margin: 0,
            marginLeft: '10px'
        }} />}
    </button>
);