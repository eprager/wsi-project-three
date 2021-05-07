"use strict";
var compression = require('compression');
var express = require('express');
var path = require('path');
const { render } = require('pug');
var port = process.env.PORT || 3000;

// require routes
var indexRouter = require('./routes/index');
var resultsRouter = require('./routes/results');

// init app
var app = express();

// view engine setup
app.set("port",port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(compression());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// set paths to use
app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/results', resultsRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

module.exports = app;
