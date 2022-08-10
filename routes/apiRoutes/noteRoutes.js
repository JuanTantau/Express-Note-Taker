const router = require('express').Router();
const { filterByQuery, findById, createNewNote, validateNote } = require('../../lib/notes');
const { v4: uuidv4 } = require('uuid');
const notesArray = require('../../data/db.json');

router.get('/notes', (req, res) => {
    let result = notesArray;
    if (req.query) {
        result = filterByQuery(req.query, result)
    }
    res.json(result);
});
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notesArray);
    (result) ? res.json(result) : res.status(404).send('The note with the given ID was not found in the data base!');
});
router.post('/notes', (req, res) => {
    console.log(req.body);
    req.body.id = uuidv4();
        (!validateNote(req.body)) ? res.status(400).send('The note is not properly formatted.') : res.json(createNewNote(req.body, notesArray));
});
router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notesArray);
    note ? res.json(note) : res.status(404).send('The note with the given ID was not found in the data base!');
    const index = notesArray.indexOf(note);
    notesArray.splice(index, 1);
});
module.exports = router;