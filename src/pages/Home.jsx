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
   setEditingPhrase(null); // Limpiamos la frase de edición
  setViewMode(VIEW_MODE.LIST);
  };
  const startEditing = (phrase) => {
   setEditingPhrase(phrase); // Cargamos la frase
    setViewMode(VIEW_MODE.EDIT); // Cambiamos la vista a EDITAR
  };
  const handlePhrase = (phraseForForm) =>{
   let newPhrases = [];
     if (phraseForForm.id ){
        newPhrases = updatePhrase(phraseForForm, phrases);
      } else{
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
    // MODO CREAR o EDITAR: Renderiza el formulario
    if (viewMode === VIEW_MODE.CREATE || viewMode === VIEW_MODE.EDIT) {
      // La clave es que en modo CREAR, initialData es null.
      // En modo EDITAR, initialData es editingPhrase (con ID).
      const initialDataForForm = viewMode === VIEW_MODE.EDIT ? editingPhrase : null;
      return (
        <PhraseForm
          // Ya que el componente se monta/desmonta, el estado se reinicializa correctamente
          initialData={initialDataForForm}
          onSubmit={handlePhrase}
          onCancel={handleShowList} // Al cancelar, volvemos a la lista
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










