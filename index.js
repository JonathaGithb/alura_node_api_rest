/**
 * index responsavel para coloca o servidor no ar
 * 
 */
//Importando o arquivo de configuraçao express da pasta config.
const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');


conexao.connect(erro =>{
  if(erro) {
    console.log('❌ Erro ao conectar no banco de dados ❌')
  }else {
    console.log('✅Conectado no banco com Sucesso✅')

    Tabelas.init(conexao)

    const app = customExpress()

    app.listen(3000, ()=> console.log('✅LIGADO E CARREGADO COM SUCESSO✅'))
  }

})

