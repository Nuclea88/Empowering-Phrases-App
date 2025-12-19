
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
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

  const handlePhrase = (phraseForForm) => {
    let newPhrases = [];
    if (phraseForForm.id) {
      newPhrases = updatePhrase(phraseForForm, phrases);
    } else {
      newPhrases = createPhrase(phraseForForm, phrases);
    }
    setPhrases(newPhrases);

    navigate("/");
  };

  return <PhraseForm onSubmit={handlePhrase} />;
};

export default Create;
