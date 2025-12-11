// src/components/organisms/PhraseForm.jsx

import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const PhraseForm = ({ onAdd }) => {
  const [phrase, setPhrase] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phrase.trim()) return;

    // Envía los datos al componente padre (App.jsx)
    onAdd({ text: phrase, author, image });

    // Resetea el formulario
    setPhrase('');
    setAuthor('');
    setImage('');
  };

  return (
    // Aplicamos estilos de card al formulario
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4 mb-6">
      <h2 className="text-xl font-semibold mb-2">Añadir Nueva Frase</h2>

      <div>
        <label htmlFor="input-phrase" className="block text-sm font-medium text-gray-700 mb-1">
          Frase de Empoderamiento
        </label>
        <Input
          id="input-phrase"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          placeholder="Escribe una frase..."
          required
          // Estilo para hacerlo más alto
          className="h-20 resize-none"
        />
      </div>

      <div>
        <label htmlFor="input-author" className="block text-sm font-medium text-gray-700 mb-1">
          Autor
        </label>
        <Input
          id="input-author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Autor (opcional)"
        />
      </div>

      <div>
        <label htmlFor="input-image" className="block text-sm font-medium text-gray-700 mb-1">
          URL de Imagen
        </label>
        <Input
          id="input-image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="URL de imagen (opcional)"
        />
      </div>

      <div className="flex justify-end pt-2">
        <Button
          type="submit"
          // Aplicamos el estilo de color Success definido: Verde para Guardar
          className="bg-[#2ECC71] text-white hover:bg-[#27ae60] transition duration-200"
        >
          Añadir frase
        </Button>
      </div>
    </form>
  );
};

export default PhraseForm;