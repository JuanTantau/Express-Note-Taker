// function to be usedtto create a new router object
const router = require('express').Router();
//  writes the path to the file
const path = require('path');

// access front end home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});
module.exports = router;