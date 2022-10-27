const { } = require('../../lib/animals')
const { note } = require('../../db/db')
const router = require('express').Router();

/*router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if(result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }    
})

router.post('/animals', (req, res) => {
    req.body.id = animals.length.toString();
    if(!validateAnimal(req.body)) {
        res.status(400).send('The Animal is not properly formatted');
    } else {
        const animal = createNewAnimal(req.body, animals);
        res.json(animal);
    }
});*/

module.exports = router
