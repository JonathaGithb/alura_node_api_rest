/**
 * Pasta para coloca os controles como
 * GET- POST - PUT - PATCH - DELETE
 */

// modulo para ser exportado para customExpress
module.exports = app => {
  app.get('/atendimentos' , (req, responsta)=>{
    responsta.send('✅Servidor rodando com Sucesso na rota GET✅')
  })
  

  app.post('/atendimentos' , (req, responsta)=>{
    console.log('Atendimento vendiado com Sucesso')
    console.log(req.body)

    responsta.send('✅Servidor rodando com Sucesso na rota POST✅')
  })
}