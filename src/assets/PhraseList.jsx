const PhraseList = ({ phrases }) => {
  return (
    <div className="phrase-list">
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
