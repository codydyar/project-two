const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV]);

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//route js file paths

var search = require('./routes/search');

 
app.use('/search', search); //sends search endpoints to be handled by search.js in routes folder

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      'error': {
        message: err.message,
        error: err
      }
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    'error': {
      message: err.message,
      error: {}
    }
  });
});


module.exports = app;