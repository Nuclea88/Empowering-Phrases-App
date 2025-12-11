import React from 'react';
import Button from '../atoms/Button';

const PhraseCard = ({ phrase, onEditClick, onDeleteClick }) => {
    // 1. Aplicar requisito no funcional: Determinar el nombre del autor.
    const displayAuthor = phrase.author && phrase.author.trim() !== ''
        ? phrase.author
        : 'Anonimous';

    return (
        // Contenedor principal de la tarjeta: color blanco y sombra ligera.
        // Usamos los colores definidos en el Figma
        <div className="bg-white p-6 rounded-lg shadow-md mb-4 border border-gray-100">

            <blockquote className="text-xl italic text-gray-800 mb-4">
                "{phrase.text}"
            </blockquote>

            <footer className="text-right">

                <cite className="block text-sm text-[#7F8C8D] font-semibold not-italic"> — {displayAuthor}
                </cite>
            </footer>

            <div className="flex justify-end space-x-2 mt-4 pt-3 border-t border-gray-100">

                <Button
                    onClick={() => onDeleteClick(phrase.id)}
                    className="bg-transparent text-[#E74C3C] hover:bg-red-50"> Eliminar
                </Button>

                <Button
                    onClick={() => onEditClick(phrase)}
                    className="bg-[#007BFF] text-white hover:bg-[#0056b3]"> Editar
                </Button>
            </div>

        </div>
    );
};

export default PhraseCard;