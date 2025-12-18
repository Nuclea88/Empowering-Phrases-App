import React, { useState} from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const PhraseForm = ({ initialData, onSubmit, onCancel}) => {
  const defaultState = {id: null, phrase: '', author:'', image: ''};
  const [formData, setFormData] = useState(initialData || defaultState);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData); 
  };

  const isUpdating = (initialData !== null && initialData !== undefined);
  const title = isUpdating ? 'Update Phrase' : 'Add New Phrase';
  const buttonText = isUpdating ? 'Save Changes' : 'Add Phrase';
  const buttonColor = isUpdating 
    ? 'bg-[#3498db] text-white hover:bg-[#2980b9]' 
    : 'bg-[#2ECC71] text-white hover:bg-[#27ae60]'; 

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4 mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div>

        <label htmlFor="phrase" className="block text-sm font-medium text-gray-700 mb-1">
          Empowerment Phrase
        </label>
        <Input
          id="phrase"
          value={formData.phrase}
          onChange= {handleChange}
          placeholder="Write a phrase here..."
          required
          className="h-20 resize-none"
        />
      </div>

      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
          Author
        </label>
        <Input
          id="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author (optional)"
        />
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
          Image URL
        </label>
        <Input
          id="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL (optional)"
        />
      </div>

      <div className="flex justify-end pt-2 space-x-3">
        {isUpdating && onCancel && (
            <Button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white hover:bg-gray-600 transition duration-200"
            >
              Cancel
            </Button>
        )}
        <Button
          type="submit"
          className={`${buttonColor} transition duration-200`}
        >
         {buttonText}
        </Button>
      </div>
    </form>
  );
};

export default PhraseForm;