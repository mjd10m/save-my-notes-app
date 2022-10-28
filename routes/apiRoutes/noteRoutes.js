const { } = require('../../lib/note')
const { note } = require('../../db/db.json')
const router = require('express').Router();

router.get('/notes', (req, res) => {
    const result = note;
    console.log(result)
    if(result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }    
})

/*router.post('/animals', (req, res) => {
    req.body.id = animals.length.toString();
    if(!validateAnimal(req.body)) {
        res.status(400).send('The Animal is not properly formatted');
    } else {
        const animal = createNewAnimal(req.body, animals);
        res.json(animal);
    }
});*/

module.exports = router
