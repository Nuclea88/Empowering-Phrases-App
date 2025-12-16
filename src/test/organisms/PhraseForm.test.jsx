import { render, screen, fireEvent } from '@testing-library/react';
import { expect, vi, describe, test, afterEach } from 'vitest';
import React from 'react';
import PhraseForm from '../../components/organisms/PhraseForm';

// Simulamos la prop que maneja el envío del formulario. 
const mockOnAdd = vi.fn();

describe('PhraseForm', () => {
    // Limpiamos los mocks después de cada prueba
    afterEach(() => {
        vi.clearAllMocks();
    });

    // Test 1: Renderizado básico de los elementos del formulario
    test('should render all input fields and the submit button', () => {
        render(<PhraseForm onAdd={mockOnAdd} />);

        // 1. Verificar el campo de Empowerment Phrase
        const phraseInput = screen.getByLabelText(/Empowerment Phrase/i);
        expect(phraseInput).toBeInTheDocument();

        // 2. Verificar el campo de Author
        const authorInput = screen.getByLabelText(/Author/i);
        expect(authorInput).toBeInTheDocument();

        // 3. Verificar el campo de Image URL
        const imageInput = screen.getByLabelText(/Image URL/i);
        expect(imageInput).toBeInTheDocument();

        // 4. Verificar el botón de Add Phrase
        const buttonElement = screen.getByRole('button', { name: /Add Phrase/i });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveAttribute('type', 'submit'); // Verifica que sea de tipo submit
    });

    // Test 2: Envío de formulario exitoso con datos válidos
    test('should call onAdd with the correct data and clear fields after successful submit', () => {
        render(<PhraseForm onAdd={mockOnAdd} />);

        const phraseInput = screen.getByLabelText(/Empowerment Phrase/i);
        const authorInput = screen.getByLabelText(/Author/i);
        const submitButton = screen.getByRole('button', { name: /Add Phrase/i });

        const testPhrase = 'La persistencia vence la resistencia.';
        const testAuthor = 'Anónimo';

        // 1. Llenar los campos
        fireEvent.change(phraseInput, { target: { value: testPhrase } });
        fireEvent.change(authorInput, { target: { value: testAuthor } });

        // 2. Simular el envío
        fireEvent.click(submitButton);

        // 3. Verificar que la función mock se llamó
        expect(mockOnAdd).toHaveBeenCalledTimes(1);

        // 4. Verificar que se llamó con la ESTRUCTURA DE DATOS CORRECTA
        expect(mockOnAdd).toHaveBeenCalledWith({
            text: testPhrase,
            author: testAuthor,
            image: '' // La imagen está vacía, tal como se implementó
        });

        // 5. Verificar que el formulario se reseteó
        expect(phraseInput.value).toBe('');
        expect(authorInput.value).toBe('');
    });

    // Test 3: Validación - No debe enviar si el campo de frase está vacío
    test('should NOT call onAdd if the Empowerment Phrase input field is empty', () => {
        render(<PhraseForm onAdd={mockOnAdd} />);
        const phraseInput = screen.getByLabelText(/Empowerment Phrase/i);
        const submitButton = screen.getByRole('button', { name: /Add Phrase/i });

        // Asegurarse de que esté vacío (lo cual es el estado inicial)
        fireEvent.change(phraseInput, { target: { value: '    ' } }); // Intentar enviar solo espacios
        // Intentar enviar
        fireEvent.click(submitButton);

        // Verificar que la función mock NO fue llamada debido a la validación .trim()
        expect(mockOnAdd).not.toHaveBeenCalled();
    });
});