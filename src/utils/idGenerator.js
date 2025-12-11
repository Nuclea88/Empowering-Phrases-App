const idGenerator = (phrases) =>{
    if (!Array.isArray(phrases) || phrases.length === 0) {
        return 1;
    }
        const maxId = phrases.reduce((max, phrase) => {
        const currentId = Number(phrase.id); 
        return currentId > max ? currentId : max;
    }, 0);
    
    return maxId + 1;
}
export {idGenerator};




