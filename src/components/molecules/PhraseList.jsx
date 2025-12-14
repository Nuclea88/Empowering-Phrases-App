// src/components/organisms/PhraseList.jsx
import React from 'react';
import PhraseCard from '../molecules/PhraseCard';

const PhraseList = ({ phrases, onUpdate, onDelete }) => {
  return (
    <div className="grid gap-4 mt-6">
      {phrases.map((p) => (
        <PhraseCard
          key={p.id}
          phrase={p}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default PhraseList;
