import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import phrasesArray from './data/PhrasesArray';
import AppLayout from './components/templates/AppLayout';
import PhraseForm from './components/organisms/PhraseForm';
import PhraseList from './components/organisms/PhraseList';
import deletePhrase from './utils/DeletePhrase';
import updatePhrase from './utils/UpdatePhrase';
import createPhrase from './utils/CreatePhrase';

const AboutUs = () => (
  <div className="bg-white p-8 rounded-lg shadow-sm">
    <h2 className="text-2xl font-bold text-[#8C5A66] mb-4">About Us</h2>
    <p className="text-gray-600">This application was created to share empowering and motivational phrases..</p>
  </div>
);

function App() {
  const navigate = useNavigate();
  const [phrases, setPhrases] = useState(() => {
    const saved = localStorage.getItem('phrases');
    return saved ? JSON.parse(saved) : phrasesArray;
  });

  const [editingPhrase, setEditingPhrase] = useState(null);

  useEffect(() => {
    localStorage.setItem('phrases', JSON.stringify(phrases));
  }, [phrases]);

  // Lógica de Datos
  const handlePhrase = (phraseForForm) => {
    let newPhrases = phraseForForm.id
      ? updatePhrase(phraseForForm, phrases)
      : createPhrase(phraseForForm, phrases);

    setPhrases(newPhrases);
    setEditingPhrase(null);
    navigate('/'); // Volver a la lista automáticamente
  };

  const handleDeletePhrase = (id) => {
    setPhrases(deletePhrase(id, phrases));
  };

  const startEditing = (phrase) => {
    setEditingPhrase(phrase);
    navigate('/create'); // Vamos al formulario
  };

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={
          <PhraseList phrases={phrases} onUpdate={startEditing} onDelete={handleDeletePhrase} />
        } />

        <Route path="create" element={
          <PhraseForm
            initialData={editingPhrase}
            onSubmit={handlePhrase}
            onCancel={() => { setEditingPhrase(null); navigate('/'); }}
          />
        } />

        <Route path="about" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;