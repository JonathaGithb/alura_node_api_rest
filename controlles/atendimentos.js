/**
 * Pasta para coloca os controles como
 * GET- POST - PUT - PATCH - DELETE
 */

// modulo para ser exportado para customExpress
module.exports = app => {
  app.get('/atendimentos' , (req, responsta)=>{
    responsta.send('⏲Servidor rodando com Sucesso⏲')
  })
  
}