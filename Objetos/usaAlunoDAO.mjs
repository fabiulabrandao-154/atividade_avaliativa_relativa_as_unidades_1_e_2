//código construído na pasta "/Objetos/usaAlunoDAO.mjs"

import Aluno from './Pessoas/Aluno.js';
import AlunoDAO from './Pessoas/DAOs/AlunoDAO.mjs';                              
import Endereco from './Pessoas/Endereco.js';          
import Telefone from './Pessoas/Telefone.js';
import Disciplina from './Pessoas/Disciplina.js';

// ========== Criação do objeto Aluno ==========

const aluno = new Aluno();                                   
aluno.setNome("Pedro");
aluno.setCPF('123.456.789-10');                                   
aluno.setEmail("pedro@ifb.edu.br");

// ========== Dados específicos do Aluno ==========

aluno.setMatricula('20123456');
aluno.setCurso('SI');

const disciplina = new Disciplina();
disciplina.setNome('Front-End');
aluno.setDisciplina(disciplina);

// ========== Endereço ==========

const end = new Endereco();                            
end.setLogradouro("QNM 40");                           
end.setCep("12345-678");                              
aluno.setEndereco(end);                                 

// ========== Telefones ==========

const fone = new Telefone();                           
fone.setDdd("61");                                    
fone.setNumero("99999-8888");                          
aluno.addTelefone(fone);                                  

const fone2 = new Telefone();                          
fone2.setDdd("62");                                     
fone2.setNumero("99999-7777");                          
aluno.addTelefone(fone2);

// ========== DAO: Serialização, Salvamento e Leitura ==========

const alunodao = new AlunoDAO(aluno);                            

var x = alunodao.toJSON();                                 
alunodao.saveJSON();                                       

console.log("=== DADOS DO ALUNO ===");
console.log("JSON:", x);                                         
console.log("JSON String:", JSON.stringify(x, null, 2));                        
console.log("Completo:", alunodao.recoveryJSON());