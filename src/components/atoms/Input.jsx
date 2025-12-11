// src/components/atoms/Input.jsx

import React from 'react';

const Input = ({ className = '', ...rest }) => {
    
    // 🚨 AÑADIR CLASE PARA EL COLOR DE TEXTO: text-gray-800
    const baseClasses = 'w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#007BFF] text-gray-800';
    
    const allClasses = `${baseClasses} ${className}`;

    return (
        <input
            {...rest}
            className={allClasses}
        />
    );
};

export default Input;