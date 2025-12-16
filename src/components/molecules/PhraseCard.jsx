import React from 'react';
import Button from '../atoms/Button';

const PhraseCard = ({ phrase, onEditClick, onDeleteClick }) => {
  const displayAuthor = phrase.author && phrase.author.trim() !== ''
    ? phrase.author
    : 'Anónimo';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4 border border-gray-100">
      {phrase.image && (
        <img
          src={phrase.image}
          alt={phrase.phrase}
          className="w-full h-40 object-cover mb-2 rounded"
        />
      )}

      <blockquote className="text-xl italic text-gray-800 mb-4">
        "{phrase.phrase}"
      </blockquote>

      <footer className="text-right">
        <cite className="block text-sm text-[#7F8C8D] font-semibold not-italic">
          — {displayAuthor}
        </cite>
      </footer>

      <div className="flex justify-end space-x-2 mt-4 pt-3 border-t border-gray-100">
        <Button
          onClick={() => onDeleteClick(phrase.id)}
          className="bg-transparent text-[#E74C3C] hover:bg-red-50">
          Eliminar
        </Button>
        <Button
          onClick={() => onEditClick()}
          className="bg-[#8C5A66] text-white hover:bg-[#734651]">
          Editar
        </Button>
      </div>
    </div>
  );
};

export default PhraseCard;
