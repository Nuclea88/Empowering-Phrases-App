import React from 'react';
import PhraseCard from './PhraseCard';

const PhraseList = ({ phrases }) => {
  return (
    <div>
      {phrases.map((phrase, index) => (
        <PhraseCard 
          key={index} 
          text={phrase.text} 
          author={phrase.author} 
        />
      ))}
    </div>
  );
};

export default PhraseList;
