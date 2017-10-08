'use strict'

var request = require('request');
var cheerio = require('cheerio');
var cheerioTableparser = require('cheerio-tableparser');
var fs = require('fs');

function getMedicamentos(req,res){

  var producto = req.params.producto;

  request("http://ar.kairosweb.com/resultado_busq.html?prodname="+producto, function(error, response, body) {
    if(error) {
      console.log("Error: " + error);
    }
    
    //console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);
    var productos = [];

    //var tabla = $("table#acordeon tr").text();
    $("table#acordeon tr td.busq").each(function(i){
        productos.push($(this).text().trim());
      //console.log(producto);
    });

    if(response.statusCode == 200){
      /*res.status(200).send({message:'Conexion correcta a kairosweb',
                              data : productos
                           });*/
      res.status(200).send(productos.join());
    }
    
  });

}


module.exports ={
  getMedicamentos
};

