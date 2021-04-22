var express = require('express');
// const app = express(); //allows app.get instead of express().get, ect...
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV])

router.get('/', function(req, res, next) {
    console.log(req.query); //http://localhost:3001/search?make=Ford&model=Explorer


    var query = knex.select('*').from('vehicles');

      //wall of if statements, checks if the param exists, if it does then it adds to the query results
      if(((req.query.vin === undefined) || (req.query.vin === 'All')) === false) {query.where('VIN', req.query.vin)}
      if(((req.query.type === undefined) || (req.query.type === 'All')) === false) {query.where('type', req.query.type)}
      if(((req.query.year === undefined) || (req.query.year === 'All')) === false) {query.where('year', req.query.year)}
      if(((req.query.make === undefined) || (req.query.make === 'All')) === false) {query.where('make', req.query.make)}
      if(((req.query.model === undefined) || (req.query.model === 'All')) === false) {query.where('model', req.query.model)}
      if(((req.query.color === undefined) || (req.query.color === 'All')) === false) {query.where('color', req.query.color)}
      if(((req.query.mileage === undefined) || (req.query.mileage === 'All')) === false) {query.where('mileage', req.query.mileage)}
      if(((req.query.price === undefined) || (req.query.price === 'All')) === false) {query.where('price', req.query.price)}
      if(((req.query.isNew === undefined) || (req.query.isNew === 'All')) === false) {query.where('isNew', req.query.isNew)}
      
      query.then(data => {
        console.log(data)
        return res.status(200).json(data)
      })
        .catch(err =>
          res.status(404).json({
            message:
              'The data you are looking for could not be found. Please try again'
          })
        );
});


module.exports = router;