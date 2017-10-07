'use strict'

var app = require('./app');
var port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log("Servidor del api rest hoteles en el puerto "+ port);
});