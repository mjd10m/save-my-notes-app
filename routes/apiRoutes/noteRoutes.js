const { createNewNote, deleteNote } = require('../../lib/note')
const { notes } = require('../../database/db')
const router = require('express').Router();

router.get('/notes', (req, res) => {
    const result = notes;
    if(result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }    
})

router.post('/notes', (req, res) => {
        const note = createNewNote(req.body, notes);
        res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const result = deleteNote(req.params.id, notes);
    if(result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }    
})

module.exports = router
