import PhraseList from "../components/organisms/PhraseList";
import React, { useState, useEffect } from "react";
import '../App.css';
import AppLayout from '../components/templates/AppLayout';
import PhraseForm from '../components/organisms/PhraseForm';
import deletePhrase from '../utils/DeletePhrase';
import updatePhrase from '../utils/UpdatePhrase';
import createPhrase from '../utils/CreatePhrase'
import phrasesArray from "../data/PhrasesArray";

const VIEW_MODE = {
  LIST: 'list',
  CREATE: 'create',
  EDIT: 'edit',
};
const Home = () => {
  const [phrases, setPhrases] = useState(() => {
    const saved = localStorage.getItem('phrases');
    return saved ? JSON.parse(saved) : phrasesArray;
  });
  const [viewMode, setViewMode] = useState(VIEW_MODE.LIST)
  const [editingPhrase, setEditingPhrase] = useState(null);
  useEffect(() => {
    localStorage.setItem('phrases', JSON.stringify(phrases));
  }, [phrases]);
  const handleShowList = () => {
    setEditingPhrase(null); 
    setViewMode(VIEW_MODE.LIST);
  };
  const startEditing = (phrase) => {
    setEditingPhrase(phrase); 
    setViewMode(VIEW_MODE.EDIT); 
  };
  const handlePhrase = (phraseForForm) => {
    let newPhrases = [];
    if (phraseForForm.id) {
      newPhrases = updatePhrase(phraseForForm, phrases);
    } else {
      newPhrases = createPhrase(phraseForForm, phrases);
    }
    setPhrases(newPhrases);
    handleShowList();
  }
  const handleDeletePhrase = (id) => {
    const newPhrases = deletePhrase(id, phrases);
    setPhrases(newPhrases);
  };
  const renderContent = () => {
    if (viewMode === VIEW_MODE.CREATE || viewMode === VIEW_MODE.EDIT) {
      const initialDataForForm = viewMode === VIEW_MODE.EDIT ? editingPhrase : null;
      return (
        <PhraseForm
          initialData={initialDataForForm}
          onSubmit={handlePhrase}
          onCancel={handleShowList}
        />
      );
    }
    return (
      <>
        <PhraseList
          phrases={phrases}
          onUpdate={startEditing}
          onDelete={handleDeletePhrase}
        />
      </>
    );
  };
  return (
    <>
      {renderContent()}
    </>
  );
};
export default Home









