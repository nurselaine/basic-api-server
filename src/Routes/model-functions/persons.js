'use strict';

const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const { PersonsModel } = require('../../models/index');

const peoples = {};

peoples.createPerson = async (req, res, send) => {
  console.log('hello');
  try{
    console.log('hello');
    const newPerson = await PersonsModel.create(req.body);
    console.log(req.body);
    res.status(200).send(newPerson);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

peoples.getAllPersons = async (req, res, send) => {
  try {
    const personList = await PersonsModel.findAll();
    res.status(200).send(personList);
  } catch (error) {
    console.error(error.message);
  }
};

peoples.getOnePerson = async (res, req, send) => {
  try{
    const person = await PersonsModel.findOne({
      where: {id: req.params.id},
    });
    res.status(200).send(person);
  } catch (error){
    res.status(404).send(error);
  }
};

peoples.updatePerson = async (res, req, send) => {
  try{
    const { id } = req.params;
    const person = await PersonsModel.update(req.body, {where: {id}});
    res.status(200).send(person);
  } catch (error){
    res.status(404).send(error);
  }
};

peoples.delete = async (res, req, send) => {
  try{
    const { id } = req.params;
    await PersonsModel.destroy({where: {id}} );
    res.status(200).send('Person successfully deleted');
  } catch (error){
    res.status(404).send(error);
  }
};

module.exports = peoples;
