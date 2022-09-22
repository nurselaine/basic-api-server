'use strict';

const errorhandle500 = require('../error-handlers/500');

const validator = (req, res, next) => {
//   if(req.originalUrl === '/post') doing this bc validator should only be used on post route
  let { name } = req.body;

  try {
    if (name) {
      res.status(200).send(name);
      next();
    } else {
      res.status(500).send(errorhandle500);
    }
  } catch ( error ){
    next(error.message);
  }
};

module.exports = validator;
