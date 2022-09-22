// this is where the schemas for all DB tables
'use strict';

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const personsSchema = require('./persons.schema');
const foodsSchema = require('./foods.schema');
const ModelInterface = require('./modelInterface');

// 'postgres://localhost:5432/database_development
// 'postgres://username:password@localhost:5432/database_development

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// create people and food models with the given schema by calling functions
const PersonsModel = personsSchema(sequelizeDatabase, DataTypes);
const FoodsModel = foodsSchema(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  PersonsModel,
  FoodsModel,
  personInterface: new ModelInterface(PersonsModel), // instance of class which is not normally uppercase
};
