'use strict';

const express = require('express');
const app = express();
const router = express.Router();

const peoples = require('../Routes/model-functions/persons');
const logger = require('../middleware/logger');
// const foods = require('../model-functions/foods');


// **************   ROUTES   ********************

router.post('/people/create', peoples.createPerson);

router.get('/person', peoples.getAllPersons);

router.get('/person/findOne/:id', peoples.getOnePerson);

router.put('/person/update/:id', peoples.updatePerson);

router.delete('/person/delete/:id', peoples.delete);

module.exports = router;
