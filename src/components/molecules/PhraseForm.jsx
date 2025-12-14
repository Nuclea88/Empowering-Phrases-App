// src/components/organisms/PhraseForm.jsx

// Importar los hooks de React necesarios
import React, { useState } from 'react';
// Importar los átomos de la carpeta components
import Input from '../atoms/Input';
import Button from '../atoms/Button';

// Este componente Organism maneja el estado local para el formulario de adición de frases.
const PhraseForm = ({ onSubmit }) => {
  // Estado local para capturar los valores de los inputs (phrase, author, image)
  const [form, setForm] = useState({ phrase: '', author: '', image: '' });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación simple: la frase no puede estar vacía
    if (!form.phrase.trim()) return;
    onSubmit(form);
    setForm({ phrase: '', author: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="phrase"
        value={form.phrase}
        onChange={handleChange}
        placeholder="Escribe tu frase"
      />
      <Input
        name="author"
        value={form.author}
        onChange={handleChange}
        placeholder="Autor"
      />
      <Input
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="URL de imagen (opcional)"
      />
      <Button type="submit">Agregar frase</Button>
    </form>
  );
};

export default PhraseForm;



  

