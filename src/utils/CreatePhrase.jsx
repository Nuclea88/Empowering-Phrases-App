import React from 'react';
import idGenerator from './utils/idGenerator';
const createPhrase = (newPhrase, array) =>{
let phrase = {
      id: idGenerator(array),
      phrase: newPhrase.phrase, 
      author: newPhrase.author || 'Anónimo',
      image: newPhrase.image || ''
    };
let newArray = [phrase, ...phrasesArray];
return newArray; 
}
export default createPhrase;