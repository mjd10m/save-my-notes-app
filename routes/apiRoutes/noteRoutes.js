const { createNewNote, deleteNote } = require('../../lib/note')
const { notes } = require('../../database/db')
const router = require('express').Router();

//called to retrieve notes from json storage file
router.get('/notes', (req, res) => {
    const result = notes;
    if(result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }    
})

//call to add a new note to json storage file
router.post('/notes', (req, res) => {
        const note = createNewNote(req.body, notes);
        res.json(note);
});

//call to delete note from json storage file
router.delete('/notes/:id', (req, res) => {
    const result = deleteNote(req.params.id, notes);
    if(result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }    
})

module.exports = router
