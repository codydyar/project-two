var express = require('express');
// const app = express(); //allows app.get instead of express().get, ect...
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV])

router.get('/', function(req, res, next) {
    console.log(req.query); //http://localhost:3001/search?make=Ford&model=Explorer
    switch (true) {
      //If model is defined.
      case (req.query.model === undefined):
        knex
          .select('*')
          .from('vehicles')
          .where('make', req.query.make)
          .then(data => res.status(200).json(data))
          .catch(err =>
            res.status(404).json({
              message:
                'The data you are looking for could not be found. Please try again'
            })
          );
        break;

      case (req.query.color === undefined):
        knex
          .select('*')
          .from('vehicles')
          .where('make', req.query.make)
          .where('model', req.query.model)
          .then(data => res.status(200).json(data))
          .catch(err =>
            res.status(404).json({
              message:
                'The data you are looking for could not be found. Please try again'
            })
          );
        break;
      
      default:
        knex
          .select('*')
          .from('vehicles')
          .then(data => res.status(200).json(data))
          .catch(err =>
            res.status(404).json({
              message:
                'The data you are looking for could not be found. Please try again'
            })
          );
    }
});


module.exports = router;