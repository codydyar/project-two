var express = require('express');
// const app = express(); //allows app.get instead of express().get, ect...
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV])

router.get('/', function(req, res, next) {
      knex
        .select('type')
        .from('vehicles')
        .then(data => {
          let list = []
          data.forEach(obj=>{
            list.push(obj.type)
          })
          list = list.filter( function( item, index, inputArray ) {
            return inputArray.indexOf(item) == index;
          });
          return list
        })
        .then(data => res.status(200).json(data))
        .catch(err =>
          res.status(404).json({
            message:
              'The data you are looking for could not be found. Please try again'
          })
        );
});


module.exports = router;