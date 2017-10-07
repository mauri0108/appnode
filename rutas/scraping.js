'use strict'

var express = require('express');
var ScrapingControlador = require('../controladores/scraping.js');

var api = express.Router();

api.get('/medicamento/:producto',ScrapingControlador.getMedicamentos);


module.exports = api;