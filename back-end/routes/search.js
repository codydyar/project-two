var express = require('express');
// const app = express(); //allows app.get instead of express().get, ect...
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV])

router.get('/', function(req, res, next) {
    console.log(req.query); //http://localhost:3001/search?make=Ford&model=Explorer


    var query = knex.select('*').from('vehicles');

      //wall of if statements, checks if the param exists, if it does then it adds to the query results
      if(req.query.vin !== undefined) {query.where('VIN', req.query.vin)}
      if(req.query.type !== undefined) {query.where('type', req.query.type)}
      if(req.query.year !== undefined) {query.where('year', req.query.year)}
      if(req.query.make !== undefined) {query.where('make', req.query.make)}
      if(req.query.model !== undefined) {query.where('model', req.query.model)}
      if(req.query.color !== undefined) {query.where('color', req.query.color)}
      if(req.query.mileage !== undefined) {query.where('mileage', req.query.mileage)}
      if(req.query.price !== undefined) {query.where('price', req.query.price)}
      if(req.query.isNew !== undefined) {query.where('isNew', req.query.isNew)}
      
      query.then(data => res.status(200).json(data))
        .catch(err =>
          res.status(404).json({
            message:
              'The data you are looking for could not be found. Please try again'
          })
        );
});


module.exports = router;