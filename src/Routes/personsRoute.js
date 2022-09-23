'use strict';

const express = require('express');
const { PersonsModel } = require('../models/index');
const router = express.Router();

const peoples = require('../Routes/model-functions/persons');
// const foods = require('../model-functions/foods');


// **************   ROUTES   ********************

router.post('/person/create', async (req, res, send) => {

    console.log('hello');
    try {
    console.log('hello');
    const newPerson = await PersonsModel.create(req.body);
    console.log(newPerson);
    res.status(200).send(newPerson);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get('/person', peoples.getAllPersons);

router.get('/person/findOne/:id', peoples.getOnePerson);

router.put('/person/update/:id', peoples.updatePerson);

router.delete('/person/delete/:id', peoples.delete);

module.exports = router;
