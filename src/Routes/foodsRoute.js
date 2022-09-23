'use strict';

const express = require('express');
const router = express.Router();

const validator = require('../middleware/validator');
const { FoodsModel } = require('../models/index');

// **************   ROUTES   ********************

router.post('/food/create', validator,  async (req, res, send) => {
  try{
    const newFood = await FoodsModel.create(req.body);
    res.status(200).send(newFood);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get('/food/findAll', async (req, res, send) => {
  try {
    const foodList = await FoodsModel.findAll();
    res.status(200).send(foodList);
    console.log(foodList);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get('/food/:id', async(res, req, send) => {
  try{
    const food = await FoodsModel.findOne({
      where: {id: req.params.id},
    });
    res.status(200).send(food);
  } catch (error){
    res.status(404).send(error);
  }
});

router.put('/food/:id', async (res, req, send) => {
  try{
    const food = await FoodsModel.update(req.body);
    res.status(200).send(food);
  } catch (error){
    res.status(404).send(error);
  }
});

router.delete('/food/:id', async (res, req, send) => {
  try{
    const response = await FoodsModel.destroy();
    res.status(200).send('successfully deleted');
  } catch (error){
    res.status(404).send(error);
  }
});

module.exports = router;
