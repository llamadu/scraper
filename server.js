var express = require ('express');
var mongoose = require ('mongoose');
var expresshandlebars = (require 'express-handlebars')

var PORT = process.env.PORT || 3000;

var app = express ();

var routes = require('./routes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.engine('handlebars', expresshandlebars({ defaultLayout: main}));
app.set('view engine', 'handlebars');

app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/headlines';

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT);
});