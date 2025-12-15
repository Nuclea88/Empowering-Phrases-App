import React, { useState } from 'react';
import Button from '../atoms/Button';

const PhraseCard = ({ phrase, onEditClick, onDeleteClick }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPhrase, setEditedPhrase] = useState(phrase.phrase);
  const [editedAuthor, setEditedAuthor] = useState(phrase.author);

  const handleSave = () => {
    onEditClick({
      phrase: editedPhrase,
      author: editedAuthor,
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      {isEditing ? (
        <>
          <textarea
            value={editedPhrase}
            onChange={(e) => setEditedPhrase(e.target.value)}
            className="w-full border p-2 mb-2"
          />
          <input
            value={editedAuthor}
            onChange={(e) => setEditedAuthor(e.target.value)}
            className="w-full border p-2 mb-2"
          />
          <Button onClick={handleSave} className="bg-green-500 text-white">
            Save
          </Button>
        </>
      ) : (
        <>
          <p className="text-lg font-semibold">{phrase.phrase}</p>
          <p className="text-sm text-gray-600">— {phrase.author}</p>
          <div className="flex gap-2 mt-2">
            <Button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white">
              Edit
            </Button>
            <Button onClick={() => onDeleteClick(phrase.id)} className="bg-red-500 text-white">
              Delete
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default PhraseCard;
