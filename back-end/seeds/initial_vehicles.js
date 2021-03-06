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
      {VIN: 'JA4LS21H23J013624', type: 'SUV', year: 2018, make: 'BMW', model: 'X6', color: 'Silver', mileage: 26351, price: 11656, isNew: true},
      {VIN: '1GCHK29182E137049', type: 'Truck', year: 1996, make: 'Honda', model: 'Ridgeline', color: 'Red', mileage: 59877, price: 29082, isNew: true},
      {VIN: 'WBAWB73569P167162', type: 'Truck', year: 2013, make: 'GMC', model: 'Yukon', color: 'White', mileage: 231784, price: 29598, isNew: false},
      {VIN: '3N1BC13E09L405775', type: 'SUV', year: 2003, make: 'BMW', model: 'X5', color: 'Silver', mileage: 285060, price: 4105, isNew: false},
      {VIN: '5LMFU28R04LJ60888', type: 'Sedan', year: 1997, make: 'Kia', model: 'Optima', color: 'Blue', mileage: 27405, price: 14208, isNew: false},
      {VIN: '1GTN1TEH1EZ368080', type: 'Van', year: 2001, make: 'Audi', model: 'Superavant', color: 'Orange', mileage: 234818, price: 31019, isNew: false},
      {VIN: '1D7KS28C26J286830', type: 'Van', year: 1996, make: 'Dodge', model: 'Grand Caravan', color: 'Orange', mileage: 230269, price: 33805, isNew: false},
      {VIN: '1N4BL2APXCC294829', type: 'Van', year: 2018, make: 'Honda', model: 'Odyssey', color: 'Black', mileage: 67980, price: 32919, isNew: false},
      {VIN: 'JS2RC41HX35295003', type: 'SUV', year: 2017, make: 'Volvo', model: 'X90', color: 'Red', mileage: 171032, price: 32157, isNew: false},
      {VIN: '2G1WH52K649197324', type: 'Van', year: 1999, make: 'Bentley', model: 'Bentayga', color: 'Black', mileage: 174533, price: 2723, isNew: true},
      {VIN: '3VWRW31C36M457257', type: 'Sedan', year: 2016, make: 'BMW', model: '2', color: 'Yellow', mileage: 118010, price: 55826, isNew: true},
      {VIN: '5TFBY5F13EX393599', type: 'Sedan', year: 2021, make: 'Dodge', model: 'Charger', color: 'Gray', mileage: 100702, price: 39558, isNew: false},
      {VIN: '5N1AA08B76N768766', type: 'Van', year: 2013, make: 'Ford', model: 'Transit', color: 'Blue', mileage: 66789, price: 44656, isNew: true},
      {VIN: '1FAFP52234A133102', type: 'SUV', year: 2010, make: 'Volvo', model: 'X90', color: 'Red', mileage: 244729, price: 24019, isNew: false},
      {VIN: '2D4RN5DX9AR246715', type: 'SUV', year: 2003, make: 'BMW', model: 'X5', color: 'Yellow', mileage: 162543, price: 62420, isNew: true},
      {VIN: '3G2JB14F25S102794', type: 'Truck', year: 2007, make: 'Audi', model: 'Q7', color: 'Yellow', mileage: 131908, price: 49127, isNew: false},
      {VIN: '1FTPW12535KD86324', type: 'Van', year: 2015, make: 'Kia', model: 'Sedona', color: 'Blue', mileage: 237626, price: 32278, isNew: false},
      {VIN: '1GNEC13Z33J215522', type: 'SUV', year: 1998, make: 'Jeep', model: 'Wrangler', color: 'Yellow', mileage: 201743, price: 43643, isNew: false},
      {VIN: '1B3CB3HA4BD292433', type: 'SUV', year: 2017, make: 'Volvo', model: 'XC90', color: 'Green', mileage: 109651, price: 32480, isNew: false},
      {VIN: 'WBAAV33401FU67694', type: 'Sedan', year: 2013, make: 'Volvo', model: 'S90', color: 'Red', mileage: 182982, price: 13775, isNew: true},
      {VIN: 'JM1BC1417W0226229', type: 'Sedan', year: 1998, make: 'Volvo', model: 'S60', color: 'White', mileage: 221348, price: 17585, isNew: true},
      {VIN: '1FTKR4EEXBPA89791', type: 'Truck', year: 2018, make: 'Jeep', model: 'Gladiator', color: 'White', mileage: 134103, price: 24034, isNew: true},
      {VIN: '1N4AA51E99C882893', type: 'Sedan', year: 2010, make: 'Bentley', model: 'Continental GT', color: 'Orange', mileage: 15099, price: 25676, isNew: false},
      {VIN: '1FTSW21P36EB18764', type: 'Sedan', year: 2013, make: 'Honda', model: 'Civic', color: 'Black', mileage: 259198, price: 22196, isNew: false},
      {VIN: '1GDM7H1J4NJ556554', type: 'Truck', year: 2003, make: 'Ford', model: 'F-150', color: 'Gray', mileage: 186838, price: 18444, isNew: false},
      {VIN: '1FTRX17L02NB40127', type: 'SUV', year: 2011, make: 'Volvo', model: 'XC60', color: 'Blue', mileage: 54248, price: 2919, isNew: false},
      {VIN: '4T1BF22K2VU903442', type: 'Sedan', year: 2008, make: 'Honda', model: 'Civic', color: 'Gray', mileage: 97912, price: 53785, isNew: false},
      {VIN: 'KM8SC73D04U686655', type: 'SUV', year: 2009, make: 'Kia', model: 'Telluride', color: 'Blue', mileage: 89655, price: 7512, isNew: true},
      {VIN: '1FT7W2BT5DEB82870', type: 'Van', year: 2018, make: 'Bentley', model: 'Bentayga', color: 'Black', mileage: 140474, price: 38984, isNew: true},
      {VIN: '1HGEM22533L066061', type: 'SUV', year: 2014, make: 'Bentley', model: 'Bentayga Speed', color: 'Black', mileage: 121249, price: 51884, isNew: true},
      {VIN: '1D7HU18218J192320', type: 'Truck', year: 2018, make: 'Dodge', model: 'Ram', color: 'Orange', mileage: 117879, price: 43003, isNew: false},
      {VIN: '2T1BU4EE2BC550687', type: 'Sedan', year: 2011, make: 'Kia', model: 'K900', color: 'Yellow', mileage: 185794, price: 19409, isNew: true},
      {VIN: '5TBRN341X2S269788', type: 'Van', year: 2009, make: 'Kia', model: 'Sedona', color: 'White', mileage: 108235, price: 53616, isNew: true},
      {VIN: '1FUYDDYB5XPA08533', type: 'Van', year: 2018, make: 'Ford', model: 'Transit', color: 'Green', mileage: 215113, price: 22946, isNew: false},
      {VIN: '5FNRL5H90EB073912', type: 'Van', year: 2014, make: 'Audi', model: 'Superavant', color: 'Red', mileage: 87858, price: 30261, isNew: false},
      {VIN: '2CNDL73FX66127626', type: 'SUV', year: 2009, make: 'Volvo', model: 'XC60', color: 'White', mileage: 61612, price: 60779, isNew: true},
      {VIN: '1FTFW1CT3DKF03164', type: 'SUV', year: 2002, make: 'GMC', model: 'Yukon', color: 'Blue', mileage: 146130, price: 4974, isNew: false},
      {VIN: '3A4GY5F9XAT178961', type: 'Sedan', year: 2005, make: 'BMW', model: '3', color: 'White', mileage: 160965, price: 9182, isNew: false},
      {VIN: '4TAVL52N4XZ503972', type: 'SUV', year: 1997, make: 'Jeep', model: 'Wrangler', color: 'White', mileage: 66344, price: 30581, isNew: false},
      {VIN: '1FUJCRCK27PX92482', type: 'Sedan', year: 2019, make: 'Dodge', model: 'Charger', color: 'Gray', mileage: 266797, price: 20096, isNew: false},
      {VIN: 'JTHBA30G745027207', type: 'SUV', year: 2008, make: 'Volvo', model: 'XC90', color: 'Blue', mileage: 45059, price: 25892, isNew: false},
      {VIN: 'WBALZ3C57CDL67323', type: 'SUV', year: 1996, make: 'Honda', model: 'Pilot', color: 'White', mileage: 164823, price: 57644, isNew: false},
      {VIN: 'TRURD38J081015703', type: 'Truck', year: 2001, make: 'Bentley', model: 'Bentayga V8', color: 'Green', mileage: 262609, price: 52165, isNew: false},
      {VIN: '2FMDK39C79BA92743', type: 'SUV', year: 1998, make: 'Dodge', model: 'Durango', color: 'Red', mileage: 36103, price: 21191, isNew: true},
      {VIN: '5N1AA0NC7EN638000', type: 'SUV', year: 2014, make: 'Bentley', model: 'Bentayga Speed', color: 'Orange', mileage: 194371, price: 68859, isNew: false},
      {VIN: '1G6DM57T870131659', type: 'SUV', year: 2016, make: 'Volvo', model: 'XC90', color: 'Orange', mileage: 47667, price: 22866, isNew: true},
      {VIN: '5FNRL5H23EB026909', type: 'Truck', year: 2004, make: 'Bentley', model: 'Bentayga V8', color: 'Orange', mileage: 279774, price: 37402, isNew: true},
      {VIN: '4T1BF3EK5AU074197', type: 'Truck', year: 2008, make: 'Dodge', model: 'Ram', color: 'Gray', mileage: 132085, price: 49418, isNew: false},
      {VIN: '1FTSW21P76EA51389', type: 'Sedan', year: 2004, make: 'Audi', model: 'A3', color: 'Blue', mileage: 32938, price: 4812, isNew: true},
      {VIN: '5XYKTDA10BG171116', type: 'SUV', year: 1999, make: 'BMW', model: 'X5', color: 'White', mileage: 159766, price: 53743, isNew: true}
      ]);
    });
};