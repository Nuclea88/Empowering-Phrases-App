import React, { useState } from 'react';

const PhraseForm = ({ initialData, onSubmit, onCancel }) => {
  // 1. Inicializamos el estado con initialData directamente para evitar el useEffect
  const [formData, setFormData] = useState(initialData || {
    phrase: '',
    author: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // 2. Clases de Tailwind para que el texto esté centrado vertical y horizontalmente
  const inputClasses = "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C5A66] text-center placeholder:text-center resize-none bg-gray-50 flex items-center justify-center";

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-[#8C5A66] mb-6 text-center">
        {initialData ? 'Edit Phrase' : 'Add New Phrase'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo de Frase */}
        <div>
          <label className="block text-sm font-bold text-[#8C5A66] mb-1">Empowerment Phrase</label>
          <textarea
            name="phrase"
            value={formData.phrase}
            onChange={handleChange}
            placeholder="Write a phrase here..."
            className={`${inputClasses} h-28 leading-normal py-8`} // Ajustamos el padding-top para centrar en textarea
            required
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-[#8C5A66] mb-1">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author (optional)"
            className={`${inputClasses} h-12`}
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-[#8C5A66] mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL (optional)"
            className={`${inputClasses} h-12`}
          />
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#8C5A66] text-white rounded-md hover:bg-[#7a4e59] transition-colors"
          >
            {initialData ? 'Update Phrase' : 'Add Phrase'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PhraseForm;