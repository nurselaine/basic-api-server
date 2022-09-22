'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3002;
const { sequelizeDatabase, PeopleModel, FoodModel } = require('./models/index');
const errorhandle404 = require('./error-handlers/404');
const errorhandle500= require('./error-handlers/500');


function start(){
  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
};

app.post('/people', (req, res, send) => {
  const newPerson = PeopleModel.create(req.body);
  res.status(200).send(newPerson);
});

app.post('/food', (req, res, send) => {
  const newFood = FoodModel.create(req.body);
  res.status(200).send(newFood);
});

app.get('/person', async (req, res, send) => {
  try {
    const personList = await PeopleModel.findAll();
    res.status(200).send(personList);
  } catch (error) {
    console.error(error.message);
  }
});

app.get('/person/:id', async () => {
  try{
    const person = await PeopleModel.findOne({
        where: {id: req.params.id};
    })
  } catch (error){
    res.status(404).send(errorhandle404);
  };
});

app.get('/food', async (res, req, send) => {
  try {
    const foodList = await FoodModel.findAll();
    res.status(200).send(foodList);
  } catch (error) {
    console.error(error.message);
  }
});

app.get('/food/:id', () => {
  try{
    const person = await FoodModel.findOne({
      where: {id: req.params.id};
    })
  } catch (error){
      res.status(404).send(errorhandle404);
  };
});

app.put('/person/:id', () => {
  try{
      const person = await PeopleModel.update(req.body);
      res.status(200).send(person);
  } catch (error){
    res.status(404).send(errorhandle404);
  };
});

app.put('/food/:id', () => {
    try{
        const food = await FoodModel.update(req.body);
        res.status(200).send(food);
    } catch (error){
      res.status(404).send(errorhandle404);
    };
});

app.delete('/person/:id', () => {
    try{
        const response = await PeopleModel.destroy();
        res.status(200).send('successfully deleted');
    } catch (error){
      res.status(404).send(errorhandle404);
    };
});

app.delete('/food/:id', () => {
    try{
        const response = await PeopleModel.destroy();
        res.status(200).send('successfully deleted');
    } catch (error){
      res.status(404).send(errorhandle404);
    };
});

module.exports = { start };
