/**
 * Pasta para coloca os controles como
 * GET- POST - PUT - PATCH - DELETE
 */

const Atendimento = require('../moldels/atendimentos')


// modulo para ser exportado para customExpress
module.exports = app => {
  app.get('/atendimentos' , (req, responsta)=>{
    responsta.send('✅Servidor rodando com Sucesso na rota GET✅')
  })
  

  app.post('/atendimentos' , (req, responsta)=>{
    const atendimento = req.body
    
    Atendimento.adiciona(atendimento)
    
    responsta.send('✅Servidor rodando com Sucesso na rota POST✅')
  })
}