'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3002;
const { sequelizeDatabase, PeopleModel } = require('./models/index');

app.post('', )

const start = () => {
  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);

  });
};

app.post('/people', (req, res, send) => {
  const newPerson = PeopleModel.create(req.body);
  res.status(200).send(newPerson);
});

module.exports = { start };
