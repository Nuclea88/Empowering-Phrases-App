
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";   // 👈 importar
import PhraseForm from "../components/organisms/PhraseForm";
import phrasesArray from "../data/PhrasesArray";
import updatePhrase from "../utils/UpdatePhrase";
import createPhrase from "../utils/CreatePhrase";

const Create = () => {
  const [phrases, setPhrases] = useState(() => {
    const saved = localStorage.getItem("phrases");
    return saved ? JSON.parse(saved) : phrasesArray;
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("phrases", JSON.stringify(phrases));
  }, [phrases]);

  const handleNewPhrase = (phraseForForm) => {
    let newPhrases = createPhrase(phraseForForm, phrases);
    setPhrases(newPhrases);
    navigate("/");
  };
  return <PhraseForm onSubmit={handleNewPhrase} />;
};

export default Create;
