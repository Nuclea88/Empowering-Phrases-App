import React from 'react';
import Button from '../atoms/Button';
import "./PhraseCard.css";

const PhraseCard = ({ phrase, onEditClick, onDeleteClick }) => {
  const displayAuthor = phrase.author && phrase.author.trim() !== ''
    ? phrase.author
    : 'Anónimo';

  return (
    <div className="phrase-card-container">
      {phrase.image && (
        <img
          src={phrase.image}
          alt={phrase.phrase}
          className="phrase-card-image"
        />
      )}

      <blockquote className="phrase-card-quote">
        "{phrase.phrase}"
      </blockquote>

      <footer className="phrase-card-footer">
        <cite className="phrase-card-author">
          — {displayAuthor}
        </cite>
      </footer>

      <div className="phrase-card-actions">
        <Button
          onClick={() => onDeleteClick(phrase.id)}
          className="btn-delete"
        >
          Eliminar
        </Button>
        <Button
          onClick={() => onEditClick()}
          className="btn-edit"
        >
          Editar
        </Button>
      </div>
    </div>
  );
};

export default PhraseCard;