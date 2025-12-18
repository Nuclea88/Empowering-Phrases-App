import React from 'react';
import "./Button.css"

const Button = ({ children, onClick, type = 'button', className = '', ...rest }) => {
    
    const baseClasses = 'px-4 py-2 font-semibold rounded transition duration-200';
    const specificStyle = className;
    const allClasses = `${baseClasses} ${specificStyle}`;

    return (
        <button
            type={type}
            onClick={onClick}
            className={allClasses}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;