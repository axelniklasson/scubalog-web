import React from 'react';

export default ({ label, name, value, onChange, ...rest }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...rest} name={name} value={value} onChange={onChange} />
    </div>
);