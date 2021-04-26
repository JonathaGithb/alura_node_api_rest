// Conexão com banco de dados MYSQL
class Tabelas {
  init(conexao){
    this.conexao =  conexao;
    
    this.criarAtendimento()

  }
  criarAtendimento(){
    const sql = 'CREATE TABLE IF NOT EXISTS atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) not null, pet varchar(20), serviço varchar(20) not null,status varchar(20) not null,Observação text, primary key(id))'

    this.conexao.query(sql, erro =>{
      if(erro) {
        console.log('❌erro ao Criar a tabela');
      }else {
        console.log('✅Tabela criado com Sucesso ✅');
      }
    })
  }
}

module.exports = new Tabelas;