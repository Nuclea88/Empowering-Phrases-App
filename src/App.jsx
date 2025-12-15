import React, { useState, useEffect } from 'react';
import './App.css';
import phrasesArray from './data/PhrasesArray';
import AppLayout from './components/templates/AppLayout';
import PhraseForm from './components/organisms/PhraseForm';
import PhraseList from './components/organisms/PhraseList';
import deletePhrase from './utils/DeletePhrase';
import updatePhrase from './utils/UpdatePhrase';
import createPhrase from './utils/CreatePhrase';
function App() {
  const [phrases, setPhrases] = useState(() => {
    const saved = localStorage.getItem('phrases');
    return saved ? JSON.parse(saved) : phrasesArray;
  });
  useEffect(() => {
    localStorage.setItem('phrases', JSON.stringify(phrases));
  }, [phrases]);
  
  const handleAddPhrase = (newPhrase) => {
    const newPhrases = createPhrase(newPhrase, phrases);
    setPhrases(newPhrases);
  };
  const handleUpdatePhrase = (updated) => {
    const newPhrases = updatePhrase(updated, phrases);
    setPhrases(newPhrases);
  };
  const handleDeletePhrase = (id) => {
    const newPhrases = deletePhrase(id, phrases);
    setPhrases(newPhrases);
  };
  return (
    <AppLayout>
      {/* :rotating_light: CONEXIÓN DE PROPS: Usar las funciones internas */}
      <PhraseForm onSubmit={handleAddPhrase} />
      <PhraseList
        phrases={phrases}
        onUpdate={handleUpdatePhrase}
        onDelete={handleDeletePhrase}
      />
    </AppLayout>
  );
}
export default App;