import React from 'react';
import "./Button.css"

const Button = ({ children, onClick, type = 'button', className = '', ...rest }) => {
    
    // 1. Clases base (estructura)
    const baseClasses = 'px-4 py-2 font-semibold rounded transition duration-200';
    
    // 2. Lógica de estilos: 
    const defaultStyle = 'bg-[#8C5A66] text-white hover:bg-[#734651]';
    
    // Si className está vacío, usamos el default. Si no, usamos el className proporcionado.
    const finalStyle = className.trim() === '' ? defaultStyle : className;

    const allClasses = `${baseClasses} ${finalStyle}`;

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