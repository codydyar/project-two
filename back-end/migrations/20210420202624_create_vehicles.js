//to add to database run 'npx knex migrate:latest'


exports.up = function(knex) {
    return knex.schema.createTable('vehicles', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('VIN');//VIN 
      table.string('type');//Vehicle type
      table.integer('year');//year
      table.string('make');//make
      table.string('model');//model
      table.string('color');//color
      table.integer('mileage');//mileage
      table.integer('price');//price
      table.boolean('isNew');//isNew 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('vehicles');
  };
