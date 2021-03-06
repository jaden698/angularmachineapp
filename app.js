var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var machineRouter = require('./routes/machines');

var app = express();

var mongoose=require('mongoose')

//mongoose.connect('mongodb://localhost/machine')

mongoose.connect('mongodb+srv://jMdWvOKqaxyocU97:jMdWvOKqaxyocU97@cluster0.cca9k.mongodb.net/machine?retryWrites=true&w=majority')

var cors=require('cors')

app.use(cors({
  origin:'http://localhost:4200'
}))

app.use('/',express.static(path.join("my-app")))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/machines', machineRouter);


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
  res.render('error');
});

app.get('/*', async (req,res)=>{
   
    
  res.sendFile(path.join(__dirname,"my-app","index.html"))
})
module.exports = app;
