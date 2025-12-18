import React from 'react';
import './Input.css';

const Input = ({ className = '', ...rest }) => {
    const allClasses = `custom-input ${className}`;

    return (
        <input
            {...rest}
            className={allClasses}
        />
    );
};

export default Input;