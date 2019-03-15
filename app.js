var express = require('express');
var path = require('path');



var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist/Registration')));
app.use('/', express.static(path.join(__dirname, 'dist/Registration')));

var apiRouter = require('./server/controllers/book');
app.use('/tests', apiRouter);


const farmers = require('./server/routes/farmers');
app.use('/farmers', farmers);

console.log('hitting node server..');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});


module.exports = app;
