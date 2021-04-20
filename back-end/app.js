const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV]);

app.use(bodyParser.json());

app.get('/', function(req, res) {
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});