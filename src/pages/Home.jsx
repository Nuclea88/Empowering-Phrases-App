import PhraseList from "../components/organisms/PhraseList";
import React, { useState, useEffect } from "react";
import '../App.css';
import PhraseForm from '../components/organisms/PhraseForm';
import deletePhrase from '../utils/DeletePhrase';
import updatePhrase from '../utils/UpdatePhrase';
import phrasesArray from "../data/PhrasesArray";

const VIEW_MODE = {
  LIST: 'list',
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
  const handleUpdatePhrase = (phraseForForm) =>{
   let newPhrases = updatePhrase(phraseForForm, phrases);
    setPhrases(newPhrases);
    handleShowList();
  }
  const handleDeletePhrase = (id) => {
    const newPhrases = deletePhrase(id, phrases);
    setPhrases(newPhrases);
  };
const renderContent = () => {
    if (viewMode === VIEW_MODE.EDIT) {
      return (
        <PhraseForm
          initialData={editingPhrase}
          onSubmit={handleUpdatePhrase}
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