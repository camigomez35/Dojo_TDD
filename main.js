var express = require('express')
var Codebreaker = require('./Codebreaker')
var app = express();

let codebreaker = new Codebreaker()



app.get('/setsecret/:secret', function(req, res){
  number = req.params.secret;
  codebreaker.setNumber(number);
  res.send({message : "Ok, Number secret was saved"});
});

app.get('/guess/:number', function(req, res){
   number = req.params.number;
   resolve = codebreaker.adivinar(number)
   res.send({result: resolve})
});



module.exports = app;
