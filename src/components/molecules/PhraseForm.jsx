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
    onAdd({ phrase, author, image });
    setPhrase('');
    setAuthor('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-6">
      <Input value={phrase} onChange={(e) => setPhrase(e.target.value)} placeholder="Escribe una frase..." />
      <Input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Autor (opcional)" />
      <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="URL de imagen (opcional)" />
      <Button type="submit">Añadir frase</Button>
    </form>
  );
};

export default PhraseForm;
