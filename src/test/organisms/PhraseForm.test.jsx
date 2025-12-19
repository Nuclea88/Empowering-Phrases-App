import { render, screen, fireEvent } from '@testing-library/react';
import { expect, vi, describe, test, afterEach } from 'vitest';
import React from 'react';
import PhraseForm from '../../components/organisms/PhraseForm';

const mockOnSubmit = vi.fn();

describe('PhraseForm', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should render all input fields and the submit button', () => {
        render(<PhraseForm onSubmit={mockOnSubmit} />);

        expect(screen.getByLabelText(/Empowerment Phrase/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Author/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Image URL/i)).toBeInTheDocument();
        
        const buttonElement = screen.getByRole('button', { name: /Add Phrase/i });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveAttribute('type', 'submit');
    });

    test('should call onSubmit with the correct data and clear fields after successful submit', () => {
        render(<PhraseForm onSubmit={mockOnSubmit} />);

        const phraseInput = screen.getByLabelText(/Empowerment Phrase/i);
        const authorInput = screen.getByLabelText(/Author/i);
        const submitButton = screen.getByRole('button', { name: /Add Phrase/i });

        const testPhrase = 'La persistencia vence la resistencia.';
        const testAuthor = 'Anónimo';

        fireEvent.change(phraseInput, { target: { value: testPhrase } });
        fireEvent.change(authorInput, { target: { value: testAuthor } });
        fireEvent.click(submitButton);

        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
        expect(mockOnSubmit).toHaveBeenCalledWith({
            phrase: testPhrase,
            author: testAuthor,
            image: '' 
        });

        // Verificamos el reset
        expect(phraseInput.value).toBe('');
        expect(authorInput.value).toBe('');
    });

    test('should NOT call onSubmit if the Empowerment Phrase input field is empty or spaces', () => {
        render(<PhraseForm onSubmit={mockOnSubmit} />);
        const phraseInput = screen.getByLabelText(/Empowerment Phrase/i);
        const submitButton = screen.getByRole('button', { name: /Add Phrase/i });

        fireEvent.change(phraseInput, { target: { value: '   ' } }); 
        fireEvent.click(submitButton);

        expect(mockOnSubmit).not.toHaveBeenCalled();
    });
});