import React from 'react';
import "./Button.css"

// Se debe incluir {...rest} para asegurar que todas las props funcionen
const Button = ({ children, onClick, type = 'button', className = '', ...rest }) => {
    
    // 1. Definimos las clases base manteniendo solo el estilo estructural y de transición
    const baseClasses = 'px-4 py-2 font-semibold rounded transition duration-200';
    
    // 2. Eliminamos el defaultStyle para que el color sea OBLIGATORIO por className.
    // Si className no existe, el botón tendrá un aspecto muy simple, sin color.
        // 3. CLAVE: Determinamos qué estilo aplicar. 
    const specificStyle = className;

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