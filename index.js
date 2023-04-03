var express = require('express'),
	app = express(),

bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/routes.js');
routes(app); 

app.listen(3000, () => {
  console.log('El servidor está corriendo en el puerto 3000');
});