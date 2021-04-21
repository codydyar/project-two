//to seed database run 'npx knex seed:run'
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(function () {
      // Inserts seed entries
      return knex('vehicles').insert([
      //template
      //{VIN: , type: , year: , make: , model: , color: , mileage: , price: , isNew: },
      {VIN: 'WBXPC9C42AWJ35099', type: 'SUV', year: 2017, make: 'Ford', model: 'Explorer', color: 'Silver', mileage: 60347, price: 54000, isNew: false},
      {VIN: 'WDDGF56X78R033122', type: 'Sedan', year: 2020, make: 'Ford', model: 'Fusion', color: 'Yellow', mileage: 5441, price: 28415, isNew: false},
      {VIN: 'JN1BY1AP0BM320629', type: 'Sedan', year: 2011, make: 'Nissan', model: 'Datsun', color: 'Gold', mileage: 50234, price: 35903, isNew: false},
      {VIN: 'WBSKG9C5XCE797907', type: 'Truck', year: 2021, make: 'Ford', model: 'F-150', color: 'Green', mileage: 0, price: 43717, isNew: true},
      {VIN: 'KNAFU4A23B5460424', type: 'Van', year: 2022, make: 'Ford', model: 'Transit', color: 'White', mileage: 10, price: 41918, isNew: true},
      {VIN: '1HGCM66383A103303', type: 'Sedan', year: 2021, make: 'Audi', model: 'RS9', color: 'Black', mileage: 300000, price: 15, isNew: false},
      {VIN: '1FAFP53U42A230970', type: 'Sedan', year: 2006, make: 'Honda', model: 'Civic-Hybrid', color: 'Gray', mileage: 230000, price: 500, isNew: false},
      ]);
    });
};