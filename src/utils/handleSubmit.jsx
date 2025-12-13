 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación simple: la frase no puede estar vacía
    if (!phrase.trim()) return;

    // Envía los datos al componente padre (App.jsx) a través del prop 'onAdd'
    onAdd({ text: phrase, author, image }); 

    // Resetea el formulario después del envío exitoso
    setPhrase('');
    setAuthor('');
    setImage('');
  };

  return (
    // Aplicar estilos de tarjeta (card) al formulario (fondo blanco, sombra)
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4 mb-6">
      <h2 className="text-xl font-semibold mb-2">Add New Phrase</h2>
      <div>

        <label htmlFor="input-phrase" className="block text-sm font-medium text-gray-700 mb-1">
          Empowerment Phrase
        </label>
        <Input
          id="input-phrase"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          // PLACEHOLDER
          placeholder="Write a phrase here..."
          required
          // Estilo para hacerlo más alto
          className="h-20 resize-none"
        />
      </div>


      <div>
        <label htmlFor="input-author" className="block text-sm font-medium text-gray-700 mb-1">
          Author
        </label>
        <Input
          id="input-author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          // PLACEHOLDER
          placeholder="Author (optional)"
        />
      </div>

      <div>
        <label htmlFor="input-image" className="block text-sm font-medium text-gray-700 mb-1">
          Image URL
        </label>
        <Input
          id="input-image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          // PLACEHOLDER
          placeholder="Image URL (optional)"
        />
      </div>

      <div className="flex justify-end pt-2">
        <Button
          type="submit"
          // Aplicar el estilo de color Success definido: Verde para Añadir
          className="bg-[#2ECC71] text-white hover:bg-[#27ae60] transition duration-200"
        >
          
          Add Phrase
        </Button>
      </div>
    </form>
  );
};

export default PhraseForm;