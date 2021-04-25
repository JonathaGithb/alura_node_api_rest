/**
 * index responsavel para coloca o servidor no ar
 * 
 */
//Importando o arquivo de configuraçao express da pasta config.
const customExpress = require('./config/customExpress');

const app = customExpress()

app.listen(3000, ()=> console.log('🔋LIGADO E CARREGADO COM SUCESSO🔋'))