import React from 'react';

// El componente Input recibe props para controlar su valor y estado.
const Input = ({ type = 'text', value, onChange, placeholder, className = '' }) => {

    // Estilos CSS básicos para el input.
    const baseClasses = 'w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#007BFF]';

    // Combinamos las clases base y cualquier clase adicional.
    const allClasses = `${baseClasses} ${className}`;

    return (
        <input
            type={type}
            value={value}             // Valor controlado por el componente padre (el Formulario)
            onChange={onChange}       // Función para actualizar el valor en el padre
            placeholder={placeholder} // Texto que se muestra cuando está vacío
            className={allClasses}
        />
    );
};

export default Input;