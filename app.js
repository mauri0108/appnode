'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
var rutas_scraping = require('./rutas/scraping');


//cabeceras http

//rutas base
app.use("/api",rutas_scraping);



module.exports = app;

