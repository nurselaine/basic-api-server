'use strict';

const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());

const peoplesRouter = require('./Routes/personsRoute');
const foodsRouter = require('./Routes/foodsRoute');

const errorhandle404 = require('./error-handlers/404');
const errorhandle500= require('./error-handlers/500');
const logger = require('./middleware/logger');

function start(){
  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
}

app.use(logger);

app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

// **************   ROUTES   ********************

app.use(peoplesRouter);
app.use(foodsRouter);

app.use('*',errorhandle404);
app.use(errorhandle500);

module.exports = { start, app };
