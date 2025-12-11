import { useState, useEffect } from 'react';
import './App.css';
import AppLayout from './AppLayout';
import { initialPhrases } from './phrasesarray';
import { idGenerator } from './idGenerator';
import PhraseList from './components/PhraseList';
import PhraseForm from './components/PhraseForm';

function App() {
  const [phrases, setPhrases] = useState(() => {
    const saved = localStorage.getItem('phrases');
    return saved ? JSON.parse(saved) : initialPhrases;
  });

  useEffect(() => {
    localStorage.setItem('phrases', JSON.stringify(phrases));
  }, [phrases]);

  const addPhrase = (newPhrase) => {
    const phrase = {
      id: idGenerator(phrases),
      phrase: newPhrase.phrase,
      author: newPhrase.author || 'Anónimo',
      image: newPhrase.image || ''
    };
    setPhrases([phrase, ...phrases]);
  };

  const updatePhrase = (id, updated) => {
    setPhrases(
      phrases.map((p) =>
        p.id === id ? { ...p, ...updated } : p
      )
    );
  };

  const deletePhrase = (id) => {
    setPhrases(phrases.filter((p) => p.id !== id));
  };

  return (
    <AppLayout>
      <PhraseForm onAdd={addPhrase} />
      <PhraseList
        phrases={phrases}
        onUpdate={updatePhrase}
        onDelete={deletePhrase}
      />
    </AppLayout>
  );
}

export default App;
