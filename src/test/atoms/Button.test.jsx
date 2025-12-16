import { render, screen, fireEvent } from '@testing-library/react';
import { expect, vi, describe, test } from 'vitest'; 
import Button from '../../components/atoms/Button'; 
import React from 'react'; 

// Estilos de referencia del componente (solo para documentación en el test, no se usan en las aserciones)
const DEFAULT_CLASS = 'bg-[#8C5A66] text-white hover:bg-[#734651]';
const BASE_CLASSES = 'px-4 py-2 font-semibold rounded transition duration-200';

describe('Button', () => {

  // Test 1: Renderizado y contenido básico
  test('should render the button with the correct children text', () => {
    // 1. Renderizar el componente
    render(<Button>Submit Form</Button>);
    
    // 2. Buscar el elemento por su texto
    const buttonElement = screen.getByText(/Submit Form/i);
    
    // 3. Aseverar que está en el documento
    expect(buttonElement).toBeInTheDocument();
  });

  // Test 2: Aplicación del estilo por defecto cuando NO se pasa className
  test('should apply default primary style when no className is provided', () => {
    render(<Button>Default</Button>);
    const buttonElement = screen.getByText(/Default/i);

    // Debe contener las clases base (que son parte de 'allClasses')
    expect(buttonElement).toHaveClass('px-4', 'py-2');
    
    // Debe contener las clases del estilo por defecto
    expect(buttonElement).toHaveClass('bg-[#8C5A66]');
    expect(buttonElement).toHaveClass('text-white');
  });

  // Test 3: Aplicación de clases personalizadas (SOBRESCRIBE el estilo por defecto)
  test('should apply custom classes and ignore default style when className is provided', () => {
    // Este es el caso del botón 'Add Phrase' (verde)
    const customClass = 'bg-[#2ECC71] text-black hover:bg-[#27ae60]';
    
    render(<Button className={customClass}>Success</Button>);
    const buttonElement = screen.getByText(/Success/i);

    // 1. Debe tener la clase personalizada (verde)
    expect(buttonElement).toHaveClass('bg-[#2ECC71]');
    
    // 2. NO debe tener la clase de fondo por defecto
    expect(buttonElement).not.toHaveClass('bg-[#8C5A66]'); 
    
    // 3. Debe mantener las clases base como 'px-4'
    expect(buttonElement).toHaveClass('px-4'); 
  });
  
  // Test 4: Manejo del evento click
  test('should call onClick handler when the button is clicked', () => {
    // Creamos un mock function para espiar la función
    const handleClick = vi.fn();
    
    render(<Button onClick={handleClick}>Clickable</Button>);
    const buttonElement = screen.getByText(/Clickable/i);

    // Simulamos el click
    fireEvent.click(buttonElement);
    
    // Aseveramos que la función fue llamada
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  // Test 5: Tipo de botón por defecto y personalizado
  test('should have type="button" by default and respect custom type', () => {
    // Comprobamos el tipo por defecto
    const defaultButton = render(<Button>Default Type</Button>);
    expect(defaultButton.getByText(/Default Type/i)).toHaveAttribute('type', 'button');
    
    // Comprobamos el tipo 'submit'
    const submitButton = render(<Button type="submit">Submit Type</Button>);
    expect(submitButton.getByText(/Submit Type/i)).toHaveAttribute('type', 'submit');
  });
  
  // Test 6: Pasar props adicionales (spread operator {...rest})
  test('should pass through additional props like data-testid', () => {
    render(<Button data-testid="test-button">Data Prop</Button>);
    
    // Buscamos el elemento usando el data-testid que pasamos por ...rest
    const buttonElement = screen.getByTestId('test-button');
    
    expect(buttonElement).toBeInTheDocument();
  });
});