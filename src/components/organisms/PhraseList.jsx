import React from 'react';
import PhraseCard from '../molecules/PhraseCard';

const PhraseList = ({ phrases, onUpdate, onDelete }) => {
  if (!phrases.length) return <p className="text-center text-gray-600">No phrases yet.</p>;

  return (
    <div className="cards-grid">
      {phrases.map((p) => (
        <PhraseCard
          key={p.id}
          phrase={p}
          onEditClick={() => onUpdate(p)} 
          onDeleteClick={() => onDelete(p.id)} 
        />
      ))}
    </div>
  );
};

export default PhraseList;