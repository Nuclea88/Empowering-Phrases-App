import React from 'react';
import PhraseCard from '../molecules/PhraseCard';

const PhraseList = ({ phrases, onUpdate, onDelete }) => {
  if (!phrases.length) {
    return <p className="text-center text-gray-600">There are no phrases yet.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {phrases.map((p) => (
        <PhraseCard
          key={p.id}
          phrase={p}
          onEditClick={(updated) => onUpdate(p.id, updated)}
          onDeleteClick={onDelete}
        />
      ))}
    </div>
  );
};

export default PhraseList;
