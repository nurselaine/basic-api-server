// this is where the schemas for all DB tables
'use strict';

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const personSchema = require('./person.schema');
const foodSchema = require('./food.schema');

// 'postgres://localhost:5432/database_development
// 'postgres://username:password@localhost:5432/database_development

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

// create people and food models with the given schema by calling functions
const PersonModel = personSchema(sequelizeDatabase, DataTypes);
const FoodModel = foodSchema(sequelizeDatabase, DataTypes);

// sequelizeDatabase.sync() // this will create tables in DB BUT will NOT create DB
//   .then(() => console.log('successfully connected to DB'))
//   .catch((error) => console.error(error.message));

//   running npm run db:create in terminal

module.exports = { sequelizeDatabase, PersonModel, FoodModel };
