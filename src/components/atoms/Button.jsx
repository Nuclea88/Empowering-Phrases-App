// src/components/atoms/Button.jsx

import React from 'react';

// Se debe incluir {...rest} para asegurar que todas las props funcionen
const Button = ({ children, onClick, type = 'button', className = '', ...rest }) => {
    
    // 1. Definimos las clases base
    const baseClasses = 'px-4 py-2 font-semibold rounded transition duration-200';
    
    // 2. Definimos el estilo primario por defecto (azul)
    const defaultStyle = 'bg-[#007BFF] text-white hover:bg-[#0056b3]';
    
    // 3. CLAVE: Determinamos qué estilo aplicar. 
    // Si className (el estilo verde) existe, usamos className. Si no, usamos el estilo primario por defecto.
    const specificStyle = className ? className : defaultStyle;

    // 4. Combinamos las clases base con el estilo final
    const allClasses = `${baseClasses} ${specificStyle}`;

    return (
        <button
            type={type}
            onClick={onClick}
            className={allClasses}
            {...rest} // Siempre pasa las props restantes
        >
            {children}
        </button>
    );
};

export default Button;