var express = require('express');
// const app = express(); //allows app.get instead of express().get, ect...
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV])

router.post('/', function(req, res, next) {
      console.log('admin post request recieved')
      console.log(req.body)
    //creating a newVehicle variable to convert numbers sent as strings back into actual numbers
    let newVehicle = req.body
        newVehicle.year = parseInt(newVehicle.year)
        newVehicle.mileage = parseInt(newVehicle.mileage)
        newVehicle.price = parseInt(newVehicle.price)

    knex('vehicles')
      .insert([
        {VIN: newVehicle.vin, type: newVehicle.type, year: newVehicle.year, make: newVehicle.make, model: newVehicle.model, color: newVehicle.color, mileage: newVehicle.mileage, price: newVehicle.price, isNew: newVehicle.isNew}
        ])
      .then(() => res.status(200).send('Data posted successfully'))
      .catch(err =>
          res.status(404).json({
            message:
              'The data failed to send'
          })
        );
    
});


module.exports = router;