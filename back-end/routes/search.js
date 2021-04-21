var express = require('express');
// const app = express(); //allows app.get instead of express().get, ect...
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV])

router.get('/', function(req, res, next) {
    console.log(req.query); //http://localhost:3001/search?make=Ford&model=Explorer
      knex
        .select('*')
        .from('vehicles')
        //Check for VIN
        .where('VIN', req.query.vin)
        //Check for type
        .orWhere('type', req.query.type)
        //Check for year
        .orWhere('year', req.query.year)
        //Check for make
        .orWhere('make', req.query.make)
        //Check for model
        .orWhere('model', req.query.model)
        //Check for color
        .orWhere('color', req.query.color)
        //Check for mileage
        .orWhere('mileage', req.query.mileage)
        //Check for price
        .orWhere('price', req.query.price)
        //Check for isNew
        .orWhere('isNew', req.query.isNew)
        .then(data => res.status(200).json(data))
        .catch(err =>
          res.status(404).json({
            message:
              'The data you are looking for could not be found. Please try again'
          })
        );
});


module.exports = router;