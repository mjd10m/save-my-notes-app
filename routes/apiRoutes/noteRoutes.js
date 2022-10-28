const { createNewNote } = require('../../lib/note')
const { notes } = require('../../database/db')
const router = require('express').Router();
console.log(notes)

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

module.exports = router
