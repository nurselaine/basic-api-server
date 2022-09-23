'use strict';

const express = require('express');
const router = express.Router();
require('dotenv').config();
const PORT = process.env.PORT || 3002;

// const personRouter = require('./Routes/personsRoute');
// const foodsRouter = require('./Routes/foodsRoute');

// const errorhandle404 = require('./error-handlers/404');
// const errorhandle500 = require('./error-handlers/500');
// const logger = require('./middleware/logger');

// **************   ROUTES   ********************
const app = express();
app.use(express.json());
// app.use(logger);

// app.use(personRouter);
// app.use(foodsRouter);


app.get('/', (req, res) => {
  res.status(200).send('hello world');
});


function start() {
  app.listen(PORT, () => { console.log(`Listening on PORT ${PORT}`); });
}

// app.use('*', errorhandle404);
// app.use(errorhandle500);

module.exports = { start, app };
