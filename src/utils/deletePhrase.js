const deletePhrase = (id, array) =>{
const index = array.findIndex(phrasesArray.id === id);
array.splice(index, 1);
}
export {deletePhrase}