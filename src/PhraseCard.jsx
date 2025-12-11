import React from 'react';

const PhraseCard = ({ text, author }) => {
  return (
    <div>
      <p>"{text}"</p>
      <small>- {author}</small>
    </div>
  );
};

export default PhraseCard;
