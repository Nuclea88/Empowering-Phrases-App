import React, { useState, useEffect } from 'react';
import './App.css';
import phrasesArray from './data/PhrasesArray';
import { idGenerator } from './utils/idGenerator';
import AppLayout from './components/templates/AppLayout';
import PhraseForm from './components/organisms/PhraseForm';
import PhraseList from './components/organisms/PhraseList';
import ButtonNav from './components/atoms/ButtonNav';



function App() {
  const [phrases, setPhrases] = useState(() => {
    const saved = localStorage.getItem('phrases');
    return saved ? JSON.parse(saved) : phrasesArray;
  });
  useEffect(() => {
    localStorage.setItem('phrases', JSON.stringify(phrases));
  }, [phrases]);
  
  const addPhrase = (newPhrase) => {
    const phrase = {
      id: idGenerator(phrases),
      text: newPhrase.text, // Asumiendo que el campo es 'text' en lugar de 'phrase'
      author: newPhrase.author || 'Anónimo',
      image: newPhrase.image || ''
    };
    setPhrases([phrase, ...phrases]);
  };
  const handleUpdatePhrase = (id, updated) => { // Renombrado para evitar conflicto de nombres
    setPhrases(phrases.map((p) => (p.id === id ? { ...p, ...updated } : p)));
  };
  const handleDeletePhrase = (id) => { // Renombrado para evitar conflicto de nombres
    setPhrases(phrases.filter((p) => p.id !== id));
  };
  return (

    <AppLayout>
      {}
        <header>
          <nav>
            <ButtonNav text="Start" home="storagephrase"/>
            <ButtonNav text="Create your Phrase"/>
            <ButtonNav text="About Us"/> 

          </nav>
        </header>
        
          <PhraseForm onSubmit={addPhrase} />
          <PhraseList
            phrases={phrases}
            onUpdate={handleUpdatePhrase}
            onDelete={handleDeletePhrase}
      
      />
    </AppLayout>

  );
}
export default App;