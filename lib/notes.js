// Dependencies
const fs = require('fs');
const path = require('path');
const notesArray = require('../data/db.json');// this is an array not object


// !Functions
const filterByQuery = (query, array) => {
    let filteredResults = array;
    query.title);
   if (query.title) return filteredResults = filteredResults.filter(note => note.title === query.title);
    if (query.text) return filteredResults = filteredResults.filter(note => note.text === query.text);
    return filteredResults;
}

const findById = (id, array) => {
    return array.filter(note => note.id === id)[0];
}

const createNewNote = (body, array) => {
    const note = body;
    array.push(note);
    fs.writeFileSync(path.join(__dirname, '../data/db.json'), JSON.stringify(notesArray, null, 2)); // this one causing problem cause it works with objects and we have array, but i fixed it by changing object to an array
    return note;
// return finished code to post route for response
}

const validateNote = note => {
        // could be shorthanded like:
    if (!note.title || typeof note.title !== 'string') return false;
       if (!note.text || typeof note.text !== 'string') return false;
    return true;
}


module.exports = {
    filterByQuery,
    findById,
    createNewNote,
    validateNote
}
