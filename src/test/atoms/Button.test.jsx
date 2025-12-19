import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { expect, vi, describe, test, afterEach } from 'vitest';
import Button from '../../components/atoms/Button';
import React from 'react';

describe('Button', () => {

  afterEach(() => {
    cleanup();
  });

  test('should render the button with the correct children text', () => {
    render(<Button>Submit Form</Button>);
    const buttonElement = screen.getByText(/Submit Form/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should apply default primary style when no className is provided', () => {
    render(<Button>Default</Button>);
    const buttonElement = screen.getByText(/Default/i);

    expect(buttonElement).toHaveClass('px-4', 'py-2', 'font-semibold');

    expect(buttonElement).toHaveClass('bg-[#8C5A66]');
    expect(buttonElement).toHaveClass('text-white');
  });

  test('should apply custom classes and ignore default style when className is provided', () => {
    const customClass = 'bg-[#2ECC71] text-black';

    render(<Button className={customClass}>Success</Button>);
    const buttonElement = screen.getByText(/Success/i);

    expect(buttonElement).toHaveClass('bg-[#2ECC71]');
    expect(buttonElement).toHaveClass('text-black');
    expect(buttonElement).not.toHaveClass('bg-[#8C5A66]');
  });

  test('should call onClick handler when the button is clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);

    fireEvent.click(screen.getByText(/Clickable/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('should have type="button" by default and respect custom type', () => {
    const { rerender } = render(<Button>Type Test</Button>);
    expect(screen.getByText(/Type Test/i)).toHaveAttribute('type', 'button');
    rerender(<Button type="submit">Type Test</Button>);
    expect(screen.getByText(/Type Test/i)).toHaveAttribute('type', 'submit');
  });

  test('should pass through additional props like data-testid', () => {
    render(<Button data-testid="test-button">Data Prop</Button>);
    expect(screen.getByTestId('test-button')).toBeInTheDocument();
  });
});