import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
    // Definimos las clases CSS base y permitimos que se añadan clases externas.
    const baseClasses = 'px-4 py-2 font-semibold rounded transition duration-200';
    // Clase de estilo primario por defecto (usando nuestro color de marca)
    const primaryStyle = 'bg-[#007BFF] text-white hover:bg-[#0056b3]';
    // Combinamos las clases base, el estilo primario y cualquier clase adicional
    const allClasses = `${baseClasses} ${primaryStyle} ${className}`;

    return (
        <button
            type={type}
            onClick={onClick}
            className={allClasses}>
            {children} {/* El contenido del botón (ej. el texto "Añadir") */}
        </button>
    );
};

export default Button;