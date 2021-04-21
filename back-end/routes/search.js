var express = require('express');
// const app = express(); //allows app.get instead of express().get, ect...
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV])

router.get('/', function(req, res, next) {
    console.log('in search.js')
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

});

module.exports = router;


router.get('/', function(req, res, next) {
    knex('actors').then(function (actors) {
      res.json(actors)
    }).catch(function (err) {
      next(new Error(err));
    })
  });
  