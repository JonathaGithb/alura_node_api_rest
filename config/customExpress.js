
//Pasta para as configuração express
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

//exportando o modulo de controle
module.exports = () =>{
  const app = express();

  app.use(bodyParser.urlencoded({ extended : true})),
  app.use(bodyParser.json()),

  consign()
    .include('controlles')
    .into(app)
  
  return app
}

