import React from 'react';
const updatePhrase = (updatedData, array) =>{

    let updatedArray = array.map(phrase =>{
            if (phrase.id === updatedData.id){
                return updatedData;
            }else{
                return phrase;
            }
        });
        return updatedArray;
    };
export default updatePhrase;
