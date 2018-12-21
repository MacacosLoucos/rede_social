var fs = require('fs');
var bodyParser = require('body-parser');
var exp = require('express');
var cookieParser = require('cookie-parser');
var app = exp();
var rr = require('./rotas/rota');
var mysql = require('./banco/banco');

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', rr);
app.use(cookieParser());

app.use(exp.static(__dirname + '/public'));


app.listen(3000); 
console.log("App running…");

