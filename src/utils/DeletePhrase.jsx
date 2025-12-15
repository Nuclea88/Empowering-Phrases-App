import React from 'react';
const deletePhrase = (id, array) =>{
let newArray = array.filter((p) => p.id !== id)
return newArray;
}
export default deletePhrase;