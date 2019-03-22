// var express = require('express');
// var path = require('path');



// var app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, 'dist/Registration')));
// app.use('/', express.static(path.join(__dirname, 'dist/Registration')));

// var apiRouter = require('./server/controllers/book');
// app.use('/tests', apiRouter);


// const farmers = require('./server/routes/farmers');
// app.use('/farmers', farmers);

// console.log('hitting node server..');

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send(err.status);
// });


// module.exports = app;




//Install express server
const express = require('express');
const http=require('http');
const path = require('path');
const app = express();
const port=process.env.PORT ||3001;
// Serve only the static files form the angularapp directory
//app.use(express.static(__dirname + '/dist/my-dream-app'));
app.use(express.static(__dirname + '/Registration'));
// app.get('/teja1', function(req,res) {
// //res.send({value:"hai"});
// res.sendFile(path.join(__dirname));
// });
app.get('/*', function(req,res) {
  // res.send({value:"hai"});
  // console.log(path.join(__dirname));
  res.sendFile(path.join(__dirname));
  });
  const server=http.createServer(app);
  server.listen(port,()=>console.log('Running'));
  // Start the app by listening on the default Heroku port
  //app.listen(process.env.PORT || 8080); 

