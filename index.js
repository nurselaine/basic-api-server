'use strict';

const { sequelizeDatabase, PersonsModel, FoodsModel } = require('./src/models');
const { start } = require('./src/server');

sequelizeDatabase.sync() // this will create tables in DB BUT will NOT create DB
  .then(() => {
    console.log('successfully connected to DB');
    // PersonModel.create({name: 'Elaine'});
    // FoodModel.create({name: 'salmon'});
  })
  .catch((error) => console.error(error.message));

start();
