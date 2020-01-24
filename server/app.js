const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const PORT = process.env.PORT || 4000;


const config = require('./config/Config');

const routes = require('./routes/Routes');
const userRoutes = require("./routes/User"); //bring in our user routes

const app = express();

//configure database and mongoose
mongoose.set("useCreateIndex", true);
mongoose
  .connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });

app.use(cors());  //enable cors

//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/notes', routes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  console.log("Hello MEVN Soldier");
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// Listen on port defined in environment
app.listen(config.APP_PORT, () => {
  console.log(`App is running on ${config.APP_PORT}`);
}); 

module.exports = app;