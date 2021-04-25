
//Pasta para as configuração express
const express = require('express');
const consign = require('consign');

//exportando o modulo de controle
module.exports = () =>{
  const app = express();

  consign()
    .include('controlles')
    .into(app)
  
  return app
}

